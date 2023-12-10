interface Order {
  id: number
  name: string
}

type Execute = (orders: Order[]) => void

export class OrderManager {
  orders: Order[]

  constructor() {
    this.orders = []
  }

  execute(command: Command) {
    command.execute(this.orders)
  }
}

class Command {
  execute: Execute
  constructor(execute: Execute) {
    this.execute = execute
  }
}

export function PlaceOrderCommand(order: Order) {
  return new Command((orders: Order[]) => {
    orders.push(order)
    console.log(`You have successfully ordered ${order.name}（${order.id}）`)
  })
}

export function CancelOrderCommand(id: number) {
  return new Command((orders: Order[]) => {
    orders = orders.filter(order => order.id !== id)
    console.log(`You have canceled your order ${id}`)
  })
}

export function TrackOrderCommand(id: number) {
  return new Command((orders: Order[]) => console.log(`Your order ${orders.find(order => order.id === id)?.name} will arrive in 20 minutes.`))
}
