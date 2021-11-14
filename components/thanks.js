// import Container from './container'
// import { EXAMPLE_PATH } from '../lib/constants'
import { MailIcon, PhoneIcon } from '@heroicons/react/outline'


const people = [
    {
      name: 'Juan Pablo Domenech',
      role: 'Director',
      imageUrl:
        'https://res.cloudinary.com/annaga/image/upload/w_1000,ar_1:1,c_fill,g_auto/v1636733067/image-w856_pdmbk9.jpg',
      twitterUrl: '#',
      linkedinUrl: '#',
    },
    {
        name: 'Noboru de Abreu',
        role: 'Producer',
        imageUrl:
          'https://res.cloudinary.com/annaga/image/upload/w_1000,ar_1:1,c_fill,g_auto/v1636860079/IMG_2514_dbyaku.jpg',
        twitterUrl: '#',
        linkedinUrl: '#',
      },
      {
        name: 'Juan Pablo Domenech2',
        role: 'Director',
        imageUrl:
          'https://res.cloudinary.com/annaga/image/upload/v1636733067/image-w856_pdmbk9.jpg',
        twitterUrl: '#',
        linkedinUrl: '#',
      },
      {
        name: 'Juan Pablo Domenech3',
        role: 'Director',
        imageUrl:
          'https://res.cloudinary.com/annaga/image/upload/v1636733067/image-w856_pdmbk9.jpg',
        twitterUrl: '#',
        linkedinUrl: '#',
      },
      {
        name: 'Juan Pablo Domenech4',
        role: 'Director',
        imageUrl:
          'https://res.cloudinary.com/annaga/image/upload/v1636733067/image-w856_pdmbk9.jpg',
        twitterUrl: '#',
        linkedinUrl: '#',
      },
    // More people...
  ]


  



export default function Team() {

  return (
    <>




    <div className="bg-gray-100">
      <div className="mx-auto">
        <div className="relative shadow-xl">
          <h2 className="sr-only">Contact us</h2>

          <div className="grid grid-cols-1 lg:grid-cols-3">
            {/* Contact information */}
            <div className="relative overflow-hidden bg-main-primary min-h-screen py-10 px-6 sm:px-12 xl:p-14 pb-14 sm:pb-16">
              <div className="absolute inset-0 pointer-events-none sm:hidden" aria-hidden="true">
                <svg
                  className="absolute inset-0 w-full h-full"
                  width={343}
                  height={388}
                  viewBox="0 0 343 388"
                  fill="none"
                  preserveAspectRatio="xMidYMid slice"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z"
                    fill="url(#linear1)"
                    fillOpacity=".1"
                  />
                  <defs>
                    <linearGradient
                      id="linear1"
                      x1="254.553"
                      y1="107.554"
                      x2="961.66"
                      y2="814.66"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#fff" />
                      <stop offset={1} stopColor="#fff" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div
                className="hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none sm:block lg:hidden"
                aria-hidden="true"
              >
                <svg
                  className="absolute inset-0 w-full h-full"
                  width={359}
                  height={339}
                  viewBox="0 0 359 339"
                  fill="none"
                  preserveAspectRatio="xMidYMid slice"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M-161 382.107L546.107-325l707.103 707.107-707.103 707.103L-161 382.107z"
                    fill="url(#linear2)"
                    fillOpacity=".1"
                  />
                  <defs>
                    <linearGradient
                      id="linear2"
                      x1="192.553"
                      y1="28.553"
                      x2="899.66"
                      y2="735.66"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#fff" />
                      <stop offset={1} stopColor="#fff" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div
                className="hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none lg:block"
                aria-hidden="true"
              >
                <svg
                  className="absolute inset-0 w-full h-full"
                  width={160}
                  height={678}
                  viewBox="0 0 160 678"
                  fill="none"
                  preserveAspectRatio="xMidYMid slice"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M-161 679.107L546.107-28l707.103 707.107-707.103 707.103L-161 679.107z"
                    fill="url(#linear3)"
                    fillOpacity=".1"
                  />
                  <defs>
                    <linearGradient
                      id="linear3"
                      x1="192.553"
                      y1="325.553"
                      x2="899.66"
                      y2="1032.66"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#fff" />
                      <stop offset={1} stopColor="#fff" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              <div className="relative min-h-full min-w-screen">
              <div className=" text-center absolute inset-0 pt-20">          



              <h3 className="text-3xl lg:text-4xl pt-20 font-medium text-white"
              
              style={{
                fontFamily: "'Roboto', sans-serif" 
                         }}
              
              >Thank you</h3>
              <p className="mt-6 text-base text-gray-200">
               We'll be in touch soon.</p>
               </div>
             </div>
             </div>

            
          </div>
        </div>
      </div>
    </div>

</>
  )
}

