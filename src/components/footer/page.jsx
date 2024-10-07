import Link from "next/link";
import Image from "next/image";
import React from "react";
import { BsGlobe2 } from "react-icons/bs";
import { RiArrowDropDownLine } from "react-icons/ri";

export function Footer() {
  const newToSalesforce = [
    "Why Salesforce",
    "What is CRM",
    "Explore All Products",
    "SaaS",
    "Customer Success",
    "Product Pricing",
  ];

  const aboutSalesforce = [
    "Our Story",
    "Careers",
    "Press",
    "Blog",
    "Security and Performance",
    "Salesforce.org",
    "Best CRM Software",
    "Sustainability",
    "Legal",
    "Give us your Feedback",
  ];

  const popularLinks = [
    "New Release Features",
    "Salesforce Mobile App",
    "Business App Store",
    "Dreamforce",
    "CRM Software",
    "Salesforce Plus",
    "Salesforce for Startups",
  ];

  return (
    <div className="w-full bg-white border-t border-gray-200 pt-10">
      <div className="container mx-auto px-8 lg:px-16 grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Salesforce Logo and Social Media Links */}
        <div className="flex flex-col space-y-6 items-center lg:items-start">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/img/salesforce-logo.png"
              alt="Salesforce"
              width={80}
              height={80}
              className="w-15 h-15"
            />
          </Link>

          {/* Social Media Icons */}
          <div className="flex space-x-4 text-gray-600"> {/* Updated color to gray-600 for a darker look */}
            <a href="#" aria-label="Facebook">
              <Facebook size={30} className="hover:text-blue-500 transition-colors" />
            </a>
            <a href="#" aria-label="Twitter">
              <Twitter size={30} className="hover:text-blue-500 transition-colors" />
            </a>
            <a href="#" aria-label="Instagram">
              <Instagram size={30} className="hover:text-blue-500 transition-colors" />
            </a>
            <a href="#" aria-label="LinkedIn">
              <Linkedin size={30} className="hover:text-blue-500 transition-colors" />
            </a>
            <a href="#" aria-label="YouTube">
              <YouTube size={30} className="hover:text-blue-500 transition-colors" />
            </a>
          </div>

          {/* Contact Information */}
          <div className="text-center lg:text-left text-gray-600 text-sm"> {/* Reduced font size */}
            <p>Call us at 800 1301 448 (SG), 800 967 655 (HK), +65 6302 5700 (Intl)</p>
          </div>
        </div>

        {/* New to Salesforce Links */}
        <div className="flex flex-col space-y-2 text-center lg:text-left">
          <h3 className="text-lg font-semibold text-gray-700">New to Salesforce?</h3> {/* Reduced heading size */}
          <ul className="space-y-2 text-gray-600">
            {newToSalesforce.map((link, index) => (
              <li key={index}>
                <Link href="/" className="text-blue-500 hover:underline"> {/* Changed text color to blue */}
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* About Salesforce Links */}
        <div className="flex flex-col space-y-2 text-center lg:text-left">
          <h3 className="text-lg font-semibold text-gray-700">About Salesforce</h3>
          <ul className="space-y-2 text-gray-600">
            {aboutSalesforce.map((link, index) => (
              <li key={index}>
                <Link href="/" className="text-blue-500 hover:underline"> {/* Changed text color to blue */}
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Popular Links */}
        <div className="flex flex-col space-y-2 text-center lg:text-left">
          <h3 className="text-lg font-semibold text-gray-700">Popular Links</h3>
          <ul className="space-y-2 text-gray-600">
            {popularLinks.map((link, index) => (
              <li key={index}>
                <Link href="/" className="text-blue-500 hover:underline"> {/* Changed text color to blue */}
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Footer Section */}
      <div className="bg-blue-900 text-white py-4 mt-8"> {/* Updated color and padding */}
        <div className="container mx-auto px-8 lg:px-16 flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
          {/* Language Selector and Links */}
          <div className="flex flex-col lg:flex-row items-center lg:space-x-6 text-xs lg:text-sm font-light lg:font-normal">
            {/* Language Selector */}
            <div className="flex items-center space-x-1">
              <BsGlobe2 className="text-lg" /> {/* Adjusted icon size */}
              <span>Worldwide</span>
              {/* Dropdown */}
              <span><RiArrowDropDownLine className="text-lg"/></span> {/* Reduced left margin */}
            </div>

            {/* Footer Links */}
            <div className="flex space-x-4 lg:space-x-6 mt-4 lg:mt-0">
              <Link href="/" className="hover:underline">Legal</Link>
              <Link href="/" className="hover:underline">Terms of Service</Link>
              <Link href="/" className="hover:underline">Privacy Information</Link>
              <Link href="/" className="hover:underline">Contact</Link>
              <Link href="/" className="hover:underline">Cookie Preferences</Link>
              <Link href="/" className="hover:underline">Your Privacy Choices</Link>
            </div>
          </div>

          {/* Address and Copyright */}
          <div className="text-xs lg:text-sm text-center lg:text-right">
            <p className="mb-1 lg:mb-0">© {new Date().getFullYear()} Salesforce, Inc. All rights reserved.</p>
            <p>Salesforce.com Singapore Pte Ltd. 5 Temasek Boulevard #13-01 Suntec Tower 5, Singapore 038985</p>
          </div>
        </div>
      </div>
    </div>
  );
}
  
const Facebook = ({ size }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className="text-gray-600 hover:text-blue-500 transition-colors rounded-lg"
  >
    <path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.8-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.5c-1.5 0-1.96.93-1.96 1.89v2.26h3.32l-.53 3.5h-2.8V24C19.62 23.1 24 18.1 24 12.07" />
  </svg>
);

// Similarly update the Twitter, Instagram, and Linkedin components if necessary
const Twitter = ({ size = 30 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className="text-gray-600 hover:text-blue-500 transition-colors rounded-lg"
  >
    {/* Centering the X logo within the viewbox */}
    <rect width="24" height="24" rx="4" fill="#4D4D4D" />
    {/* X Path updated to be white */}
    <path d="M5 3L12 10.25 19 3 21 5 13.75 12 21 19 19 21 12 13.75 5 21 3 19 10.25 12 3 5z" fill="white"/>
  </svg>
);

const Instagram = ({ size = 30 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className="text-gray-600 hover:text-blue-500 transition-colors"
  >
    <path d="M16.98 0a6.9 6.9 0 0 1 5.08 1.98A6.94 6.94 0 0 1 24 7.02v9.96c0 2.08-.68 3.87-1.98 5.13A7.14 7.14 0 0 1 16.94 24H7.06a7.06 7.06 0 0 1-5.03-1.89A6.96 6.96 0 0 1 0 16.94V7.02C0 2.8 2.8 0 7.02 0h9.96zm.05 2.23H7.06c-1.45 0-2.7.43-3.53 1.25a4.82 4.82 0 0 0-1.3 3.54v9.92c0 1.5.43 2.7 1.3 3.58a5 5 0 0 0 3.53 1.25h9.88a5 5 0 0 0 3.53-1.25 4.73 4.73 0 0 0 1.4-3.54V7.02a5 5 0 0 0-1.3-3.49 4.82 4.82 0 0 0-3.54-1.3zM12 5.76c3.39 0 6.2 2.8 6.2 6.2a6.2 6.2 0 0 1-12.4 0 6.2 6.2 0 0 1 6.2-6.2zm0 2.22a3.99 3.99 0 0 0-3.97 3.97A3.99 3.99 0 0 0 12 15.92a3.99 3.99 0 0 0 3.97-3.97A3.99 3.99 0 0 0 12 7.98zm6.44-3.77a1.4 1.4 0 1 1 0 2.8 1.4 1.4 0 0 1 0-2.8z" />
  </svg>
);

const Linkedin = ({ size = 30 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className="text-gray-600 hover:text-blue-500 transition-colors"
  >
    <path d="M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0zM7.27 20.1H3.65V9.24h3.62V20.1zM5.47 7.76h-.03c-1.22 0-2-.83-2-1.87 0-1.06.8-1.87 2.05-1.87 1.24 0 2 .8 2.02 1.87 0 1.04-.78 1.87-2.05 1.87zM20.34 20.1h-3.63v-5.8c0-1.45-.52-2.45-1.83-2.45-1 0-1.6.67-1.87 1.32-.1.23-.11.55-.11.88v6.05H9.28s.05-9.82 0-10.84h3.63v1.54a3.6 3.6 0 0 1 3.26-1.8c2.39 0 4.18 1.56 4.18 4.89v6.21z" />
  </svg>
);

const YouTube = ({ size = 30 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className="text-gray-600 hover:text-blue-500 transition-colors"
  >
    {/* Updated box dimensions for YouTube logo */}
    <rect width="24" height="24" rx="4" fill="#4D4D4D" />
    {/* Centered YouTube play button within the box */}
    <path d="M10 8.5v7l6-3.5-6-3.5z" fill="white" />
  </svg>
);