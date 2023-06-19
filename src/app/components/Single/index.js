import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'
import rehypeRaw from 'rehype-raw'
import Intro from '../Intro'

import styles from './slide.module.css'

const Single = ({ slide }) => {

  console.log(slide.data)

  return (
    <section id={slide.data.slug} className={styles.slide}>
      {slide.data.order === 1 ? (
        <Intro>
          <div className={styles.slideContent}>
            <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeHighlight, rehypeRaw]}>
              {slide.content}
            </ReactMarkdown>
          </div>
        </Intro>
      ) : (
        <div className={styles.slideContent}>
          <h2 className="gradient">{slide.data.title}</h2>
          <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeHighlight, rehypeRaw]}>
              {slide.content}
          </ReactMarkdown>
        </div>
      )}
    </section>
  )
}

export default Single