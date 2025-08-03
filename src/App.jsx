import { useState } from 'react'
import './App.css'
import Header from './components/ui/header.jsx/Header'
import SidebarComponent from './components/ui/sidebar/SidebarComponent'
import Footer from './components/ui/footer/Footer'
import TableData from './components/ui/table/TableData.jsx'

function App() {
 const [isSidebarOpen , setIsSidebarOpen] = useState(false)
   const toggleSidebar = () => setSidebarOpen(prev => !prev);

  return (
    <>
    <div className='grid-container'>
       <Header toggleSidebar={toggleSidebar} />
       <SidebarComponent isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        
       <main className="main-content">
         <p>Welcome to the dashboard main content!</p>
          <TableData />
      </main>
      <Footer/>
      </div>
  </>
  )
}

export default App
