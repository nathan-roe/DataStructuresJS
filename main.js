var Queue = require('./queue');
var queue = new Queue();
queue.enqueue("Bird");
queue.display();
queue.enqueue("Magic");
queue.display();
queue.enqueue("Jordan");
queue.display();
queue.dequeue();
queue.display();
