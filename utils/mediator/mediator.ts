export class User {
  name: string
  chatRoom: ChatRoom

  constructor(name: string, chatRoom: ChatRoom) {
    this.name = name
    this.chatRoom = chatRoom
  }

  get username() {
    return this.name
  }

  send(message: string) {
    this.chatRoom.logMessage(this, message)
  }
}

export class ChatRoom {
  logMessage(user: User, message: string) {
    const time = new Date()
    const sender = user.username

    console.log(`${time} [${sender}]: ${message}`)
  }
}
