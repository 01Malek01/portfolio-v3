import React from 'react';
import { BsGithub, BsLinkedin, BsWhatsapp } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';
import Link from 'next/link';

function Footer() {
 return (
  <>
   {/* Divider */}
   <div className="bg-gray-200 h-[0.5px]"></div>

   {/* Footer */}
   <footer className="py-8 bg-white">
    <div className="container mx-auto flex flex-col items-center justify-center text-center text-black">
     <p className="text-lg mb-4 font-semibold">© 2024 Malek Mostafa</p>
     <div className="flex flex-row gap-8 justify-center items-center">
      <Link href="https://github.com/01Malek01">
       <BsGithub className="text-2xl text-black hover:text-gray-700 transition-colors duration-300" />
      </Link>
      <Link href="https://www.linkedin.com/in/malek-mostafa-salah-026362222/">
       <BsLinkedin className="text-2xl text-black hover:text-gray-700 transition-colors duration-300" />
      </Link>
      <Link href="mailto:malekmostafa0051@gmail.com">
       <HiOutlineMail className="text-2xl text-black hover:text-gray-700 transition-colors duration-300" />
      </Link>
      <Link href="https://wa.me/201125485384">
       <BsWhatsapp className="text-2xl text-black hover:text-gray-700 transition-colors duration-300" />
      </Link>
     </div>
    </div>
   </footer>
  </>
 );
}

export default Footer;
