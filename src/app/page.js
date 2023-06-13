import * as matter from 'gray-matter'
import SlideList from '../../components/SlideList'
import Menu from '../../components/Menu'
import Wrapper from '../../components/Wrapper'
import MenuToggle from '../../components/MenuToggle'

async function getSlides() {
  
  const webpackContext = require.context('../../slides', true, /^\.\/[A-Za-z0-9-]+\.md$/)
  const keys = webpackContext.keys()
  const values = keys.map(webpackContext)

  const slides = keys.map((key, index) => {

    const slug = key
      .replace(/^.*[\\\/]/, "")
      .split(".")
      .slice(0, -1)
      .join(".")

    const value = values[index]
    const document = matter(value.default)

    return {
      frontmatter: document.data,
      markdownBody: document.content,
      slug,
    }
  }).sort((a, b) => {

    if (a.frontmatter.order > b.frontmatter.order) {
      return 1
    } else {
      return -1
    }

  })

  return {
    props: {
      slides,
    },
  }
}

const Home = async () => {

  const data = await getSlides()

  return (
    <main>
      <Wrapper>
        <SlideList slides={data.props.slides} />
        <Menu slides={data.props.slides} />
        <MenuToggle />
      </Wrapper>
    </main>
  )
}

export default Home
