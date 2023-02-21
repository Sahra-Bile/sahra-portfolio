import React from 'react'
import { Outlet } from 'react-router-dom'
import './App.scss'
import { Footer } from './components/footer/Footer'
import { Nav } from './components/Nav/Nav'

function App() {
  return (
    <>
      <header>
        <Nav />
      </header>
      <main>
        <Outlet></Outlet>
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default App
