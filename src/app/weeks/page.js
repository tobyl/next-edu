import fs from 'fs'
import Link from 'next/link'
import path from 'path'

const getWeeks = async () => {

  const dir = path.resolve(`./slides/`)
  const weeks = fs.readdirSync(dir)

  const listOfWeeks = weeks.map((folder) => {
    return {
      name: folder,
      url: `/weeks/${folder.replace('week', '')}`
    }
  })

  return listOfWeeks

}

const Weeks = async () => {

  const weeks = await getWeeks()

  return (
    <main>
      <h1>weeks page</h1>
      {weeks.map(w =>
        <li key={w.url}>
          <Link href={w.url}>{w.name}</Link>
        </li>
      )}
    </main>
  )
}

export default Weeks