import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav className=' flex justify-between p-[2rem] bg-black text-white'>
        <div>
          <h2 className=' font-bold text-2xl'> FAST  FOOD</h2>
        </div>
        <div>
          <ul className=' flex justify-between gap-8'> 
            <li className=' font text-lg hover:text-amber-400 cursor-pointer'>HOME</li>
            <li className=' font text-lg  hover:text-amber-400 cursor-pointer'>RESERVATIONS</li>
            <li className=' font text-lg hover:text-amber-400 cursor-pointer'>MENU</li>
            <li className=' font text-lg hover:text-amber-400 cursor-pointer'>CONTACT</li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar