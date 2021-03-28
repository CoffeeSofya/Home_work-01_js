"use strict";

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
let console = (function(oldCons, time){
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
    let data = new Date();  
    let time  = ('0' + data.getHours()).slice(-2) + ":" +  
                ('0' + data.getMinutes()).slice(-2) + ":" +  
                ('0' + data.getSeconds()).slice(-2) + " " +
                ('0' + data.getDate()).slice(-2) + '/' + 
                ('0' + ( data.getMonth() + 1 )).slice(-2) + '/' + 
                ('0' + data.getFullYear()).slice(-2);
    return time;       
}







function addTegToHtml() {
    try{
        let queue = document.getElementById('queue');
        let firstSpan = queue.getElementsByTagName('span')[0];
        for (let value of Object.values(newQueue._storage)) {
            let newTagSpan = document.createElement('span');
            newTagSpan.className = 'queue__class';
            newTagSpan.innerText = value;
            queue.insertBefore(newTagSpan, firstSpan);
        }
    } catch(e) {
        console.log(e);
    }
}

function removeTegFromHtml() {
    try {
        const span = document.querySelectorAll('span');
        for (let checkbox of span) {
             checkbox.remove();
        }
    } catch(e) {
        console.log(e);
    }
}

function clearInput() {
    document.querySelector("input").value = '';
}




let newQueue = new Queue();

function addItemQueue(){
    removeTegFromHtml();

    try {
        let text = document.getElementById('addQueue').value;
        if(text !== null && text !== ''){
            newQueue.enqueue(text);
            console.log('Добавление элемента ' + '\'' + text + '\'' + ' в очередь!');
        } else {
            alert('Вы ничего не ввели!');
            console.log('Попытка добавить пустую строку!');
        }
    }  catch(e) {
        console.log(e);
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