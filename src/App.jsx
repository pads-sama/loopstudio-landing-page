import { NavBar, Hero, Leader, Creation, Footer } from "./components"


const App = () => (
    <div className='relative w-full h-auto bg-white'>
      <header className="h-[120px] w-full flex flex-1 justify-center items-center bg-transparent z-10 absolute inset-0">
        <NavBar />
      </header>
        <div className="w-full h-auto bg-purple-700">
          <Hero/>
        </div>
        <div className="w-full h-auto">
          <Leader/>
        </div>
        <div className="w-full h-auto">
          <Creation /> 
        </div>

    <footer className="w-full h-auto bg-black text-white">
      <Footer/>
    </footer>
    </div> 
  )


export default App