'use client';

import { Dialog } from '@headlessui/react';
import { IconMenu, IconX } from '@tabler/icons-react';
import { useState } from 'react';
import { navigation } from './links';
import { Header, Navbar } from '@labs-pkg/ui';

import logoLabs from '@/public/logo-labs.png';
import Image from 'next/image';

export default function HeaderMenu() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <Header className='absolute inset-x-0 top-0 z-50'>
      <Navbar className='flex items-center justify-between p-6 lg:px-8' aria-label='Global'>
        <div className='flex lg:flex-1 items-center'>
          <a href='#' className='-m-1.5 p-1.5'>
            <span className='sr-only'>Your Company</span>
            <Image className='h-24 w-auto' src={logoLabs} alt='' />
          </a>
          <h1 className='text-white text-4xl font-mono -mb-6 font-inter'>Labs</h1>
        </div>
        <div className='flex lg:hidden'>
          <button
            type='button'
            className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className='sr-only'>Open main menu</span>
            <IconMenu size={40} strokeWidth='2' color='#fff' />
          </button>
        </div>
        <div className='hidden lg:flex lg:gap-x-12'>
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className='text-sm font-semibold leading-6 text-white'
            >
              {item.name}
            </a>
          ))}
        </div>
      </Navbar>
      <DialogMenu mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
    </Header>
  );
}

function DialogMenu({ mobileMenuOpen, setMobileMenuOpen }) {
  return (
    <Dialog as='div' className='lg:hidden' open={mobileMenuOpen} onClose={setMobileMenuOpen}>
      <div className='fixed inset-0 z-50' />
      <Dialog.Panel className='fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-[#050407] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
        <div className='flex items-center justify-between'>
          <a href='#' className='-m-1.5 p-1.5'>
            <span className='sr-only'>Your Company</span>
            <Image className='h-20 w-auto' src={logoLabs} alt='' />
          </a>
          <button
            type='button'
            className='-m-2.5 rounded-md p-2.5 text-gray-700'
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className='sr-only'>Close menu</span>
            <IconX size={40} color='#fff' strokeWidth='2' />
          </button>
        </div>
        <div className='mt-6 flow-root'>
          <div className='-my-6 divide-y divide-gray-500/10'>
            <div className='space-y-2 py-6'>
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white font-inter'
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </Dialog.Panel>
    </Dialog>
  );
}
