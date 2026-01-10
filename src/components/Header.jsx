import React, { useState } from 'react'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

   return (
     <header className=" w-full mt-0 backdrop-blur border-b border-gray-200">
       <div className="  flex px-4 py-2   justify-between  ">
         
         {/* Logo */}
         <div className="text-xl font-bold ">
           Sumit<span className="">.</span>
         </div>
 
         {/* Desktop Menu */}
         <section className=" hidden md:flex items-center gap-8  font-medium ">
           <a href="#skills" className="hover:text-white">Skills</a>
          <a href="#experience" className="hover:text-white">Experience</a>
          <a href="#projects" className="hover:text-white">Work</a>
          <a href="#contact" className="hover:text-white">Contact</a>
         </section>
 
         {/* CTA */}
       
 
         {/* Mobile Menu Button */}
         <button
           className="sm-block md:hidden text-gray-700"
           onClick={() => setIsOpen(!isOpen)}
         >
           ☰
         </button>
       </div>
 
       {/* Mobile Menu */}
       {isOpen && (
         <div className=" md:hidden  bg-white border-t border-gray-200">
           <nav className="flex flex-col gap-4 px-6 py-6 text-sm font-medium text-gray-700">
             <a href="#home" onClick={() => setIsOpen(false)}>Home</a>
             <a href="#about" onClick={() => setIsOpen(false)}>About</a>
             <a href="#skills" onClick={() => setIsOpen(false)}>Skills</a>
             <a href="#projects" onClick={() => setIsOpen(false)}>Projects</a>
             <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
           </nav>
         </div>
       )}
     </header>
  )
}

export default Header