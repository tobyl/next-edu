import Link from 'next/link'

const Home = async () => {

  return (
    <main>
      <h1>Welcome to WEB210</h1>
      <Link href="/weeks">Course content</Link>
    </main>
  )
}

export default Home
