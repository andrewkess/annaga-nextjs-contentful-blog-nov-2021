// import Container from './container'
// import { EXAMPLE_PATH } from '../lib/constants'
import { MailIcon, PhoneIcon } from '@heroicons/react/outline'
import { useState } from 'react';
//import { useRouter } from 'next/router'




export default function Contact() {

    //const router = useRouter()

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
  
    const handleSubmit = e => {
      e.preventDefault();
      const data = {
        firstName,
        lastName,
        email,
        phone,
        subject,
        message,
      };
//      console.log(data);

      fetch('/api/contact', {
        method: 'post',
        body: JSON.stringify(data),
      });

 //     router.push('/thankyou');


    };

  return (
    <>




    <div className="min-h-screen">
      <div className="mx-auto">
        <div className="relative bg-white shadow-xl">
          <h2 className="sr-only">Contact us</h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 min-h-screen">
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
              
              >Contact us</h3>
              <p className="mt-6 text-lg text-gray-200 max-w-3xl">
                Annaga Productions<br/>
                Av. San Juan 3374                
                <br/>C1425 CABA<br/>Argentina
                 </p>
              <dl className="mt-8 space-y-6">
                <dt>
                  <span className="sr-only">Phone number</span>
                </dt>
                <dd className="flex text-base text-gray-200">
                  <PhoneIcon className="flex-shrink-0 w-6 h-6 text-white/50" aria-hidden="true" />
                  <span className="ml-3">+1 (555) 123-4567</span>
                </dd>
                <dt>
                  <span className="sr-only">Email</span>
                </dt>
                <dd className="flex text-base text-red-50">
                  <MailIcon className="flex-shrink-0 w-6 h-6 text-white/50" aria-hidden="true" />
                  <span className="ml-3">annaga.productions@gmail.com</span>
                </dd>
              </dl>
             </div>

            {/* Contact form */}
            <div className="py-10 px-6 sm:px-12 xl:p-14 lg:col-span-2 bg-gray-50">
              <h3 className="text-2xl lg:text-2xl xl:text-3xl pt-3 sm:pt-5 lg:pt-16 font-semibold text-gray-600"
                style={{
                    fontFamily: "'Roboto', sans-serif" 
                             }}
              >Send us a message</h3>
              <form onSubmit={handleSubmit} className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                <div>
                  <label htmlFor="first-name" className="block text-sm font-medium text-gray-900">
                    First name
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-main-primary focus:border-main-primary border-gray-300 rounded-md"
                      onChange={e => setFirstName(e.target.value)}
                      />
                  </div>
                </div>
                <div>
                  <label htmlFor="last-name" className="block text-sm font-medium text-gray-900">
                    Last name
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      autoComplete="family-name"
                      className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-main-primary focus:border-main-primary border-gray-300 rounded-md"
                      onChange={e => setLastName(e.target.value)}

                   />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-900">
                    Email
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-main-primary focus:border-main-primary border-gray-300 rounded-md"
                      onChange={e => setEmail(e.target.value)}

                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-900">
                      Phone
                    </label>
                    <span id="phone-optional" className="text-sm text-gray-500">
                      Optional
                    </span>
                  </div>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      autoComplete="tel"
                      className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-main-primary focus:border-main-primary border-gray-300 rounded-md"
                      aria-describedby="phone-optional"
                      onChange={e => setPhone(e.target.value)}

                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-900">
                    Subject
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="subject"
                      id="subject"
                      className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-main-primary focus:border-main-primary border-gray-300 rounded-md"
                      onChange={e => setSubject(e.target.value)}

                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <div className="flex justify-between">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-900">
                      Message
                    </label>
                    <span id="message-max" className="text-sm text-gray-500">
                      Max. 500 characters
                    </span>
                  </div>
                  <div className="mt-1">
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-main-primary focus:border-main-primary border border-gray-300 rounded-md"
                      aria-describedby="message-max"
                      defaultValue={''}
                      onChange={e => setMessage(e.target.value)}

                    />
                  </div>
                </div>
                <div className="sm:col-span-2 sm:flex sm:justify-end">
                  <button
                    type="submit"
                    className="mt-2 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-main-primary/70 hover:bg-main-primary hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-main-primary sm:w-auto"
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

</>
  )
}
