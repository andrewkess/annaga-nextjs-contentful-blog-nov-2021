/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'


//import { FaBars } from 'react-icons/fa'





const navigation = [
  { name: 'About', href: 'about', current: false },
  { name: 'Projects', href: 'projects', current: false },
  { name: 'Jobs', href: 'jobs', current: false },
  { name: 'Contact', href: 'contact', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {

  return (
    <Disclosure as="nav" className=  "absolute inset-x-0 top-0 z-20 sm:px-6">

      {({ open }) => (
        <>
          <div className={classNames(
        open ? 'bg-red-900' : 'bg-transparent',
        'mx-auto p-5 md:p-5 lg:p-5'

      )}>



            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 right-0 flex items-center">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-white lg:bg-gray-900 lg:bg-opacity-60 hover:text-white hover:bg-gray-900 hover:bg-opacity-60 lg:hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                >
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-7 w-7" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-7 w-7" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-start sm:items-stretch sm:justify-between">
                <div className="flex-shrink-0 flex items-center">
                  <a href="/" key="testwindow"><img
                    className="block pt-1 h-8 md:h-9 w-auto"
                    src="https://res.cloudinary.com/annaga/image/upload/v1636486534/annaga-logo_du1dlj.png"
                    alt="Annaga"
                  /></a>
                </div>
                <div className="hidden sm:ml-6">
                 </div>
              </div>
      

            </div>
          </div>

          <Disclosure.Panel className="" >
            <div className="bg-gray-900 px-2 pt-5 pb-3 space-y-1 h-screen text-center" >
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? '' : '',
                    'bg-gray-900 text-5xl text-white hover:text-red-800 block px-3 py-1 rounded-md font-medium'
                  )
            
                }
                
                style={{
                  fontFamily: "'Bebas Neue', cursive",
                }}

                aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
