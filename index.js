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
    let oldestIndex = this._oldestIndex,
        newestIndex = this._newestIndex,
        deletedData;
 
    if (oldestIndex !== newestIndex) {
        deletedData = this._storage[oldestIndex];
        delete this._storage[oldestIndex];
        this._oldestIndex++;
 
        return deletedData;
    }
};







//redefining the console
var console = (function(oldCons, time){
    return {
        log: function(text){
            oldCons.log( getCurrentDate.apply(null, time), text );
        },
        info: function (text) {
            oldCons.info( getCurrentDate.apply(null, time), text );   
        },
        warn: function (text) {
            oldCons.warn( getCurrentDate.apply(null, time), text );   
        },
        error: function (text) {
            oldCons.error( getCurrentDate.apply(null, time), text );
        }
    };
}(window.console));

window.console = console;


function getCurrentDate() {
    var data = new Date();  
    var time  = data.getHours() + ":" +  data.getMinutes() + ":" +  data.getSeconds() + " " +
    data.getDate() + '/' + data.getMonth() + '/' + data.getFullYear();
    return time;       
}







function addTegToHtml() {
    let queue = document.getElementById('queue');
	let firstLi = queue.getElementsByTagName('span')[0];
    for (let value of Object.values(newQueue._storage)) {
        let el = document.createElement('span');
        el.className = 'queue__class';
        el.innerText = value;
        queue.insertBefore(el, firstLi);
    }
}

function removeTegFromHtml() {
    const span = document.querySelectorAll('span');
    for (let checkbox of span) {
      checkbox.remove();
    }
}

function clearInput() {
    document.querySelector("input").value = '';
}




let newQueue = new Queue();

function addItemQueue(){
    removeTegFromHtml();

    let text = document.getElementById('addQueue').value;
    if(text !== ''){
        newQueue.enqueue(text);
        console.log('Добавление элемента ' + '\'' + text + '\'' + ' в очередь!');
    } else {
        alert('Вы ничего не ввели!');
        console.log('Попытка добавить пустую строку!');
    }

    addTegToHtml();

    clearInput();
}

function removeItemQueue(){
    removeTegFromHtml();
    newQueue.dequeue();
    addTegToHtml();
    console.log('Удаление первого элемента из очереди!');
}

function showSizeQueue(){
    let currentSize = newQueue.size();
    alert( 'Длина очереди: ' + currentSize);
    console.log('Запрос на длину очереди! Длина очереди: ' + currentSize);
}