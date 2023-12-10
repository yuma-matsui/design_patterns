export interface Subscriber {
  notify: (data: string) => void
}

class Observable {
  private subscribers: Subscriber[]

  constructor() {
    this.subscribers = []
  }

  subscribe(subscriber: Subscriber) {
    this.subscribers.push(subscriber)
  }

  unsubscribe(subscriber: Subscriber) {
    this.subscribers = this.subscribers.filter(_subscriber => _subscriber !== subscriber)
  }

  notifyAll(data: string) {
    this.subscribers.forEach(subscriber => subscriber.notify(data))
  }
}

export const observable = new Observable()
