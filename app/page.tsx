'use client'

import { observable } from '@/utils/observer/observer'

export default function Home() {
  const logger = {
    notify: (data: string) => console.log(data)
  }

  const errorLog = {
    notify: (data: string) => console.error(data)
  }

  observable.subscribe(logger)
  observable.subscribe(errorLog)

  const handleClick = () => {
    observable.notifyAll('Click!!!!!')
  }

  return (
    <div>
      <h1>Design Patterns</h1>
      <div>
        <button type='button' onClick={handleClick}>Click me!</button>
      </div>
    </div>
  )
}
