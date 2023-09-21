"use client";
import Image from "next/image";


export default function Events() {

  return (
<div className="flex items-center h-screen w-full flex-col">
    <p>About Us !!</p>
    <Image src="/images/gangie.jpg" height={600} width={600} alt="Photo of the developers of the website"/>
    <p className="w-1/2">This website was developed by a passionate team 
      from CUNY Queens College. Carlos Vega and Adam Jablonka, 
      both Computer Science undergraduates, have combined their tech 
      expertise to create an engaging platform. Alongside them, Jeremy 
      Gangaram and Masroor Khonkhodzhaev, with their in-depth knowledge 
      of physics, shape and enrich the club's content. Together, we're 
      committed to building a vibrant community for physics enthusiasts. 
      Dive in with us as we explore the wonders of the universe!</p>
</div>
  )
}