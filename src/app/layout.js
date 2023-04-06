import './globals.css'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

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
            <div className="drawer-content flex flex-col items-center justify-center"> 
                {children}
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
            </div> 
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
                <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                  <li><a>Sidebar Item 1</a></li>
                  <li><a>Sidebar Item 2</a></li>
                </ul>
            </div>
        </div>
    </body>
    </html>
  )
}
