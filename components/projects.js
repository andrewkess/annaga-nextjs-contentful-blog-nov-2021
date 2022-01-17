// import Container from './container'
// import { EXAMPLE_PATH } from '../lib/constants'
// import { MailIcon, PhoneIcon } from '@heroicons/react/outline'
import Link from 'next/link'
import { getAllPostsForHome } from '../lib/api'
import MoreStories from './more-stories'

export default function Projects({ preview, allPosts }) {

  return (
    <>


    <div className="min-h-screen mb-8">
      <div className="mx-auto">
        <div className="relative shadow-xl">
          <h2 className="sr-only">Projects</h2>

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
              
              >Our projects</h3>
              <p className="mt-6 text-lg text-gray-200 max-w-3xl">
                Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor
                lacus arcu. Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu.
              </p>
              
             </div>

            {/* Contact form */}
            <div className="py-10 px-6 sm:px-12 xl:p-14 lg:col-span-2 bg-gray-50">
     
            Test     
            {/* {allPosts.length > 0 && <MoreStories posts={allPosts} />} */}

             
             
            </div>
            
          </div>
        </div>
      </div>
    </div>

</>
  )
}

export async function getStaticProps({ preview = false }) {
    const allPosts = (await getAllPostsForHome(preview)) ?? []
    return {
      props: { preview, allPosts },
    }
  }