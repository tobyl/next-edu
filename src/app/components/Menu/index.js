'use client'

import Link from 'next/link'
import { useAppContext } from '../../context'

import styles from './menu.module.css'


const LinkItem = ({ href, children }) => {
 
  const { setMenuOpen } = useAppContext()

  return (
    <Link href={href} onClick={() => setMenuOpen(false)}>{children}</Link>
  )
}


const Menu = ({ slides }) => {

  const { menuOpen, setMenuOpen } = useAppContext()

  return (
    <div className={menuOpen ? styles.menuActive : styles.menu}>
      <ul>
        <li><LinkItem href="/">Home</LinkItem></li>
        <li><LinkItem href="/weeks">Weeks</LinkItem></li>
        {/* {slides.map((slide, index) => (
          <li key={slide.slug}> 
            <a href={`#${slide.slug}`} onClick={() => setMenuOpen(!menuOpen)}>
            {index + 1}. {slide.frontmatter.title}
            </a>
          </li>
        ))} */}
      </ul>
    </div>
  )
}

export default Menu