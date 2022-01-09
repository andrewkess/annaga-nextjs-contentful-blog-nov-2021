export default function PostTitle({ children }) {
  return (
    <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left"
      style={{
  fontFamily: "'Rubik', sans-serif",
}}>
      {children}
    </h1>
  )
}


