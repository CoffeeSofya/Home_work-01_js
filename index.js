"use strict"

function Queue() {
    this._oldestIndex = 1;
    this._newestIndex = 1;
    this._storage = {};
}
 
Queue.prototype.size = function() {
    return this._newestIndex - this._oldestIndex;
};
 
Queue.prototype.enqueue = function(data) {
    this._storage[this._newestIndex] = data;
    this._newestIndex++;
};
 
Queue.prototype.dequeue = function() {
    var oldestIndex = this._oldestIndex,
        newestIndex = this._newestIndex,
        deletedData;
 
    if (oldestIndex !== newestIndex) {
        deletedData = this._storage[oldestIndex];
        delete this._storage[oldestIndex];
        this._oldestIndex++;
 
        return deletedData;
    }
};






let newQueue = new Queue();

function clearInput() {
    document.querySelector("input").value = '';
}


function addItemQueue(){

    const list = document.querySelectorAll('span');
    for (let checkbox of list) {
      checkbox.remove();
    }


    var text = document.getElementById('addQueue').value;
    if(text != 0){
        newQueue.enqueue(text);
    } else {
        alert('Вы ничего не ввели!')
    }

    // Добавление в body
    // let body = document.querySelector('body');
    // for (let value of Object.values(newQueue._storage)) {
    //     let el = document.createElement('span');
    //     el.className = 'queue-class';
    //     el.innerText = value;
    //     body.appendChild(el);
    // }


    //Добавление в класс с id='queue'
	let queue = document.getElementById('queue')
	let firstLi = queue.getElementsByTagName('span')[0]
    for (let value of Object.values(newQueue._storage)) {
        let el = document.createElement('span');
        el.className = 'queue__class';
        el.innerText = value;
        queue.insertBefore(el, firstLi);
    }

    clearInput();

}

function removeItemQueue(){
    const list = document.querySelectorAll('span');
    for (let checkbox of list) {
      checkbox.remove();
    }
    var text = document.getElementById('addQueue').value;
    newQueue.dequeue(text);

	let queue = document.getElementById('queue')
	let firstLi = queue.getElementsByTagName('span')[0]
    for (let value of Object.values(newQueue._storage)) {
        let el = document.createElement('span');
        el.className = 'queue__class';
        el.innerText = value;
        queue.insertBefore(el, firstLi);
    }

}

function showSizeQueue(){
    alert( 'Длина очереди: ' + newQueue.size());
}