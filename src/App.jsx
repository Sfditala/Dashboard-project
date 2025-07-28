import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/ui/header.jsx/Header'
import Sidebar from './components/ui/side.jsx/Sidebar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='grid-container'>
      <Header/>
      <Sidebar/>
       <main className="main-content">
        {/* هنا ممكن تضيفي محتوى الصفحة */}
        <p>Welcome to the dashboard main content!</p>
      </main>
      </div>
  </>
  )
}

export default App
