import { useEffect } from 'react'
import './App.css'
import './mockTelegramWebApp'

function App() {
  useEffect(() => {
    const tg = window.Telegram?.WebApp

    if (tg) {
      tg.ready()
      tg.expand()

      console.log('User data: ', tg.initDataUnsafe.user)
    }
  })

  const user = window.Telegram?.WebApp?.initDataUnsafe?.user

  return (
    <div>
      <h1>
        {`Hello, ${user?.username}`}
      </h1>
    </div>
  )
}

export default App
