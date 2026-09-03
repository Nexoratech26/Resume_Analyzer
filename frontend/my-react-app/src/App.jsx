import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { Analyzer } from './components/Analyzer'
import { JobDes } from './components/JobDes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='  '>
    <Analyzer/>
    {/* <JobDes /> */}
    </div>
  )
}

export default App
