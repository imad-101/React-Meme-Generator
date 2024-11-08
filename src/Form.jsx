

function Form({topText, bottomText,  handleClick, generateImg}) {
 

  return (
    <div>
        <form className="flex flex-col">
            <div className="grid grid-cols-[380px,380px] justify-center mt-10 gap-6 ">

                <div className="flex flex-col">
                    <label htmlFor="">Top Text</label>
                    <input type="text" className="border border-purple-500 hover:border-sky-600 border-2
                    rounded-md h-10 text-center " placeholder="Shut Up"
                    value={topText}
                    name="Top"
                    onChange={handleClick}/>
                    
                </div>

                <div className="flex flex-col">
                    <label htmlFor="">Bottom Text</label>
                    <input type="text" className="border rounded-md h-10 text-center 
                    border-purple-500 hover:border-sky-600 
                    border-2" placeholder="And Take My Money"
                    value={bottomText}
                    name="Bottom"
                    onChange={handleClick}/>
                </div>

            </div>
            
            <button className="border w-[784px] m-auto my-5 rounded-md
             h-10 bg-gradient-to-r from-purple-900 via-sky-600 to-purple-500
              transform transition-transform duration-300 
             hover:scale-105" onClick={(event) => { event.preventDefault(); generateImg(event); }}>Get A New Image 🖼️</button>
        </form>
    </div>
  )
}

export default Form