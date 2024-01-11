import Link from 'next/link'

import styles from './style.module.css'

const Home = async () => {

  return (
    <main className={styles.home}>
      <h1>Welcome to WEB210</h1>
      <p>This course is designed to provide students with a strong foundation in HTML and CSS, including modern web development techniques and responsive design.</p>
      <Link className="btn pill" href="/weeks">Course content</Link>
    </main>
  )
}

export default Home
