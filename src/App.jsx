// import './App.css'
import Button from './components/Button'
import Alert from './components/Alert'
import Card from './components/Card'  
import Parent from './components/Parent'
import State from './components/State'
function App() {
  
const actresses = [
  {
    img: "https://cdn.britannica.com/59/182359-050-C6F38CA3/Scarlett-Johansson-Natasha-Romanoff-Avengers-Age-of.jpg",
    name: "Scarlett Johansson",
  },
  {
    img:"https://hips.hearstapps.com/hmg-prod/images/ana-de-armas-arrives-at-the-vanity-fair-oscar-party-hosted-news-photo-1740776729.pjpeg?crop=1.00xw:0.738xh;0,0.0401xh&resize=640:*",
    name: "Ana de Armas",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDEvfwWV3GoKVciDbtnYsVId3vmdmyGDJ0ZA&s", 
    name: "Ariana Grande",
    
  },
  {
    img: "https://variety.com/wp-content/uploads/2025/10/GettyImages-2197310482.jpg?w=1000&h=667&crop=1", 
    name: "Taylor Swift",
   
  },
  {
    img: "https://in.bmscdn.com/iedb/artist/images/website/poster/large/kriti-sanon-37438-15-09-2017-03-51-03.jpg", 
    name: "Kriti Sanon",
   
  }
];

  return (
    <>
      <Button/>
      <Alert/>
      <div className='flex flex-wrap shrink-0'>
        {
        actresses.map((actress)=>{
          return <Card img={actress.img} name={actress.name}/>
        })
      }
      </div>
      <State/>
      <Parent/>
      </>
  )
}

export default App
