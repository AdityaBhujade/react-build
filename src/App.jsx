// import './App.css'
import Button from './components/Button'
import Alert from './components/Alert'
import Card from './components/Card'  
import Parent from './components/Parent'
function App() {
  
const actresses = [
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/8/89/Scarlett_Johansson_in_Kuwait_01b-tweaked.jpg",
    name: "Scarlett Johansson",
  },
  {
    img:"https://hips.hearstapps.com/hmg-prod/images/ana-de-armas-arrives-at-the-vanity-fair-oscar-party-hosted-news-photo-1740776729.pjpeg?crop=1.00xw:0.738xh;0,0.0401xh&resize=640:*",
    name: "Ana de Armas",
  },
  {
    img: "https://commons.wikimedia.org/wiki/File%3AJodie_comer_2023_5.jpg?uselang=en", 
    name: "Jodie Comer",
    
  },
  {
    img: "https://commons.wikimedia.org/wiki/File:Bella_Hadid_Cannes_2018.jpg", 
    name: "Bella Hadid",
  
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/1/1e/Zendaya_2019.jpg", 
    name: "Zendaya",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Deepika_Padukone_2018.jpg", 
    name: "Deepika Padukone",
   
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/5/54/Emma_Watson_2017.jpg", 
    name: "Emma Watson",
 
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/d/d0/Margot_Robbie_in_2019.jpg", 
    name: "Margot Robbie",
    
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/2/28/Ariana_Grande_2019_%28cropped%29.jpg", 
    name: "Ariana Grande",
    
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/3/32/Beyonce_2021_%28cropped%29.jpg", 
    name: "Beyoncé",
   
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/9/95/Taylor_Swift_GMA_2019.jpg", 
    name: "Taylor Swift",
   
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/f/f8/Kriti_Sanon_promotional.jpg", 
    name: "Kriti Sanon",
   
  }
];

  return (
    <>
      {/* <Button/>
      <Alert/>
      {
        actresses.map((actress)=>{
          return <Card img={actress.img} name={actress.name}/>
        })
      } */}
      <Parent/>
      </>
  )
}

export default App
