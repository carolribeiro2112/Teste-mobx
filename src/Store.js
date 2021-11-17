import { makeObservable, observable, action } from 'mobx';

class Store {
  counter = 0;

  constructor () {
    makeObservable(this, {
      counter: observable,
      increment: action,
      decrement: action,
    });
  }

  increment() {
    this.counter = this.counter + 1
  }

  decrement() {
    if(this.counter > 0) {
      this.counter = this.counter - 1
    } else {
      this.counter = 0
    }
  }
}

export default new Store();