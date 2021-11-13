// import Container from './container'
// import { EXAMPLE_PATH } from '../lib/constants'
import { MailIcon, PhoneIcon } from '@heroicons/react/outline'

import { FaVimeoV } from 'react-icons/fa'
import { TiSocialInstagram } from 'react-icons/ti'
import { VscTwitter } from 'react-icons/vsc'



export default function Footer() {

  const navigation = {
    main: [
      { name: 'About', href: 'about' },
      { name: 'Projects', href: 'projects' },
      { name: 'Jobs', href: 'jobs' },
      { name: 'Contact', href: 'contact' }
    ],
    social: [
 
      {
        name: 'Instagram',
        href: '#',
        icon: (props) => (
          <TiSocialInstagram />


        ),
      },
      {
        name: 'Twitter',
        href: '#',
        icon: (props) => (
          <VscTwitter />
        ),
      },
      {
        name: 'Vimeo',
        href: '#',
        icon: (props) => (
          <FaVimeoV />
        ),
      },
    ],
  }

  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        <nav className="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
          {navigation.main.map((item) => (
            <div key={item.name} className="px-5 py-2">
              <a href={item.href} className="text-base text-gray-500 hover:text-gray-900">
                {item.name}
              </a>
            </div>
          ))}
        </nav>
        <div className="mt-8 flex justify-center space-x-6">
          {navigation.social.map((item) => (
            <a key={item.name} href={item.href} className="text-gray-400 hover:text-gray-500 text-3xl">
              <span className="sr-only">{item.name}</span>
              <item.icon aria-hidden="true" />
            </a>
          ))}
        </div>
        <p className="mt-8 text-center text-base text-gray-400">&copy; 2021 Annaga Productions. All rights reserved.</p>
      </div>
    </footer>
  )
}
