// import Container from './container'
// import { EXAMPLE_PATH } from '../lib/constants'
//import { MailIcon, PhoneIcon } from '@heroicons/react/outline';

import { FaVimeoV } from 'react-icons/fa';
import { TiSocialInstagram } from 'react-icons/ti';
import { VscTwitter } from 'react-icons/vsc';
import Link from 'next/link';

export default function Footer() {
  const navigation = {
    main: [
      { name: 'About', href: '/about' },
      { name: 'Projects', href: '/projects' },
      { name: 'Jobs', href: '/jobs' },
      { name: 'Contact', href: '/contact' },
    ],
    social: [
      {
        name: 'Instagram',
        href: '#',
        icon: (props) => <TiSocialInstagram />,
      },
      {
        name: 'Twitter',
        href: '#',
        icon: (props) => <VscTwitter />,
      },
      {
        name: 'Vimeo',
        href: '#',
        icon: (props) => <FaVimeoV />,
      },
    ],
  };

  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto py-10 md:py-16 overflow-hidden mb-8">
        <nav
          className="-mx-5 -my-2 flex flex-wrap justify-center"
          aria-label="Footer"
        >
          {navigation.main.map((item) => (

            <div key={item.name} className="mx-2 inline-flex items-center text-gray-500 cursor-pointer rounded-md hover:bg-main-primary hover:text-white">



              <Link
                href={item.href}
                className="text-base"
              >
                <a className="p-3 lg:text-lg">{item.name}</a>

              </Link>
            </div>
          ))}
        </nav>
        <div className="mt-8 flex justify-center space-x-6">
          {navigation.social.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-500 hover:text-main-primary text-3xl"
            >
              <span className="sr-only">{item.name}</span>
              <item.icon aria-hidden="true" />
            </a>
          ))}
        </div>
        <p className="mt-8 text-center text-base text-gray-500">
          &copy; 2021 Annaga Productions
          <br /> All Rights Reserved
          <br />
          <a
            key="privacy"
            href="privacy"
            className="text-gray-500 hover:text-main-primary"
          >
            Privacy Policy
          </a>
        </p>
      </div>
    </footer>
  );
}
