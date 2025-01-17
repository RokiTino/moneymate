'use client';

import Link from '@/node_modules/next/link'
import Image from '@/node_modules/next/image'
import React from 'react'
import { ITEMS, sidebarLinks } from '@/constants/index'
import { cn } from '@/lib/utils'
import { usePathname } from '@/node_modules/next/navigation'

const Sidebar = ({ user }: SiderbarProps) => {
    
    const pathName = usePathname();

  return (
      <section className='sidebar'>
          <nav className='flex flex-col gap-4'>
              <Link href="/" className="mb-12 cursor-pointer flex items-center gap-2">
                  <Image
                      src="/icons/logo.svg"
                      width={34}
                      height={34}
                      alt="MoneyMate"
                      className='size-[24px] max-xl:size-14'
                  />
                  <h1 className='sidebar-logo'>MoneyMate</h1>

              </Link>
              {sidebarLinks.map((item) => {
                  
                  const isActive = pathName === item.route || pathName.startsWith(`${item.route}/`)

                  return (
                      <Link href={item.route} key={item.label} className={cn('sidebar-link', { 'bg-bankGradient text-white': isActive })}>
                          <div className='relative size-6 row-span-2'>
                              <Image src={item.imgURL} alt={item.label} fill className={ cn({'brightness-[3] invert-0' :isActive } ) } />
                          </div>  
                          <p className={cn('sidebar-label', {'!text-white' : isActive})}>{item.label}</p>
                      </Link>
                  )
              })}
              USER
          </nav>
          FOOTER
    </section>
  )
}

export default Sidebar