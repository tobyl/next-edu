import Link from 'next/link'

import styles from './style.module.css'

const Home = async () => {

  return (
    <main className={styles.home}>
      <h1>Welcome to MAD402</h1>
      <p>This course is designed to provide students with a strong foundation in User Interface (UI) fundamentals. Students will explore essential concepts related to UI design principles, user experience (UX), and the creation of visually appealing and user-friendly digital interfaces.</p>
      <Link className="btn pill" href="/weeks">Course content</Link>
    </main>
  )
}

export default Home
