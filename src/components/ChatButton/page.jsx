import React from 'react';
import Image from 'next/image';
import salesforceLogo from '../../../public/img/salesforce-logo.png'

function ChatButton() {
  return (
    <div className="fixed bottom-4 right-10 z-50 -translate-y-8">
        <a
            className="flex items-center space-x-5 bg-[#0070E0] font-bold text-white text-sm underline underline-offset-2 text-center px-1 py-2 rounded-full w-[135px] h-[46px] shadow-lg hover:bg-blue-700 transition-all duration-300"
        >
            {/* Chat Icon or Image */}
            <Image
                src={salesforceLogo} // Replace with your chat icon image path
                alt="Chat Icon"
                width={30} // Appropriate size for the profile image
                height={30}
                className="rounded-full translate-x-3"
            /> 
            <span>let&apos;s chat</span>
        </a>
    </div>

  )
}

export default ChatButton