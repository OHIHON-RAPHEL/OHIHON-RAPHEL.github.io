import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Main from './components/Main'

// import Home from './pages/home/Home'
// import About from './pages/about/About'
// import Contact from './pages/contact/Contact'
// import Gallary from './pages/gallary/Gallary'
// import Projects from './pages/projects/Projects'
// import Navbar from './components/Navbar'
// import Footer from './components/Footer'


const App = () => {
  return (
    <BrowserRouter>
         <Routes>
            <Route/>
         </Routes>
         <Main/>
    </BrowserRouter>
    // <BrowserRouter>
    //   <Navbar />
    //   <Routes>
    //     <Route index element={<Home/>}/>
    //     <Route path='about' element={<About/>}/>
    //     <Route path='contact' element={<Contact/>}/>
    //     <Route path='gallary' element={<Gallary/>}/>
    //     <Route path='plans' element={<Projects/>}/>
    //   </Routes>
    //   <Footer />
    // </BrowserRouter>
  )
}

export default App