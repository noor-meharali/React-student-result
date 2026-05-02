import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.tsx'
// import Counter from './components/states/counter.tsx'
import Navbar from './components/navbar/navbar.tsx'
import ToDoList from './components/states/todo.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
     <Navbar />
    {/* <App /> */}
    {/* <Counter /> */}
    <ToDoList />
  </StrictMode>,
   
)
 