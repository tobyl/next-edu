import fs from 'fs'
import path from 'path'
import Link from 'next/link'

import styles from './style.module.css'

const getWeeks = async () => {

  const dir = path.resolve(`./slides/`)
  const weeks = fs.readdirSync(dir)

  const listOfWeeks = weeks.map((folder) => {
    return {
      name: `${folder.replace('week', 'Week #')}`,
      url: `/weeks/${folder.replace('week', '')}`
    }
  })
  return listOfWeeks.filter(w => w.name.includes('Week'))
}

const Weeks = async () => {

  const weeks = await getWeeks()

  return (
    <main className={styles.weeks}>
      <h1>Select a week below</h1>
      <ul className={styles.weekList}>
        {weeks.map(w =>
          <li key={w.url}>
            <Link href={w.url}>{w.name}</Link>
          </li>
        )}
      </ul>
    </main>
  )
}

export default Weeks