/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import Link from 'next/link';


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
    <Disclosure as="nav" className=  "absolute inset-x-0 top-0 z-20">

      {({ open }) => (
        <>

          <div className="mx-auto p-5 md:p-8">

            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 right-0 flex items-center">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-white hover-text-black hover:text-opacity-50 lg:hover:text-white lg:bg-black lg:bg-opacity-50 lg:hover:bg-opacity-70 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-transparent"
                >
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-7 w-7 hover:text-main-salmon lg:hover:text-white z-50" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-7 w-7" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-start sm:items-stretch sm:justify-between">
                <div className="flex-shrink-0 flex items-center z-50">
                  <a href="/" key="testwindow"><img
                    className="block h-8 md:h-9 w-auto"
                    src="https://res.cloudinary.com/annaga/image/upload/v1636486534/annaga-logo_du1dlj.png"
                    alt="Annaga"
                  /></a>
                </div>
                <div className="hidden sm:ml-6">
                 </div>
              </div>
      

            </div>
          </div>
          <Transition
        enter="transition duration-150 ease-out"
        enterFrom="transform scale-100 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-100 opacity-0"
      >
          <Disclosure.Panel className="h-screen bg-main-primary absolute inset-x-0 top-0" >
            <div className="px-2 pt-32 pb-3 space-y-1 text-center "
                            style={{
                              fontFamily: "'Roboto', sans-serif",
                            }}
            >
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? '' : '',
                    'text-4xl md:text-5xl text-white hover:text-main-salmon block px-3 py-2 rounded-md font-bold tracking-tight leading-tight'
                  )
            
                }
              

                aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  )
}
