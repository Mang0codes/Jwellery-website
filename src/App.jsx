import './App.css'
import Carousel from './components/Carousel';
import Header from './components/Header';
import Hero from './components/hero';
import Video from './components/Video'
import ExampleComponent from './Ex';
import './index.css';
import { Button } from "@material-tailwind/react";

function App() {

  return (
    <div>
    <div className='w-full border-b-2 border-black'>
      <Header />
    </div>
    <div>
      <Hero />
      <Carousel></Carousel>
      <Video />
    </div>
    </div>
  )
}

export default App
