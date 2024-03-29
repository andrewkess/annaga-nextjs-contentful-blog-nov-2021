// import Container from './container'
// import { EXAMPLE_PATH } from '../lib/constants'
// import { MailIcon, PhoneIcon } from '@heroicons/react/outline'


const people = [
    {
      name: 'Juan Pablo Domenech',
      role: 'Art Director',
      bio: 'Juan Pablo has worked across New York, Paris and Buenos Aires over the last four decades, directing for French TV channels TF1 and France 2, and scriptwriting for several Argentinian TV series and feature films, including "Luna de Avellanada" and "La Niña Santa". He currently resides in Buenos Aires.',
      imageUrl:
        'https://res.cloudinary.com/annaga/image/upload/w_1000,ar_1:1,c_fill,g_auto/v1636733067/image-w856_pdmbk9.jpg',
      twitterUrl: '#',
      linkedinUrl: '#',
    },
    {
        name: 'Noboru de Abreu',
        role: 'Producer',
        bio: 'Noboru has worked across New York, Paris and Buenos Aires over the last four decades, directing for French TV channels TF1 and France 2, and scriptwriting for several Argentinian TV series and feature films, including "Luna de Avellanada" and "La niña santa". He currently resides in Buenos Aires.',
        imageUrl:
          'https://res.cloudinary.com/annaga/image/upload/w_1000,ar_1:1,c_fill,g_auto/v1636860079/IMG_2514_dbyaku.jpg',
        twitterUrl: '#',
        linkedinUrl: '#',
      },
      {
        name: 'Pacho Garcia Santos',
        role: 'Director',
        bio: 'Pacho has worked across New York, Paris and Buenos Aires over the last four decades, directing for French TV channels TF1 and France 2, and scriptwriting for several Argentinian TV series and feature films, including "Luna de Avellanada" and "La niña santa". He currently resides in Buenos Aires.',
        imageUrl:
          'https://res.cloudinary.com/annaga/image/upload/v1636926786/soccer-fan-cheering-for-national-team-at-the-game-picture-id970110584_rnuvyl.jpg',
        twitterUrl: '#',
        linkedinUrl: '#',
      },
      {
        name: 'Calvados Dominican',
        role: 'Assistant',
        bio: 'Calvados has worked across New York, Paris and Buenos Aires over the last four decades, directing for French TV channels TF1 and France 2, and scriptwriting for several Argentinian TV series and feature films, including "Luna de Avellanada" and "La niña santa". He currently resides in Buenos Aires.',
        imageUrl:
        'https://res.cloudinary.com/annaga/image/upload/v1640923741/photo-1499952127939-9bbf5af6c51c_nunums.jpg',
        twitterUrl: '#',
        linkedinUrl: '#',
      },
      
    // More people...
  ]


  



export default function Team() {

  return (
    <>




    <div className="min-h-screen mb-8">
      <div className="mx-auto">
        <div className="relative shadow-xl">
          <h2 className="sr-only">Contact us</h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 min-h-screen bg-gray-50">
            {/* Contact information */}
            <div className="relative overflow-hidden bg-main-primary py-10 px-6 sm:px-12 xl:p-14 pb-14 sm:pb-16">
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
                      <stop stopColor="#e87309" />
                      <stop offset={1} stopColor="#e87309" stopOpacity={0} />
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
                      <stop stopColor="#e87309" />
                      <stop offset={1} stopColor="#e87309" stopOpacity={0} />
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
                      <stop stopColor="#e87309" />
                      <stop offset={1} stopColor="#e87309" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <h3 className="text-3xl lg:text-4xl pt-20 font-medium text-white lg:mt-2"
              
              style={{
                fontFamily: "'Roboto', sans-serif" 
                         }}
              
              >About us</h3>
              <p className="mt-6 text-lg text-gray-200 max-w-3xl">
                Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor
                lacus arcu. Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu.
              </p>
              
             </div>

            {/* Contact form */}
            <div className="py-10 px-6 sm:px-12 xl:p-14 lg:col-span-2 bg-gray-50">
              <h3 className="text-2xl lg:text-2xl xl:text-3xl pt-3 sm:pt-5 lg:pt-12 font-semibold text-gray-600"
                style={{
                    fontFamily: "'Roboto', sans-serif" 
                             }}
              >Our team</h3>
             
             <div className="bg-transparent">
      <div className="mx-auto pt-8 max-w-7xl">
        <div className="space-y-12">
            <ul
            role="list"
            className="sm:space-y-0 space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-12 md:gap-x-12 sm:gap-y-12 pb-8"
          >
            {people.map((person) => (
              <li key={person.name}>
                <div className="space-y-4">
                  <div className="aspect-w-3 aspect-h-2">
                    <img className="object-cover shadow-lg rounded-lg" src={person.imageUrl} alt="" />
                  </div>

                  <div className="space-y-2 flex items-start justify-between">
                    <div className="basis-1/2 text-lg leading-6 font-medium space-y-1">
                      <h3 className="text-xl">{person.name}</h3>
                      <p className="text-main-primary/80 text-base">{person.role}</p>
                    </div>
                    <ul role="list" className="flex space-x-5">
                      <li>
                        <a href={person.twitterUrl} className="text-gray-400 hover:text-main-primary">
                          <span className="sr-only">Twitter</span>
                          <svg className="w-7 h-7" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a href={person.linkedinUrl} className="text-gray-400 hover:text-main-primary">
                          <span className="sr-only">LinkedIn</span>
                          <svg className="w-7 h-7" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                            <path
                              fillRule="evenodd"
                              d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </a>
                      </li>
                    </ul>
                    </div>
                    <p className="text-base">{person.bio}</p>

                </div>
              </li>
            ))}
          </ul>
        </div>
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

