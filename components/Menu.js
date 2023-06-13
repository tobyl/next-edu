'use client'

import { useContext } from 'react'
import { AppContext } from './Wrapper'

import styles from './menu.module.css'

const Menu = ({ slides }) => {

  const { menuOpen, setMenuOpen } = useContext(AppContext)

  return (
    <div className={menuOpen ? styles.menuActive : styles.menu}>
      <ul>
        {slides.map((slide, index) => (
          <li key={slide.slug}> 
            <a href={`#${slide.slug}`} onClick={() => setMenuOpen(!menuOpen)}>
            {index + 1}. {slide.frontmatter.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Menu