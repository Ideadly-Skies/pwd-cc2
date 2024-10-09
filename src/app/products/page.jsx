'use client'
import { Container } from '../../components/container/page'
import Image from "next/image";

// import products illustration here
import AgentForce from "../../../public/img/home/AgentForce.png"
import CRMApps from "../../../public/img/home/crm-apps.png"
import Data from "../../../public/img/home/Data.png"
import { FaExternalLinkAlt } from "react-icons/fa"; // Importing the external link icon
import { useState } from "react";
import Link from 'next/link';

// import image
import iconAI from "../../../public/icons/icon-ai.svg"
import iconCommerce from "../../../public/icons/icon-commerce.svg"
import iconCustSuccess from "../../../public/icons/icon-cust-success.svg"
import iconDataCloud from "../../../public/icons/icon-data-cloud.svg"
import iconMarketing from "../../../public/icons/icon-marketing.svg"
import iconMulesoft from "../../../public/icons/icon-mulesoft.svg"
import iconNetZero from "../../../public/icons/icon-net-zero.svg"
import iconPartnerApps from "../../../public/icons/icon-partner-apps.svg"
import iconPlatform from "../../../public/icons/icon-platform.svg"
import iconSales from "../../../public/icons/icon-sales.svg"
import iconService from "../../../public/icons/icon-service.svg"
import iconSlack from "../../../public/icons/icon-slack.svg"
import iconSmallBusiness from "../../../public/icons/icon-small-business.svg"
import iconTableau from "../../../public/icons/icon-tableau.svg"

export default function CreateProductPage() {
  const [isVideoVisible, setIsVideoVisible] = useState(false);

  const products = [
    { 
      label: 'AI', 
      imgSrc: iconAI,
      description: 'AI-powered tools that provide predictive analytics and automated recommendations.',
      pricing: 'Pricing varies based on features and is typically added as an add-on to existing Salesforce plans.'
    },
    { 
      label: 'Sales', 
      imgSrc: iconSales,
      description: 'Manage sales operations, workflows, and performance insights.',
      pricing: 'Starts at $25 per user/month (Essentials plan) and goes up to $300 per user/month (Unlimited plan).'
    },
    { 
      label: 'Service', 
      imgSrc: iconService,
      description: 'Customer service tools for providing support across multiple channels.',
      pricing: 'Starts at $25 per user/month and can go up to $300 per user/month for the Enterprise and Unlimited plans.'
    },
    { 
      label: 'Marketing', 
      imgSrc: iconMarketing,
      description: 'Tools for planning, personalizing, and optimizing customer journeys.',
      pricing: 'Custom pricing based on the number of customers and services required.'
    },
    { 
      label: 'Commerce', 
      imgSrc: iconCommerce,
      description: 'A platform for seamless e-commerce experiences and order management.',
      pricing: 'Pricing varies based on transaction volume and service features.'
    },
    { 
      label: 'Data Cloud', 
      imgSrc: iconDataCloud,
      description: 'Unify all customer data across various Salesforce products and systems.',
      pricing: 'Pricing is custom and based on data storage needs and additional services.'
    },
    { 
      label: 'Tableau', 
      imgSrc: iconTableau,
      description: 'Business intelligence and data visualization tool for interactive dashboards.',
      pricing: 'Starts at $70 per user/month for the Creator plan.'
    },
    { 
      label: 'MuleSoft', 
      imgSrc: iconMulesoft,
      description: 'Integration platform for connecting applications, data, and devices.',
      pricing: 'Pricing is custom based on the number of API calls and other factors.'
    },
    { 
      label: 'Slack', 
      imgSrc: iconSlack,
      description: 'Collaboration platform for team communication and project management.',
      pricing: 'Starts at $6.67 per user/month (Standard plan) and goes up to $12.50 per user/month (Plus plan).'
    },
    { 
      label: 'Salesforce Platform', 
      imgSrc: iconPlatform,
      description: 'Tools for developing custom applications on the Salesforce platform.',
      pricing: 'Platform pricing varies based on app usage and data needs.'
    },
    { 
      label: 'Net Zero', 
      imgSrc: iconNetZero,
      description: 'Manage and track your carbon footprint and sustainability initiatives.',
      pricing: 'Custom pricing based on features and organizational needs.'
    },
    { 
      label: 'Small Business', 
      imgSrc: iconSmallBusiness,
      description: 'Simplified CRM tools for small businesses.',
      pricing: '$25 per user/month.'
    },
    { 
      label: 'Partners', 
      imgSrc: iconPartnerApps,
      description: 'Manage partner relationships and track performance.',
      pricing: 'Pricing is typically included in a broader Salesforce plan based on CRM usage.'
    },
    { 
      label: 'Success', 
      imgSrc: iconCustSuccess,
      description: 'Support, training, and best practices for maximizing Salesforce usage.',
      pricing: 'Depends on the level of support and training services required.'
    }
  ];

  return (
    <>
      {/* product section */}
      <Container className="w-full flex flex-col lg:flex-row items-center justify-between py-32 px-8 lg:px-24 bg-white mb-8 relative overflow-hidden">
        
        {/* Left Section */}
        <div className="lg:w-1/2 lg:pr-16 z-10">
          <h1 className="text-4xl lg:text-5xl font-bold text-[#0D2B70] mb-4">
            Discover what <span className="text-[#0070E0]">CRM</span> was always
            <span className="text-[#0070E0]"> meant to be.</span>
          </h1>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Improve customer relationships with Salesforce, the #1 AI CRM where Humans with Agents drive customer success together. Our integrated platform pairs your unified customer data with trusted AI agents that can assist, take action autonomously, and hand off seamlessly to your employees in sales, service, marketing, commerce, and more.
          </p>

          {/* Buttons */}
          <div className="flex space-x-4 mb-8">
            <button className="bg-[#0070E0] text-white px-4 py-2 rounded-lg shadow hover:bg-[#005bb5]">
              Watch customer demos
            </button>
            <button className="border-2 border-[#0070E0] text-[#0070E0] px-4 py-2 rounded-lg shadow hover:bg-[#f0f8ff]">
              See all products
            </button>
          </div>
        </div>

        {/* Video Section */}
        <div className="lg:w-1/2 relative z-10">
          {/* Placeholder for Video */}
          {isVideoVisible ? (
            <iframe
              width="100%"
              height="360px"
              src="https://www.youtube.com/embed/irdNqlytsLc"
              title="Trust Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg shadow-lg"
              loading="lazy"
            ></iframe> ) : (
              <div className="lg:w-full w-full relative z-10">
                <div className="relative h-[200px] lg:h-[360px] w-full rounded-lg overflow-hidden shadow-lg bg-white flex items-center justify-center"> {/* Updated height and centered content */}
                  <div className="absolute inset-0 flex items-center justify-center"> {/* Centered content */}
                    {/* Placeholder for Video */}
                    <button className="bg-white rounded-full p-4 shadow-lg hover:shadow-xl transition border-2 border-[#0070E0]" onClick={() => setIsVideoVisible(true)}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        width="48"
                        height="48"
                        className="text-[#0070E0]"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
          )}          
        </div>
        
        {/* Background Image for above container */}
        <div className="absolute inset-0 right-0 top-0 w-[100%] h-[100%] overflow-hidden pointer-events-none z-0">
          <Image
            src="https://wp.sfdcdigital.com/en-us/wp-content/uploads/sites/4/2024/09/marquee-hero-background.png?resize=2048,640"
            alt="Background Graphic"
            layout="fill"
            objectFit="cover"
            className="pointer-events-none"
            loading='lazy'
          />
        </div>
        
      </Container> 

      {/* products */}
      <Container className="relative flex flex-col items-center justify-center pt-6 px-8 lg:px-24 bg-white overflow-hidden">
        {/* Background Image at Bottom Left */}
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] lg:w-[600px] lg:h-[600px] z-0 pointer-events-none">
          <Image
            src="https://wp.sfdcdigital.com/en-us/wp-content/uploads/sites/4/2023/04/02-card-bg.png?resize=2048,625"
            alt="Background Graphic"
            layout="fill"
            objectFit="contain"
            className="pointer-events-none"
            loading="lazy"
          />
        </div>

        {/* Header Section */}
        <div className="relative z-10 text-center mb-8">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight tracking-tight text-black">
            Connect with your customers in a whole new way with the #1 AI CRM.
          </h2>
        </div>

        {/* AI CRM Card Section */}
        <div className="relative z-10 flex flex-col lg:flex-row items-stretch justify-between w-full gap-6">
          {/* Card 1 - Agentforce */}
          <div className="flex flex-col w-full lg:w-1/3 rounded-lg shadow-lg p-6 bg-white border border-gray-200">
            {/* Image Section */}
            <Image
              src={AgentForce}
              alt="Agentforce Illustration"
              width={400}
              height={300}
              className="mx-auto mb-6 object-cover"
            />
            {/* Badge Label */}
            <p className="text-blue-600 text-sm font-semibold mb-2">Agentforce</p>
            {/* Title */}
            <h3 className="text-xl font-bold text-[#0D2B70] mb-4">
              Welcome your Agentforce and say goodbye to limits.
            </h3>
            {/* Description */}
            <p className="text-gray-700 mb-6">
              Augment every employee and serve customers 24/7 with agents that assist and take action autonomously in sales, service, marketing, commerce, and more.
            </p>
            {/* Link */}
            <Link href="/products" className="text-blue-600 hover:text-blue-700 font-semibold">
              Get started with Agentforce
            </Link>
          </div>

          {/* Card 2 - Data Cloud */}
          <div className="flex flex-col w-full lg:w-1/3 rounded-lg shadow-lg p-6 bg-white border border-gray-200">
            {/* Image Section */}
            <Image
              src={Data}
              alt="Data Cloud Illustration"
              width={400}
              height={300}
              className="mx-auto mb-6 object-cover"
            />
            {/* Badge Label */}
            <p className="text-blue-600 text-sm font-semibold mb-2">Data</p>
            {/* Title */}
            <h3 className="text-xl font-bold text-[#0D2B70] mb-4">
              Unlock, unify, and take action on all your data with Data Cloud.
            </h3>
            {/* Description */}
            <p className="text-gray-700 mb-6">
              Easily connect structured and unstructured data with Salesforce using zero copy to create a single source of truth that drives action across agents, apps, automation, and more.
            </p>
            {/* Link */}
            <Link href="/products" className="text-blue-600 hover:text-blue-700 font-semibold">
              Learn about Data Cloud
            </Link>
          </div>

          {/* Card 3 - Customer 360 */}
          <div className="flex flex-col w-full lg:w-1/3 rounded-lg shadow-lg p-6 bg-white border border-gray-200">
            {/* Image Section */}
            <Image
              src={CRMApps}
              alt="Customer 360 Illustration"
              width={400}
              height={300}
              className="mx-auto mb-6 object-cover"
            />
            {/* Badge Label */}
            <p className="text-blue-600 text-sm font-semibold mb-2">#1 CRM Apps</p>
            {/* Title */}
            <h3 className="text-xl font-bold text-[#0D2B70] mb-4">
              Activate your Customer 360 across every app with one platform.
            </h3>
            {/* Description */}
            <p className="text-gray-700 mb-6">
              Get a complete view of your customers on one platform and create a seamless handoff between agents and employees across sales, service, marketing, commerce, and more.
            </p>
            {/* Link */}
            <Link href="/products" className="text-blue-600 hover:text-blue-700 font-semibold">
              Build your Customer 360
            </Link>
          </div>
        </div>
      </Container>

      {/* Build, Customise, and scale fast with low code. */}
      <Container className="bg-white py-4 lg:py-16 relative flex items-center justify-center lg:px-24 overflow-hidden">
        {/* Card Container */}
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between bg-white rounded-lg p-8 lg:p-12 max-w-7xl border border-gray-200 shadow-lg overflow-hidden">
          
          {/* Left Image Section */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start mb-8 lg:mb-0">
            {/* Replace src with your desired image */}
            <div className="relative w-full h-[320px] lg:w-[480px] lg:h-[400px] rounded-lg overflow-hidden">
              <Image
                src="https://wp.sfdcdigital.com/en-au/wp-content/uploads/sites/12/2024/09/product-features-SFFlow-blade-4.webp?resize=768,768"
                alt="Illustration or Image"
                layout="fill"
                objectFit="contain"
                className="pointer-events-none"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right Text Section */}
          <div className="w-full lg:w-1/2 lg:pl-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0D2B70] mb-4">
              Build, customise, and scale fast with low code.
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Salesforce makes it easy to innovate fast with AI. Build and customise your apps, agents, prompts, models, automations, and more with no-code, low-code, and pro-code tools - all with any external data or partner you need on our open, secure platform.
            </p>
            <button className="bg-[#0070E0] text-white px-6 py-3 rounded-lg shadow hover:bg-[#005bb5] transition">
              View capabilities
            </button>
          </div>
        </div>

        {/* Background Image */}
        <div className="absolute bottom-0 left-0 w-[200px] h-[200px] lg:w-[400px] lg:h-[400px] z-0 pointer-events-none">
          <Image
            src="https://wp.sfdcdigital.com/en-us/wp-content/uploads/sites/4/2023/04/02-card-bg.png?resize=2048,625" // Replace with your background image URL
            alt="Background Graphic"
            layout="fill"
            objectFit="contain"
            className="pointer-events-none"
            loading="lazy"
          />
        </div>
      </Container>

      {/* Get a Customer 360 out of the box */}
      <Container className="relative mx-auto my-10">
          {/* Card Container */}
          <div className="bg-white flex flex-col lg:flex-row items-center rounded-lg shadow-lg overflow-hidden p-8 lg:p-16 relative z-10 border">
            
            {/* Left Section: Text Content */}
            <div className="lg:w-1/2 lg:pr-10">
                <h2 className="text-3xl lg:text-4xl font-bold text-[#0D2B70] mb-6">
                  Get a Customer 360 out of the box.
                </h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Our CRM provides every data-centric app you need with a foundation of the most popular features across Sales Cloud, Service Cloud, Marketing Cloud, Commerce Cloud, and Data Cloud in a streamlined experience - and at no extra cost. From startups to large-scale enterprises, Salesforce has a 360 solution for your unique business.
                </p>

                <Link href="/products" className="text-white bg-blue-600 hover:bg-blue-700 font-semibold py-3 px-6 rounded inline-flex items-center space-x-2">
                  <span>Learn more</span>
                  <FaExternalLinkAlt />
                </Link>
            </div>

            {/* Right Section: Image Content */}
            <div className="lg:w-1/2 mt-10 lg:mt-0 flex justify-center relative">
                {/* Floating Image */}
                <div className="relative w-[200px] h-[200px] lg:w-[400px] lg:h-[400px]">
                    <Image
                      src="https://wp.sfdcdigital.com/en-au/wp-content/uploads/sites/12/2024/09/Right-Panel.webp?resize=768,768"
                      alt="Illustration"
                      layout="fill"
                      objectFit="contain"
                      className="z-10"
                      loading="lazy"
                    />
                </div>
            </div>
          </div>
      </Container>

      {/* logo grid component */}
      <Container className="relative flex flex-col items-center justify-center py-12 bg-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-x-0 bottom-0 h-[200px] lg:h-[300px] w-full overflow-hidden z-0 pointer-events-none">
          <Image
            src="https://wp.sfdcdigital.com/en-us/wp-content/uploads/sites/4/2023/07/logo-grid-background.webp?resize=2048,442"
            alt="Background Blade Graphic"
            layout="fill"
            objectFit="cover"
            className="rounded-b-[100px] pointer-events-none"
            loading="lazy"
          />
        </div>

        {/* Content Section */}
        <div className="relative z-10 text-center mb-12">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight tracking-tight text-black">
            Learn how Salesforce delivers customer success for any business, in any industry.
          </h2>
        </div>

        {/* Logo Grid Section */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-center w-full max-w-6xl">
          {/* Card Components */}
          <div className="flex items-center justify-center rounded-lg shadow-lg p-4 bg-white border border-gray-200 hover:border-[#0D2B70] hover:shadow-xl transition-transform duration-300 hover:scale-105">
            <Image
              src="https://wp.sfdcdigital.com/en-ap/wp-content/uploads/sites/14/2023/08/m1-logo.png?resize=300,154"
              alt="M1 Logo"
              width={120}
              height={50}
              className="object-contain"
            />
          </div>

          <div className="flex items-center justify-center rounded-lg shadow-lg p-4 bg-white border border-gray-200 hover:border-[#0D2B70] hover:shadow-xl transition-transform duration-300 hover:scale-105">
            <Image
              src="https://wp.sfdcdigital.com/en-ap/wp-content/uploads/sites/14/2023/08/ap-one-logo.png?resize=300,154"
              alt="ONE Logo"
              width={120}
              height={50}
              className="object-contain"
            />
          </div>

          <div className="flex items-center justify-center rounded-lg shadow-lg p-4 bg-white border border-gray-200 hover:border-[#0D2B70] hover:shadow-xl transition-transform duration-300 hover:scale-105">
            <Image
              src="https://wp.sfdcdigital.com/en-ap/wp-content/uploads/sites/14/2023/08/lotus-logo.png?resize=300,154"
              alt='Lotus'
              width={120}
              height={50}
              className="object-contain"
            />
          </div>

          <div className="flex items-center justify-center rounded-lg shadow-lg p-4 bg-white border border-gray-200 hover:border-[#0D2B70] hover:shadow-xl transition-transform duration-300 hover:scale-105">
            <Image
              src="https://wp.sfdcdigital.com/en-ap/wp-content/uploads/sites/14/2023/08/aureus-academy-logo.png?resize=300,154"
              alt="Aureus Logo"
              width={120}
              height={50}
              className="object-contain"
            />
          </div>

          <div className="flex items-center justify-center rounded-lg shadow-lg p-4 bg-white border border-gray-200 hover:border-[#0D2B70] hover:shadow-xl transition-transform duration-300 hover:scale-105">
            <Image
              src="https://wp.sfdcdigital.com/en-ap/wp-content/uploads/sites/14/2023/09/sim-logo.jpg?resize=300,169"
              alt="SIM"
              width={120}
              height={50}
              className="object-contain"
            />
          </div>

          <div className="flex items-center justify-center rounded-lg shadow-lg p-4 bg-white border border-gray-200 hover:border-[#0D2B70] hover:shadow-xl transition-transform duration-300 hover:scale-105">
            <Image
              src="https://wp.sfdcdigital.com/en-ap/wp-content/uploads/sites/14/2023/07/ap-rcbc-logo.jpg?resize=300,154"
              alt="rbc"
              width={120}
              height={50}
              className="object-contain"
            />
          </div>

          <div className="flex items-center justify-center rounded-lg shadow-lg p-4 bg-white border border-gray-200 hover:border-[#0D2B70] hover:shadow-xl transition-transform duration-300 hover:scale-105">
            <Image
              src="https://wp.sfdcdigital.com/en-ap/wp-content/uploads/sites/14/2024/04/ap-lion-parcel-logo.jpg?resize=300,154"
              alt="lion parcel"
              width={120}
              height={50}
              className="object-contain"
            />
          </div>
        </div>

        {/* View More Button */}
        <Link href="/products" className="relative z-10 mt-8 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all">
          View more stories
        </Link>
      </Container>

      <Container className="relative flex flex-col items-center justify-center py-12 bg-white overflow-hidden">
        
        {/* Header Section */}
        <div className="relative z-10 text-center mb-8">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight text-[#0D2B70]">
            All Salesforce products. One integrated platform.
          </h2>
          <p className="text-lg text-gray-600 mt-4 mb-8 leading-relaxed max-w-2xl mx-auto">
            Every solution in your Customer 360 works together on one platform, so it&apos;s easier for your agents, employees, and data to work together, too. Click on the icons below to learn more.
          </p>
          {/* Watch Demo Button */}
          <Link href="/products" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all">
            Watch demo
          </Link>
        </div>

        {/* Products Grid Section */}
        <div className="relative z-10 grid grid-cols-2 lg:grid-cols-5 gap-8 items-center w-full max-w-6xl mt-12">
          {products.map((product, index) => (
            <div key={index} className="flex flex-col items-center justify-center text-center">
              <div className="bg-white p-4 rounded-full shadow-lg mb-4 w-[100px] h-[100px] flex items-center justify-center border border-transparent hover:border-[#0D2B70] hover:shadow-xl transition-transform duration-300 hover:scale-105">
                <Image
                  src={product.imgSrc}
                  alt={`${product.label} Icon`}
                  width={100}
                  height={100}
                  className="object-contain"
                />
              </div>
              <p className="text-lg font-semibold text-gray-800">{product.label}</p>
              <p className="text-sm text-gray-600 italic">{product.description}</p>
              {product.pricing && (
                <p className="text-xs text-gray-500 mt-2">{product.pricing}</p>
              )}
            </div>
          ))}
        </div>

      </Container>

    </>    
  );
}