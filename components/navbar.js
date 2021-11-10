/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'

// import { FaVimeoV } from 'react-icons/fa'
// import { TiSocialInstagram } from 'react-icons/ti'
// import { VscTwitter } from 'react-icons/vsc'


const navigation = [
  { name: 'About', href: '#', current: true },
  { name: 'Projects', href: '#', current: false },
  { name: 'Jobs', href: '#', current: false },
  { name: 'Contact', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className=  "bg-transparent absolute inset-x-0 top-0">

      {({ open }) => (
        <>
          <div className={classNames(
        open ? 'bg-red-900' : 'bg-transparent',
        'max-w-7xl mx-auto px-5 md:px-8'

      )}>


            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-gray-900 hover:bg-opacity-70 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
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
                  <a href="/"><img
                    className="block pt-1 h-8 md:h-9 w-auto"
                    src="https://res.cloudinary.com/annaga/image/upload/v1636486534/annaga-logo_du1dlj.png"
                    alt="Annaga"
                  /></a>
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? ' ' : '',
                          'text-white hover:bg-gray-900 hover:bg-opacity-70 hover:text-white px-2 py-2 rounded-md text-xl font-medium md:text-2xl'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
      

            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="bg-gray-900 px-2 pt-2 pb-3 space-y-1 h-screen">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? '' : '',
                    'bg-gray-900 text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
                  )}
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
