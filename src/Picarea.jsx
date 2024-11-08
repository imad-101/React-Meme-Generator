
function Picarea({topText , bottomText , memeImage}) {
  return (
    <div className="flex justify-center mt-6 w-[30rem] h-[20rem] mx-auto relative mb-[3rem] ">
      <h2 className="text-3xl p-4 absolute top-1 text-white overflow-hidden text-ellipsis left-0 right-0 " style={{fontFamily:  "Rubik Wet Paint, serif"}}>{topText}</h2>
        <img src={memeImage} alt="" className="object-cover " />
      <h2 className="text-3xl p-4 absolute bottom-3 text-white overflow-hidden text-ellipsis left-0 right-0 " style={{fontFamily:  "Rubik Wet Paint, serif"}}>{bottomText}</h2> 
    </div>
  )
}

export default Picarea