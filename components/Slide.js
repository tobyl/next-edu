import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'
import rehypeRaw from 'rehype-raw'

import styles from './slide.module.css'

const Slide = ({ slide, prevSlide, nextSlide, bg }) => {

  return (
    <section className={styles.slide} id={slide.slug} style={{ backgroundImage: bg ? `url(${bg.src})` : '' }}>
      <div className={styles.page}>
        <h2>{slide.frontmatter.title}</h2>
        <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeHighlight, rehypeRaw]}>
          {slide.markdownBody}
        </ReactMarkdown>
      </div>
      {(prevSlide || nextSlide) && (
        <div className={styles.slideNav}>
          {prevSlide && (
            <a href={`#${prevSlide.slug}`}>Previous</a>
          )}
          {nextSlide && (
            <a href={`#${nextSlide.slug}`}>Next</a>
          )}
        </div>
      )}
    </section>
  )
}

export default Slide