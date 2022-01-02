// You can choose which headers to add to the list
// after learning more below.
// const securityHeaders = [
// {
//   key: 'Content-Security-Policy',
//   value: "default-src 'self' vitals.vercel-insights.com; img-src 'self' data: res.cloudinary.com images.ctfassets.net; font-src fonts.gstatic.com; style-src 'self' fonts.googleapis.com 'unsafe-inline'; script-src 'self' 'unsafe-eval'"
// }]

const securityHeaders = [
  {
  key: 'Content-Security-Policy',
  value: ""
}
];


module.exports = {
  async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        source: '/(.*)',
        headers: securityHeaders,
      },
    ]
  },
  images: {
    loader: 'custom',
  },
}
