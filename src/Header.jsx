function Header() {
  return (
    <header className="bg-gradient-to-r from-purple-900 via-sky-600 to-purple-500 flex h-16 p-4 justify-around gap-56 text-white">
        <div className="flex gap-4">
            <img src="troll.png" alt="" className="w-10" />  
            <h1 className="text-2xl font-bold">Meme Generator</h1>
            
        </div>
        <h3 className="text-lg">React - Project 3</h3>
        
    </header>
  )
}

export default Header