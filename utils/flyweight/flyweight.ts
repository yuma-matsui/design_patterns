interface Item {
  title: string
  author: string
  isbn: string
  availability: boolean
  sales: number
}

class Book {
  title: string
  author: string
  isbn: string

  constructor(title: string, author: string, isbn: string) {
    this.title = title
    this.author = author
    this.isbn = isbn
  }
}

export class BookStore {
  books: Map<Book['isbn'], Book>
  itemList: Item[]

  constructor() {
    this.books = new Map()
    this.itemList = [] as Item[]
  }

  private createBook({ title, author, isbn }: Book) {
    const existingBook = this.books.has(isbn)

    if (existingBook) {
      return this.books.get(isbn) as Book
    }

    const book = new Book(title, author, isbn)
    this.books.set(isbn, book)
    return book
  }

  addBook({ title, author, isbn, availability, sales }: Item) {
    const item: Item = {
      ...this.createBook({ title, author, isbn }),
      sales,
      availability
    }

    this.itemList.push(item)
  }
}
