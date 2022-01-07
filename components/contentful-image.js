import Image from 'next/image'

const contentfulLoader = ({ src, width, quality }) => {
  return `${src}?fm=avif&w=${width}&q=${quality || 75}`
}

const ContentfulImage = (props) => {
  return <Image loader={contentfulLoader} {...props} />
}

export default ContentfulImage

