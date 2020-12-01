var Queue = (function(){
    function Queue() {
        this.dataStore = [];
        this.dataStore.length = 10;
        this.back = -1;
        this.front = -1;
    }
    Queue.prototype.isEmpty = function(){
        if(this.back === -1 && this.front === -1){
            return true;
        } else {
            return false;
        }
    }
    Queue.prototype.enqueue = function(item) {
        if((this.back + 1)%this.dataStore.length === this.front){
            return;
        }
        else if(this.isEmpty()){
            this.back++;
            this.front++;
            this.dataStore[this.front] = item;
        } else {
            this.back = (this.back + 1)%this.dataStore.length;
            this.dataStore[this.back] = item;
        }
    }
    Queue.prototype.dequeue = function() {
        if(this.isEmpty()){
            console.log("The queue is already empty");
            return;
        } else if(this.back === this.front){
            this.front = -1;
            this.back = -1;
        } else {
            let output = this.dataStore[this.front];
            this.front = (this.front + 1)%this.dataStore.length;
            return output;
        }
    }
    Queue.prototype.front = function(){
        return this.dataStore[this.front];
    }
    Queue.prototype.display = function() {
        console.log(this.dataStore);
    }
    return Queue;
})();
module.exports = Queue;
