import fs from 'fs'
import path from 'path'
import slugify from 'slugify'
import * as matter from 'gray-matter'
import Single from '../../components/Single/index'

const getSlides = async id => {

  const dir = path.resolve(`./slides/week${id}`)
  const files = fs.readdirSync(dir)

  const slides = files.map((file, index) => {
    const f = fs.readFileSync(path.resolve(dir, file), 'utf8')
    const md = matter(f)
    md.data.slug = slugify(md.data.title, { lower: true, strict: true })
    return md
  }).sort((a, b) => a.data.order - b.data.order)

  return slides

}

const Week = async ({ params }) => {
  
  const slides = await getSlides(params.id)

  return (
    <main>
      {slides.map((s, i) =>
        <Single key={i} slide={s} /> 
      )}
    </main>
  )
}

export default Week