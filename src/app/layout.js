import './globals.css'
import {AiFillLock,AiFillTool,AiFillBook,AiFillMessage} from "react-icons/ai"
import Link from 'next/link'
import Navbar from '@/components/navbar'



export const metadata = {
  title: 'Ultra: Penetration testing tool',
  description: 'Ultra is a powerful penetration testing tool designed to help security professionals identify and exploit vulnerabilities in web applications. With its intuitive user interface and advanced features, Ultra makes it easy to perform comprehensive security assessments and improve the overall security posture of your organization.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <div className="drawer drawer-mobile bg-base-200">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-start gap-4"> 
                <Navbar />
                {children}
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
            </div> 
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
                <ul className="menu p-6 pt-8 w-80 bg-base-100 text-base-content ">
                  <h2 className='w-full text-start font-semibold text-2xl my-4'>Ultra PenTest</h2>
                  <li className='bg-base-300 my-2'><Link href=""><AiFillLock /> Password Manager</Link></li>
                  <li className='my-2'><Link href="/tools"><AiFillTool/> Tools</Link></li>
                  <li className='my-2'><Link href="/tutorials"><AiFillBook />Tutorials</Link></li>
                  <li className='my-2'><Link href="/contact"><AiFillMessage />report</Link></li>
                </ul>
            </div>
        </div>
    </body>
    </html>
  )
}
