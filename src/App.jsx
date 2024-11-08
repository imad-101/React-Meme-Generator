import Header from "./Header"
import Form from "./Form"
import Picarea from "./Picarea"
import { useEffect, useState } from "react"

function App() {

  const [topText , setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');
  const [memeImage , setMemeImage] = useState()
  const API = 'https://api.imgflip.com/get_memes'



    function handleClick(event){

      const {name , value} = event.target

      name === "Bottom" ? setBottomText(value) : setTopText(value);
      
        
    }
    function generateImg(){

        fetch(API)
        .then(Response => Response.json())
        .then(data =>{
          const memes = data.data.memes;
          setMemeImage(memes[Math.floor( Math.random() * memes.length)].url)
        })
      }
      useEffect( () =>{
        generateImg()
      }, [])

    console.log(memeImage)
  return (
    <>
    <Header/>
    <Form topText = {topText} bottomText = {bottomText} handleClick = {handleClick} generateImg = {generateImg}/>
    <Picarea topText = {topText} bottomText = {bottomText} memeImage = {memeImage}/>
    </>
   
  )
}

export default App