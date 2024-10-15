
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import {Hero} from './components/Hero'
import Message from './components/Message'
import PreviousHeroes from './components/PreviousHeroes'

function App() {

  const previousHeroes = [
    {
      id:1,
      img: 'https://res.cloudinary.com/dofxo1uga/image/upload/v1728954558/images/superman_ctizwf.png',
      name: "Superman",
      pos: 64,
      neg: 36
    },
    {
      id:2,
      img: 'https://res.cloudinary.com/dofxo1uga/image/upload/v1728829056/images/thor_kucpja.png',
      name: "Thor",
      pos: 38,
      neg: 62
     },
     {
       id:3,
       img: 'https://res.cloudinary.com/dofxo1uga/image/upload/v1728829055/images/Batman_vrpqla.png',
       name: "Batman",
       pos: 80,
       neg: 20
     },
     {
       id:4,
       img: 'https://res.cloudinary.com/dofxo1uga/image/upload/v1728829055/images/spider-man_sumnnz.png',
       name: "Spiderman",
       pos: 55,
       neg: 45
     }
  ]

  return (
    <>
      <Header/>
      <Hero/>
      <Message/>
      <div className='grid grid-cols-1 lg:grid-cols-2 w-full m-auto lg:w-[1060px] gap-5 justify-center'>
        {
          previousHeroes.map(heroe => (
        <PreviousHeroes 
          key={heroe.id}
          name={heroe.name}
          pos={heroe.pos}
          neg={heroe.neg}
          img={heroe.img}
        />

          ))
        }
        
      </div>
      
      <Footer/>
    </>
  )
}

export default App
