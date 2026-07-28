// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
// import ThemeChanger from './ThemeChanger'
// import './App.css'
// import First from './First'
// import Demo from './Demo'
// import AddSub from './AddSub'
// import Props from './Props'
// import Form from './Form'
// import Spread from './Spread'
// import Rest from './Rest'
// import Arest from './Arest'
// import ASpread from './ASpread'
// import ContactForm from './ContactForm'
// import UseEffect from './UseEffect'
// import Toggle from './Toggle'
// import UseEffectHook from './UseEffectHook'
// import UseEffect from './UseEffect'
// import UseContext from './UseContext'
// import Changer from './ThemeChanger'
// import NameChange from './UseState'
// import Registration from './UseStateHook'

// function App() {
//   // const [count, setCount] = useState(0)

//   return (
//    <>
//     {/* <Registration /> */}
//    </>  
//   )
// }

// export default App


// import { Routes, Route, Link } from "react-router-dom";
// import Home from "./Home";
// import About from "./About";
// import Contact from "./Contact";

// function App() {
//   return (
//     <>
//       <nav>
//         <Link to="/">Home</Link> |{" "}
//         <Link to="/about">About</Link> |{" "}
//         <Link to="/contact">Contact</Link>
//       </nav>

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//       </Routes>
//     </>
//   );
// }

// export default App;

//It is for router
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;