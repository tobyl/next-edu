import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'
import rehypeRaw from 'rehype-raw'
import Intro from '../Intro'

import styles from './slide.module.css'

const Single = ({ slide }) => {

  return (
    <section id={slide.data.slug} className={styles.slide}>
      {slide.data.intro ? (
        <Intro>
          <div className={styles.introSlide}>
            <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeHighlight, rehypeRaw]}>
              {slide.content}
            </ReactMarkdown>
          </div>
        </Intro>
      ) : (
        <div className={styles.slideContent}>
          <h2 className="gradient"><span>{slide.data.title}</span> {slide.data.emoji}</h2>
          <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeHighlight, rehypeRaw]}>
            {slide.content}
          </ReactMarkdown>
        </div>
      )}
    </section>
  )
}

export default Single