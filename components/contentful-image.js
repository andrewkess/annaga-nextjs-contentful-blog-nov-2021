import Image from 'next/image'

const contentfulLoader = ({ src, width, quality }) => {
  console.log('width: ', width);
  return `${src}?fm=avif&w=520&q=${quality || 75}`
}

const ContentfulImage = (props) => {
  return <Image loader={contentfulLoader} {...props} />
}

export default ContentfulImage

