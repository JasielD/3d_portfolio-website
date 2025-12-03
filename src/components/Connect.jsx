import React from 'react'
import { socialLinks } from '../constants';
import { Link } from 'react-router-dom';
const Connect = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center mt-12 pb-10">
      
      <div className="flex gap-8">
        {socialLinks.map((social) => (
          <Link
            to={social.link}
            target="_blank"
            rel="noopener noreferrer"
            key={social.name}
            className="w-12 h-12 flex justify-center items-center rounded-lg bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300"
          >
            <img
              src={social.iconUrl}
              alt={social.name}
              className="w-8 h-8 object-contain"
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Connect
