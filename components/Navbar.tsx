import { UserButton } from '@clerk/nextjs'
import { Menu } from 'lucide-react'
import MobileSidebar from './mobile-sidebar'
import { Button } from './ui/button'

function Navbar() {
  return (
    <div className='flec items-center p-4'>
      <MobileSidebar />
      <div className='flex w-full justify-end'>
      <UserButton afterSignOutUrl="/"/>
      </div>
    </div>
  )
}

export default Navbar
