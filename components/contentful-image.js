import Image from 'next/image'

const contentfulLoader = ({ src, quality }) => {
  return `${src}?fm=avif&q=${quality || 75}`
}

const ContentfulImage = (props) => {
  return <Image loader={contentfulLoader} {...props} />
}

export default ContentfulImage

