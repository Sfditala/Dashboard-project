import { useState } from 'react'
import './App.css'
import Header from './components/ui/header.jsx/Header'
import Sidebar from './components/ui/side.jsx/Sidebar'
import Footer from './components/ui/footer/Footer'
import TableData from './components/ui/table/TableData.jsx'

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
       <TableData />

      </main>
      <Footer/>
      </div>
  </>
  )
}

export default App
