'use client'

import Link from 'next/link'
import { useParams } from 'next/navigation'
import { useAppContext } from '../../context'

import styles from './menu.module.css'


const LinkItem = ({ href, children }) => {
 
  const { setMenuOpen } = useAppContext()

  return (
    <Link href={href} onClick={() => setMenuOpen(false)}>{children}</Link>
  )
}


const Menu = () => {

  const params = useParams()

  const { menuOpen, setMenuOpen } = useAppContext()

  return (
    <div className={menuOpen ? styles.menuActive : styles.menu}>
      <ul>
        <li><LinkItem href="/">Home</LinkItem></li>
        <li><LinkItem href="/weeks">Course Content</LinkItem></li>
      </ul>
      <button className={styles.close} onClick={() => setMenuOpen(!menuOpen)}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40">
          <path d="m4.496 6.831 2.335-2.335a1.128 1.128 0 0 1 1.596 0L20 16.069 31.573 4.496a1.128 1.128 0 0 1 1.596 0l2.335 2.335a1.128 1.128 0 0 1 0 1.596L23.931 20l11.573 11.573c.441.44.441 1.155 0 1.596l-2.335 2.335a1.128 1.128 0 0 1-1.596 0L20 23.931 8.427 35.504a1.128 1.128 0 0 1-1.596 0l-2.335-2.335a1.128 1.128 0 0 1 0-1.596L16.069 20 4.496 8.427a1.128 1.128 0 0 1 0-1.596Z"/>
        </svg>
      </button>
    </div>
  )
}

export default Menu