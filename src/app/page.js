import Link from 'next/link'

import styles from './style.module.css'

const Home = async () => {

  return (
    <main className={styles.home}>
      <h1>Welcome to WEB210</h1>
      <Link href="/weeks">Course content</Link>
    </main>
  )
}

export default Home
