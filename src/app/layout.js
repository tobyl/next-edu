import MenuToggle from './components/MenuToggle/index'
import Menu from './components/Menu'
import { AppContextProvider } from './context'

import '../../utils/global.css'
import '../../utils/animation.css'

export const metadata = {
  title: 'WEB210 - HTML & CSS',
  description: 'Course materials for WEB210 at St. Clair College',
  robots: 'noindex,nofollow',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AppContextProvider>
          {children}
          <Menu />
          <MenuToggle />
        </AppContextProvider>
      </body>
    </html>
  )
}
