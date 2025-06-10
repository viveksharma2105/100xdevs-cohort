
import './App.css'

function App() {
  

  return (
    <>
    <div className=' grid grid-cols-12'>

      <div className='bg-red-300 col-span-12 sm:col-span-5 text-3xl rounded-2xl '>hii-1</div>
      <div className='bg-blue-300 col-span-12 sm:col-span-5'>hii-2</div>
      <div className='bg-green-300 col-span-12 sm:col-span-2'>hii-3</div>

    </div>

<div className='text-5xl text-center'>how are you </div>
   
    </>
  )
}

export default App


//------------------TAILWIND package ready-------------------
//  npm install -D tailwindcss@3 postcss autoprefixer
 
//   npx tailwindcss init -p
  
//  tailwind.config.js =  "./src/**/*.{js,ts,jsx,tsx}"


// index.css =  @tailwind base;

// @tailwind components;

// @tailwind utilities;