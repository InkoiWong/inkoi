class EventEmitter {
  constructor() {
    this.listener = {};
  }
  on(eventName, fn) {
    const listener =
      this.listener[eventName] || (this.listener[eventName] = []);
    listener.push(fn);
  }
  emit(eventName, ...args) {
    const listener = this.listener[eventName] || [];
    listener.forEach(fn => {
      fn.apply(null, args);
    });
  }
}

const event = new EventEmitter();
event.on('someEvent', (...args) => {
  console.log('some_event triggered', ...args);
});
event.emit('someEvent', 'abc', '123');
event.emit('someEvent', 'bbb', '222');
