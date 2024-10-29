/** @format */
'use client';

import React from 'react';
import Link from 'next/link';
import {
  FaPhone,
  FaMapMarkerAlt,
  FaEnvelope,
  FaLinkedin,
  FaYoutube,
  FaInstagram,
} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import Image from 'next/image';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className='bg-white border-t-2 border-blue-500 text-center lg:text-left'>
      <div className='flex justify-between px-12 items-center flex-col md:flex-row py-2'>
        <div className=''>
          <Image
            src='/icon1.png'
            alt='Logo'
            width={60}
            height={50}
          />
        </div>

        <div className='flex items-center justify-between gap-4 md:flex-row flex-col'>
        
          <div className='flex items-center justify-center'>
            <FaMapMarkerAlt className=' text-blue-500' />
            <span className='text-black'>Mumbai</span>
          </div>
          <div className='flex items-center justify-center'>
            <FaEnvelope className=' text-blue-500' />
            <Link
              href='mailto:admin@finstaravenue.com'
              className='text-black no-underline'>
              admin@finstaravenue.com
            </Link>
          </div>
          <div className='flex items-center justify-center'>
            <FaPhone className=' text-blue-500' />
            +918828427307
          </div>
        </div>

        <div className='flex justify-center md:mt-0 mt-4 items-center text-blue-500'>
          <Link
            href='https://twitter.com/AvenueFinstar'
            target='_blank'
            passHref>
            <FaXTwitter className='h-6 w-6 mr-4 cursor-pointer' />
          </Link>
          <Link
            href='https://www.linkedin.com/company/finstar-avenue-pvt-ltd/about/'
            target='_blank'
            passHref>
            <FaLinkedin className='h-6 w-6 mr-4 cursor-pointer' />
          </Link>
          <Link
            href='https://www.youtube.com/@FinstarAvenuePvtLtd'
            target='_blank'
            passHref>
            <FaYoutube className='h-6 w-6 mr-4 cursor-pointer' />
          </Link>
          <Link
            href='https://www.instagram.com/finstaravenue/'
            target='_blank'
            passHref>
            <FaInstagram className='h-6 w-6 mr-4 cursor-pointer' />
          </Link>
         
        </div>
      </div>
      <div className='flex justify-center items-center text-blue-500 gap-4 mb-4 md:-mt-3 mt-4'>
        <Link
          href='/about-us'
          className=''>
          About Us
        </Link>
        <Link
          href='/contact-us'
          className=''>
          Contact Us
        </Link>
        <Link
          href='/faqs'
          className=''>
          Carrers Button
        </Link>
       
       {' '}
      </div>
      <div className='text-center text-xs text-gray-600'>
        <p>&copy; {currentYear} FinStar Avenue Pvt Ltd</p>
      </div>
    </footer>
  );
};

export default Footer;