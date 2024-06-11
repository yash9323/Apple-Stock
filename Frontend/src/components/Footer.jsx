import React from 'react';
import { CiYoutube } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";

const Footer = () => {
  return (
    <div className='flex flex-col items-center justify-center h-full gap-y-4 mb-4 mt-2'>
      <div className='flex flex-col gap-y-1'>
        <div className='flex gap-x-1'>
          <h4 className='text-s text-extralight underline underline-offset-4'>Affiliate</h4>
          <h4 className='text-s text-extralight'>.</h4>
          <h4 className='text-s text-extralight underline underline-offset-4'>Advertise</h4>
          <h4 className='text-s text-extralight'>.</h4>
          <h4 className='text-s text-extralight underline underline-offset-4'>Careers</h4>
          <h4 className='text-s text-extralight'>.</h4>
          <h4 className='text-s text-extralight underline underline-offset-4'>Help</h4>
        </div>
      </div>
      <div className='flex gap-x-3 justify-center'> 
        <CiFacebook size={20}/>
        <FaXTwitter size={20}/>
        <CiMail size={20} />
        <CiYoutube size={20}/>
      </div>
      <h4 className='text-xs'>
        Copyright © 1999-2024 xyz.com. All Rights Reserved.
      </h4>
    </div>
  );
};

export default Footer;
