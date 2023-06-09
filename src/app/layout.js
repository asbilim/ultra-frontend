import './globals.css'
import {AiFillLock,AiFillTool,AiFillBook,AiFillMessage,AiOutlineLogin} from "react-icons/ai"
import {RiLoginCircleFill} from "react-icons/ri"
import Link from 'next/link'
import Navbar from '@/components/navbar'
import { Roboto } from 'next/font/google'



export const metadata = {
  title: 'Ultra: Penetration testing tool',
  description: 'Ultra is a powerful penetration testing tool designed to help security professionals identify and exploit vulnerabilities in web applications. With its intuitive user interface and advanced features, Ultra makes it easy to perform comprehensive security assessments and improve the overall security posture of your organization.',
}

const inter = Roboto({ subsets: ['latin'],weight:['100','300','400','500','700','900'] })

export default function RootLayout({ children }) {

  
  return (
    <html lang="en">
      <body>
      <div className={"drawer drawer-mobile bg-base-200 "+inter.className}>
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center gap-4"> 
                {children}
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
            </div> 
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
                <ul className="menu p-6 pt-8 w-80 bg-base-100 text-base-content h-screen relative overflow-hidden">
                  {/* <h2 className='w-full text-start font-semibold text-2xl my-4'>Ultra PenTest</h2> */}
                  <li className='bg-base-300 my-2'><Link href=""><AiFillLock /> Password Manager</Link></li>
                  <li className='my-2'><Link href="/tools"><AiFillTool/> Tools</Link></li>
                  <li className='my-2'><Link href="/tutorials"><AiFillBook />Tutorials</Link></li>
                  <li className='my-2'><Link href="/contact"><AiFillMessage />report</Link></li>
                  <li className='my-2'><Link href="/auth/login"><RiLoginCircleFill />Login</Link></li>
                  <ul className='absolute bottom-10 left-0 w-full flex items-center justify-start'>
                    <Navbar />
                  </ul>
                </ul>
            </div>
        </div>
    </body>
    </html>
  )
}
