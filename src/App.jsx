import { useState } from 'react'
import './App.css'
import {QueryClient, QueryClientProvider} from 'react-query'
import { Images } from './components/Images'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { Home } from './components/home'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Navbar } from './components/NavBar'
import { Products } from './components/Products'
import { Product } from './components/Product'
import { Faq } from './components/Faq'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Login } from './components/Login'

const queryClient= new QueryClient ()

function App() {
  const [isLoggedIn,setIsLoggedIn]=useState(false) 
  console.log('App:',isLoggedIn)

  return (
    <BrowserRouter >
    <QueryClientProvider client={queryClient}>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
      <Routes>
        <Route path='/' element= {<Home/>}/>
        <Route path='about' element= {<About/>}/>
        <Route path='images' element= {<Images/>}/>
        <Route path='contact' element= {<Contact/>}/>
        <Route path='products' element= {<Products/>}/>
        <Route path='products/:id' element= {<Product/>}/>
        <Route path='faq' element= {isLoggedIn ? <Faq/> : <Login setIsLoggedIn={setIsLoggedIn}/>}/>
        <Route path='login' element= {<Login setIsLoggedIn={setIsLoggedIn}/>}/>
      </Routes>
    </QueryClientProvider>
    </BrowserRouter>
    
  )
}

export default App
