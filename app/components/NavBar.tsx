import Link from "next/link";



export default function NavBar() {

  return (
    <nav className="flex justify-between">
      <div>Logo</div>

      <ul className="flex">
        <li className='p-2'><Link href='./'>Home</Link></li>
        <li className='p-2'><Link href='./about'>About</Link></li>
        <li className='p-2'><Link href='./events'>Events</Link></li>
      </ul>
    </nav>
  )
}