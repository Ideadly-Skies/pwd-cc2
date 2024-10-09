"use client"

import React from 'react'
import Image from "next/image";

import SFTower from '../../../public/img/about-us/London_Salesforce_Tower_Ohana_Floor.jpg';
import Newscard1 from '../../../public/img/about-us/Newscard1.png';
import Newscard2 from '../../../public/img/about-us/Newscard2.jpg';
import { Container } from '../../components/container/page'
import { FaExternalLinkAlt } from "react-icons/fa"; // Importing the external link icon
import { useState } from "react";

function Page() {
    // Data for the executive team members
    const executives = [
        { name: "Marc Benioff", position: "Chair, CEO & Co-Founder", company: "Salesforce", imgSrc: "https://wp.sfdcdigital.com/en-us/wp-content/uploads/sites/4/2024/01/card-headshot-benioff.png?resize=300,300", description: "Marc Benioff is the founder, Chairman, and CEO of Salesforce. He is a pioneer of cloud computing and a leading voice in corporate responsibility."},
        { name: "Parker Harris", position: "Co-Founder, Salesforce & Chief Technology Officer, Slack", company: "Salesforce", imgSrc: "https://wp.sfdcdigital.com/en-us/wp-content/uploads/sites/4/2024/01/card-headshot-harris.png?resize=300,300", description: "Parker Harris co-founded Salesforce and has led the company's innovation, bringing new technologies and applications to the platform."},
        { name: "Amy Weaver", position: "President & Chief Financial Officer", company: "Salesforce", imgSrc: "https://wp.sfdcdigital.com/en-us/wp-content/uploads/sites/4/2024/10/Amy_Weaver-headshot.png?resize=300,300", description: "Amy Weaver oversees Salesforce's global finance organization, including accounting, tax, treasury, and investor relations."},
        { name: "Ariel Kelman", position: "President & Chief Marketing Officer", company: "Salesforce", imgSrc: "https://wp.sfdcdigital.com/en-us/wp-content/uploads/sites/4/2024/01/card-headshot-kelman.png?resize=300,300", description: "Ariel Kelman leads Salesforce's global marketing and communications strategy, driving customer engagement and brand growth."},
        { name: "Brian Millham", position: "President & Chief Operating Officer", company: "Salesforce", imgSrc: "https://wp.sfdcdigital.com/en-us/wp-content/uploads/sites/4/2024/01/card-headshot-millham.png?resize=300,300", description: "Brian Millham manages Salesforce's operations and go-to-market strategy, ensuring alignment and execution of business objectives."},
        { name: "David Schmaier", position: "President & Chief Product Officer", company: "Salesforce", imgSrc: "https://wp.sfdcdigital.com/en-us/wp-content/uploads/sites/4/2024/02/david-schmaier-2.png?resize=300,300", description: "David Schmaier leads Salesforce's product strategy and management, driving innovation and customer success."},
        { name: "Juan Perez", position: "Chief Information Officer", company: "Salesforce", imgSrc: "https://wp.sfdcdigital.com/en-us/wp-content/uploads/sites/4/2024/01/card-headshot-perez.png?resize=300,300", description: "Juan Perez is responsible for Salesforce's internal IT operations and cybersecurity strategies."},
        { name: "Kendall Collins", position: "Chief Business Officer & Chief of Staff to Marc Benioff", company: "Salesforce", imgSrc: "https://wp.sfdcdigital.com/en-us/wp-content/uploads/sites/4/2024/01/card-headshot-collins.png?resize=300,298", description: "Kendall Collins supports Marc Benioff in managing business operations and strategic initiatives."},
        { name: "Miguel Milano", position: "President & Chief Revenue Officer", company: "Salesforce", imgSrc: "https://wp.sfdcdigital.com/en-us/wp-content/uploads/sites/4/2024/01/card-headshot-milano.png?resize=300,300", description: "Miguel Milano oversees Salesforce's global revenue operations and business growth strategies."},
        { name: "Nathalie Scardino", position: "Chief People Officer", company: "Salesforce", imgSrc: "https://wp.sfdcdigital.com/en-us/wp-content/uploads/sites/4/2024/01/card-headshot-scardino.png?resize=300,300", description: "Nathalie Scardino leads Salesforce's global people strategy, including talent acquisition and employee engagement."},
        { name: "Sabastian Niles", position: "President & Chief Legal Officer", company: "Salesforce", imgSrc: "https://wp.sfdcdigital.com/en-us/wp-content/uploads/sites/4/2024/01/card-headshot-niles.png?resize=300,300", description: "Sabastian Niles is responsible for legal, compliance, and corporate governance strategies at Salesforce."},
        { name: "Srini Tallapragada", position: "President & Chief Engineering Officer", company: "Salesforce", imgSrc: "https://wp.sfdcdigital.com/en-us/wp-content/uploads/sites/4/2024/01/card-headshot-Tallapragada.png?resize=300,300", description: "Srini Tallapragada leads Salesforce's global engineering organization, driving technical excellence and innovation."},
        { name: "Suzanne DiBianca", position: "Executive Vice President & Chief Impact Officer", company: "Salesforce", imgSrc: "https://wp.sfdcdigital.com/en-us/wp-content/uploads/sites/4/2024/01/card-headshot-dibianca.png?resize=300,300", description: "Suzanne DiBianca is a driving force behind Salesforce's social impact strategy, leading corporate philanthropy and sustainability initiatives."},
    ];

    // Data for Directors
    const directors = [
        { name: "Marc Benioff", position: "Chair, CEO & Co-Founder", company: "Salesforce", imgSrc: "https://wp.sfdcdigital.com/en-us/wp-content/uploads/sites/4/2024/01/card-headshot-benioff.png?resize=300,300", description: "Marc Benioff is the founder, Chairman, and CEO of Salesforce. He is a pioneer of cloud computing and a leading voice in corporate responsibility." },
        { name: "Parker Harris", position: "Co-Founder, Salesforce & Chief Technology Officer, Slack", company: "Salesforce", imgSrc: "https://wp.sfdcdigital.com/en-us/wp-content/uploads/sites/4/2024/01/card-headshot-harris.png?resize=300,300", description: "Parker Harris co-founded Salesforce and has led the company's innovation, bringing new technologies and applications to the platform." },
        { name: "Laura Alber", position: "President & CEO", company: "Williams Sonoma, Inc.", imgSrc: "https://wp.sfdcdigital.com/en-us/wp-content/uploads/sites/4/2024/01/card-headshot-alber.png?resize=300,300", description: "Laura Alber has led Williams Sonoma, Inc. as President and CEO, driving growth and innovation across multiple consumer brands." },
        { name: "Craig Conway", position: "Former President & CEO", company: "PeopleSoft, Inc.", imgSrc: "https://wp.sfdcdigital.com/en-us/wp-content/uploads/sites/4/2024/01/card-headshot-conway.png?resize=300,300", description: "Craig Conway is known for his leadership at PeopleSoft, where he served as President and CEO and helped shape the company's strategic direction." },
        { name: "Arnold Donald", position: "Former President & CEO", company: "Carnival Corporation & plc", imgSrc: "https://wp.sfdcdigital.com/en-us/wp-content/uploads/sites/4/2024/01/card-headshot-donald.png?resize=300,300", description: "Arnold Donald transformed Carnival Corporation into a global leader in leisure travel, serving as President and CEO for several years." },
        { name: "Neelie Kroes", position: "Former Vice President", company: "European Commission", imgSrc: "https://wp.sfdcdigital.com/en-us/wp-content/uploads/sites/4/2024/01/card-headshot-kroes.png?resize=300,300", description: "Neelie Kroes has extensive experience in technology and public policy, having served as Vice President of the European Commission." },
        { name: "Sachin Mehra", position: "Financial Expert CFO", company: "Mastercard", imgSrc: "https://wp.sfdcdigital.com/en-us/wp-content/uploads/sites/4/2024/01/card-headshot-mehra.png?resize=300,300", description: "Sachin Mehra, CFO of Mastercard, brings a wealth of financial expertise and strategic leadership to the board." },
        { name: "Mason Morfit", position: "CEO & Chief Investment Officer", company: "ValueAct Capital", imgSrc: "https://wp.sfdcdigital.com/en-us/wp-content/uploads/sites/4/2024/01/card-headshot-morfit.png?resize=300,300", description: "Mason Morfit is a seasoned investment professional, serving as CEO and Chief Investment Officer at ValueAct Capital." },
        { name: "Oscar Munoz", position: "Former Executive Chair & CEO", company: "United Airlines Holdings, Inc.", imgSrc: "https://wp.sfdcdigital.com/en-us/wp-content/uploads/sites/4/2024/01/card-headshot-munoz.png?resize=300,300", description: "Oscar Munoz successfully led United Airlines through transformative changes as Executive Chair and CEO." },
        { name: "John V. Roos", position: "Former U.S. Ambassador to Japan, Co-Founder", company: "Geodesic Capital", imgSrc: "https://wp.sfdcdigital.com/en-us/wp-content/uploads/sites/4/2024/01/card-headshot-roos.png?resize=300,300", description: "John V. Roos served as U.S. Ambassador to Japan and co-founded Geodesic Capital, focusing on innovation and technology." },
        { name: "Robin L. Washington", position: "Lead Independent Director & Financial Expert, Former EVP & CFO", company: "Gilead Sciences, Inc.", imgSrc: "https://wp.sfdcdigital.com/en-us/wp-content/uploads/sites/4/2024/01/card-headshot-washington.png?resize=300,300", description: "Robin L. Washington has a strong background in finance, previously serving as EVP and CFO at Gilead Sciences." },
        { name: "Maynard Webb", position: "Founder", company: "Webb Investment Network", imgSrc: "https://wp.sfdcdigital.com/en-us/wp-content/uploads/sites/4/2024/01/card-headshot-webb.png?resize=300,300", description: "Maynard Webb is a prominent tech executive and entrepreneur, founder of the Webb Investment Network, and known for his work in mentoring and advising startups." }
      ];      
    
    // state to control whether to show the video or the thumbnail
    const [isVideoVisible1, setIsVideoVisible1] = useState(false);
    const [isVideoVisible2, setIsVideoVisible2] = useState(false);

    return (
        <>
            {/* Heading Container */}
            <Container className="w-full px-8 lg:px-24 py-12 bg-white rounded-lg">
                {/* Tag or Label at the Top */}
                <div className="flex justify-start items-center mb-4">
                    <span className="inline-block px-4 py-2 bg-yellow-400 text-sm font-semibold text-gray-800 rounded-full">
                    Company Information
                    </span>
                </div>

                {/* Heading Section */}
                <div className="text-left mb-4">
                    <h1 className="text-5xl font-bold text-[#0D2B70] leading-tight mb-4">
                    The History of Salesforce
                    </h1>
                </div>

                {/* Subheading Section */}
                <div className="text-left mb-4">
                    <p className="text-lg font-medium text-gray-600">
                    Here&apos;s the Salesforce History over the years, including newsworthy highlights and a timeline of milestones since 1999.
                    </p>
                </div>

                {/* Read Time Section */}
                <div className="text-left mb-12">
                    <p className="text-base text-gray-500">15 min read</p>
                </div>

                {/* Horizontal Divider */}
                <hr className="mt-4 border-t border-gray-300" />
            </Container>    

            {/* Container to Host the History Section */}
            <Container className="w-full px-8 lg:px-24 py-2 bg-white rounded-lg">

                {/* Split Container */}
                <div className="flex flex-wrap items-start justify-between">
                    {/* Left Section - 66% Width */}
                    <div className="w-full lg:w-2/3 pr-8 mb-8 lg:mb-0">
                        

                        {/* 1999 */}
                        <div className="text-left mb-4">
                            {/* Text Container */}
                            <p className="italic text-gray-600 text-lg leading-relaxed mb-8">
                                Editor&apos;s Note: This page was last updated in October 2024. For media inquiries about the history of Salesforce, please contact 
                                <a href="mailto:PR@salesforce.com" className="underline text-gray-800 hover:text-blue-600 transition-colors"> PR@salesforce.com</a>.
                            </p>
                            <h2 className="text-3xl font-bold text-[#0D2B70] mb-4">25 Years of Salesforce News Highlights</h2>
                            <p className="text-lg text-gray-700 mb-4">
                            The below timeline captures the history of Salesforce, including some key milestones along the way, illustrating our record of doing well while doing good.
                            </p>
                            <p className="text-lg text-gray-700 mb-8">
                            Salesforce is the <a href="#" className="text-blue-600 underline">global leader in CRM</a>, helping companies connect with customers in a whole new way. Founded in 1999, Salesforce enables companies of every size and industry to digitally transform around their customers by harnessing the power of automation, artificial intelligence, and real-time data to make every customer experience more personal, valuable and memorable.
                            </p>
                            {/* Additional Content for Left Section */}
                            <h3 className="text-3xl font-bold text-[#0D2B70] mb-4">1999</h3>
                            <ul className="list-disc pl-6 text-gray-700 mb-4">
                            <li className="mb-2">In February, the Salesforce journey begins with a clear vision to be “A World-Class Internet Company for Sales Force Automation.”</li>
                            <li className="mb-2">On March 8, Salesforce incorporates and Marc Benioff, Parker Harris, Frank Dominguez, and Dave Moellenhoff begin working on the first version of Salesforce&apos;s CRM.</li>
                            <li className="mb-2">Their base is a rented one-bedroom apartment at 1449 Montgomery Street, on San Francisco&apos;s Telegraph Hill.</li>
                            </ul>

                            {/* Embedded Video */}
                            <div className="w-full flex items-center justify-center mb-4">
                                {isVideoVisible1 ? (
                                    <iframe
                                    width="100%"
                                    height="360px"
                                    src="https://www.youtube.com/embed/Jg7C6UZoc5I"
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
                                            <button className="bg-white rounded-full p-4 shadow-lg hover:shadow-xl transition border-2 border-[#0070E0]" onClick={() => setIsVideoVisible1(true)}>
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

                            {/* Video Description */}
                            <div className='text-center'>
                                <p className="italic text-sm text-gray-600 mt-2">
                                    Parker Harris&apos; personal video of the apartment where salesforce.com started.
                                </p>   
                            </div>
                        </div>


                        {/* 2014 - Trailhead */}
                        <div className="text-left mb-4">
                            
                            {/* Content for 2014 - Trailhead */}
                            <h3 className="text-3xl font-bold text-[#0D2B70] mb-4">2014</h3>
                            <ul className="list-disc pl-6 text-gray-700 mb-4">
                            <li className="mb-2">Salesforce launches Trailhead, empowering anyone — regardless of education level — to develop the skills needed for top tech jobs.</li>
                            <li className="mb-2">The company now has 1.5 million registered developers.</li>
                            <li className="mb-2">Salesforce reaches the $5 billion in annual revenue milestone faster than any other enterprise software company.</li>
                            </ul>

                            {/* Embedded Picture SF Tower */}
                            <div className="w-full flex items-center justify-center mb-2">
                                <Image
                                    src={SFTower}
                                    alt="News Card 1"
                                    width={560}
                                    height={315}
                                    className="rounded-lg mb-4"
                                /> 
                            </div>

                            {/* Image Description */}
                            <div className='text-center'>
                                <p className="italic text-sm text-gray-600 mt-2">
                                    Salesforce Tower London
                                </p>   
                            </div>
                        </div>

                        {/* 2023 - EinsteinGPT */}
                        <div className="text-left mb-4">
                            
                            {/* Content for 2014 - Trailhead */}
                            <h3 className="text-3xl font-bold text-[#0D2B70] mb-4">2023</h3>
                            <ul className="list-disc pl-6 text-gray-700 mb-4">
                            <li className="mb-2">Einstein, launched at Dreamforce in 2016, generates more than 1 trillion AI-powered predictions per week for customers.</li>
                            <li className="mb-2">Salesforce introduces the next generation of Einstein AI, <a>Einstein GPT</a>, the world&apos;s first generative AI for CRM.</li>
                            <li className="mb-2">Salesforce reaches the $5 billion in annual revenue milestone faster than any other enterprise software company.</li>
                            </ul>

                            {/* Embedded Picture SF Tower */}
                            <div className="w-full flex items-center justify-center mb-4">
                                {isVideoVisible2 ? (
                                        <iframe
                                        width="100%"
                                        height="360px"
                                        src="https://www.youtube.com/embed/av_mzdAUIfQ"
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
                                                <button className="bg-white rounded-full p-4 shadow-lg hover:shadow-xl transition border-2 border-[#0070E0]" onClick={() => setIsVideoVisible2(true)}>
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

                            {/* Image Description */}
                            <div className='text-center'>
                                <p className="italic text-sm text-gray-600 mt-2">
                                    Einstein GPT
                                </p>   
                            </div>
                        </div>

                    </div>

                    {/* Right Section - 34% Width */} 
                    <div className="w-full lg:w-1/3 px-5">
                        {/* Right Section Content */}
                        <div className="relative bg-white shadow-lg rounded-2xl p-6 mb-8 w-full lg:max-w-md lg:p-8 h-[500px] border overflow-hidden">
                            {/* Header */}
                            <header className="mb-4">
                                <h2 className="text-xl font-bold text-[#0D2B70]">Just For You</h2>
                            </header>

                            {/* List of Articles */}
                            <div className="space-y-6">
                                {/* Article 1 */}
                                <article className="flex items-center">
                                    <a href="https://www.salesforce.com/news/stories/crm-benchmark/" className="w-28 h-20 flex-shrink-0 rounded-lg overflow-hidden mr-4">
                                        <Image
                                            src={Newscard1}
                                            alt="Salesforce Announces the World's First LLM Benchmark for CRM"
                                            width={300}
                                            height={200}
                                            className="w-full h-full object-cover"
                                        />
                                    </a>
                                    <div className="flex-1">
                                        <h3 className="text-lg font-semibold text-[#0D2B70] leading-tight">
                                            <a href="https://www.salesforce.com/news/stories/crm-benchmark/" target="_self">
                                                Salesforce Announces the World&apos;s First LLM Benchmark for CRM
                                            </a>
                                        </h3>
                                        <p className="text-sm text-gray-500 mt-1">5 min read</p>
                                    </div>
                                </article>

                                {/* Article 2 */}
                                <article className="flex items-center">
                                    <a href="https://www.salesforce.com/news/stories/video/connections-2024-recap/" className="w-28 h-20 flex-shrink-0 rounded-lg overflow-hidden mr-4">
                                        <Image
                                            src={Newscard2}
                                            alt="Connections 2024: New Marketing and Commerce Innovations Tap AI, Data for Personalized Experiences"
                                            width={300}
                                            height={200}
                                            className="w-full h-full object-cover"
                                        />
                                    </a>
                                    <div className="flex-1">
                                        <h3 className="text-lg font-semibold text-[#0D2B70] leading-tight">
                                            <a href="https://www.salesforce.com/news/stories/video/connections-2024-recap/" target="_self">
                                                Connections 2024: New Marketing and Commerce Innovations Tap AI, Data for Personalized Experiences
                                            </a>
                                        </h3>
                                        <p className="text-sm text-gray-500 mt-1">1 min read</p>
                                    </div>
                                </article>
                            </div>

                            {/* Bottom Graphics */}
                            <img
                                src="https://wp-bn.salesforce.com/news/wp-content/client-mu-plugins/salesforce-shared/dist/images/justforyou-bushes.png"
                                alt="Bushes Graphic"
                                className="absolute bottom-0 left-0 w-full h-auto"
                                style={{ height: "140px", objectFit: "cover" }} // Adjust height and object-fit
                            />
                            <img
                                src="https://wp-bn.salesforce.com/news/wp-content/client-mu-plugins/salesforce-shared/dist/images/justforyou-butterfly-alt.png"
                                alt="Butterfly Graphic"
                                className="absolute bottom-8 left-3 w-8 h-8 -translate-y-8" // Adjust positioning
                            />
                        </div>
                    </div>
                </div>
            </Container>

            {/* Salesforce Leadership Header */}
            <Container
                className="flex flex-col items-center justify-center text-center px-8 lg:px-24 py-16 lg:py-14"
                style={{
                    backgroundImage: 'linear-gradient(180deg, #FFFFFF 0%, rgb(234, 245, 254) 100%)',
                }}
                >
                {/* Header Title */}
                <h1 className="text-4xl lg:text-5xl font-bold text-[#0D2B70] mb-6">
                    Salesforce Leadership
                </h1>

                {/* Subtitle Text */}
                <p className="text-lg lg:text-xl text-gray-700 leading-relaxed max-w-3xl">
                    Salesforce prides itself not only on award-winning technology, but also on the talent of its people.
                    The company is thriving under the guidance and leadership of some of the brightest minds and most experienced executives in business.
                </p>
            </Container>
            
            {/* Executives Heading */}
            <Container className="py-4 px-8 lg:px-24 bg-white text-center mb-8">
                {/* Header Section */}
                <h2 className="text-3xl lg:text-4xl font-bold text-[#0D2B70] mb-10">
                    Executive Team
                </h2>

                {/* Grid Container for Executive Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-8 lg:px-24 py-8 bg-white">
                    {executives.map((executive, index) => (
                        <div key={index} className="max-w-xs mx-auto flex flex-col items-center text-center border p-4 rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 hover:scale-105">
                        {/* Image Section */}
                        <Image
                            src={executive.imgSrc} // Image URL
                            alt={`${executive.name}'s photo`}
                            width={180} // Adjust to your desired width
                            height={180} // Adjust to your desired height
                            className="rounded-lg object-cover mb-4" // Apply object-cover for proper aspect ratio
                        />

                        {/* Info Section */}
                        <h3 className="text-lg font-bold text-[#0D2B70] mb-2">{executive.name}</h3>
                        <p className="text-sm text-gray-600 mb-1">{executive.position}</p>
                        <p className="text-xs text-gray-400 mb-2">{executive.company}</p>

                        {/* Experience Description Styled as a Quote */}
                        <div className="relative my-4 min-h-[100px] flex flex-col justify-center">
                            <div className="absolute left-0 top-0 h-full w-[4px] bg-blue-500 rounded-lg"></div>
                            <p className="text-sm italic text-gray-700 mb-4 pl-6 pr-4 leading-relaxed">
                            {executive.description}
                            </p>
                        </div>
                        </div>
                    ))}
                </div>
            </Container>

            {/* Directors Heading */}
            <Container className="py-4 px-8 lg:px-24 bg-white text-center mb-2">
                {/* Header Section */}
                <h2 className="text-3xl lg:text-4xl font-bold text-[#0D2B70] mb-10">
                    Board of Directors
                </h2>

                {/* Grid Container for Director Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-8 lg:px-24 py-8 bg-white">
                    {directors.map((director, index) => (
                        <div key={index} className="max-w-xs mx-auto flex flex-col items-center text-center border p-4 rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 hover:scale-105">
                        {/* Image Section */}
                        <Image
                            src={director.imgSrc} // Image URL
                            alt={`${director.name}'s photo`}
                            width={180} // Adjust to your desired width
                            height={180} // Adjust to your desired height
                            className="rounded-lg object-cover mb-4" // Apply object-cover for proper aspect ratio
                        />

                        {/* Info Section */}
                        <h3 className="text-lg font-bold text-[#0D2B70] mb-2">{director.name}</h3>
                        <p className="text-sm text-gray-600 mb-1">{director.position}</p>
                        <p className="text-xs text-gray-400 mb-2">{director.company}</p>

                        {/* Experience Description Styled as a Quote */}
                        <div className="relative my-4 min-h-[100px] flex flex-col justify-center">
                            <div className="absolute left-0 top-0 h-full w-[4px] bg-orange-500 rounded-lg"></div>
                            <p className="text-sm italic text-gray-700 mb-4 pl-6 pr-4 leading-relaxed">
                            {director.description}
                            </p>
                        </div>
                        </div>
                    ))}
                </div>
            </Container>

            <Container className="flex flex-col items-center justify-center py-8 px-8 lg:px-24 bg-white mb-8">
                {/* Small Header */}
                <p className="text-sm text-[#0D2B70] mb-4">Our Core Values</p>

                {/* Main Heading */}
                <h1 className="text-4xl lg:text-5xl font-bold leading-snug text-[#0D2B70] text-center mb-6">
                    What brings us together guides us forward.
                </h1>

                {/* Description */}
                <p className="text-lg lg:text-xl text-center leading-relaxed text-gray-700 max-w-3xl">
                    Our core values guide everything we do as a company and as people. We strive to bring out the best in one another, deliver success to our customers, and inspire the entire industry through our actions.
                </p>
            </Container>
            
            {/* trust */}
            <Container className="flex flex-col lg:flex-row items-center justify-center py-8 px-8 lg:px-24 bg-white mb-8">
                {/* Image Section */}
                <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
                    <Image
                    src="https://wp.sfdcdigital.com/en-us/wp-content/uploads/sites/4/2024/01/our-story-1-up-values-trust.jpg?resize=1536,1024" // Replace with the actual image URL
                    alt="Trust Illustration"
                    width={500}
                    height={300}
                    className="rounded-lg"
                    />
                </div>

                {/* Text Section */}
                <div className="w-full lg:w-1/2 text-left lg:text-left px-4">
                    {/* Small Header */}
                    <p className="text-sm text-[#0D2B70] mb-4">Trust</p>

                    {/* Main Heading */}
                    <h2 className="text-4xl lg:text-5xl font-bold leading-snug text-[#0D2B70] mb-6">
                    We act as trusted advisors.
                    </h2>

                    {/* Description */}
                    <p className="text-lg lg:text-xl leading-relaxed text-gray-700 mb-6">
                    We earn the trust of our customers, employees, and extended family through transparency, security, compliance, privacy, and performance. And we deliver the industry&apos;s most trusted infrastructure.
                    </p>

                    {/* Link with Icon */}
                    <a href="#" className="text-[#0D2B70] hover:underline flex items-center space-x-2">
                        <span>Get real-time system updates</span>
                        <FaExternalLinkAlt />
                    </a> 
                </div>
            </Container>
                
            {/* customer success */}
            <Container className="flex flex-col lg:flex-row items-center justify-center py-8 px-8 lg:px-24 bg-white mb-8">
                {/* Image Section */}
                <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
                    <Image
                    src="https://wp.sfdcdigital.com/en-us/wp-content/uploads/sites/4/2024/01/our-story-1-up-values-customer-success.jpg?resize=1536,1024" // Replace with the actual image URL
                    alt="Trust Illustration"
                    width={500}
                    height={300}
                    className="rounded-lg"
                    />
                </div>

                {/* Text Section */}
                <div className="w-full lg:w-1/2 text-left lg:text-left px-4">
                    {/* Small Header */}
                    <p className="text-sm text-[#0D2B70] mb-4">Customer Success</p>

                    {/* Main Heading */}
                    <h2 className="text-4xl lg:text-5xl font-bold leading-snug text-[#0D2B70] mb-6">
                        When our customers succeed, we succeed.
                    </h2>

                    {/* Description */}
                    <p className="text-lg lg:text-xl leading-relaxed text-gray-700 mb-6">
                    So we champion them to achieve extraordinary things. We innovate and expand our business offerings to provide all our stakeholders with new avenues to achieve ever greater success.
                    </p>

                    {/* Link with Icon */}
                    <a href="#" className="text-[#0D2B70] hover:underline flex items-center space-x-2">
                        Learn how we empower customers
                    </a> 
                </div>
            </Container>

            {/* Innovation */}
            <Container className="flex flex-col lg:flex-row items-center justify-center py-8 px-8 lg:px-24 bg-white mb-8">
                {/* Image Section */}
                <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
                    <Image
                    src="https://wp.sfdcdigital.com/en-us/wp-content/uploads/sites/4/2024/01/our-story-1-up-values-innovation.jpg?resize=1536,1024" // Replace with the actual image URL
                    alt="Trust Illustration"
                    width={500}
                    height={300}
                    className="rounded-lg"
                    />
                </div>

                {/* Text Section */}
                <div className="w-full lg:w-1/2 text-left lg:text-left px-4">
                    {/* Small Header */}
                    <p className="text-sm text-[#0D2B70] mb-4">Innovation</p>

                    {/* Main Heading */}
                    <h2 className="text-4xl lg:text-5xl font-bold leading-snug text-[#0D2B70] mb-6">
                        We innovate together.
                    </h2>

                    {/* Description */}
                    <p className="text-lg lg:text-xl leading-relaxed text-gray-700 mb-6">
                        Our customers&apos; input helps us to develop products that best serve their business needs. Providing continual technology releases and new initiatives gives our customers a competitive advantage.
                    </p>

                    {/* Link with Icon */}
                    <a href="#" className="text-[#0D2B70] hover:underline flex items-center space-x-2">
                        <span>See our latest product features and updates</span>
                        <FaExternalLinkAlt />
                    </a>  
                </div>
            </Container>

            {/* Equality */}
            <Container className="flex flex-col lg:flex-row items-center justify-center py-8 px-8 lg:px-24 bg-white mb-8">
                {/* Image Section */}
                <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
                    <Image
                    src="https://wp.sfdcdigital.com/en-us/wp-content/uploads/sites/4/2024/01/our-story-1-up-values-equality.jpg?resize=1536,1024" // Replace with the actual image URL
                    alt="Trust Illustration"
                    width={500}
                    height={300}
                    className="rounded-lg"
                    />
                </div>

                {/* Text Section */}
                <div className="w-full lg:w-1/2 text-left lg:text-left px-4">
                    {/* Small Header */}
                    <p className="text-sm text-[#0D2B70] mb-4">Equality</p>

                    {/* Main Heading */}
                    <h2 className="text-4xl lg:text-5xl font-bold leading-snug text-[#0D2B70] mb-6">
                        Everyone deserves equal opportunities.
                    </h2>

                    {/* Description */}
                    <p className="text-lg lg:text-xl leading-relaxed text-gray-700 mb-6">
                        We believe everyone should be seen, heard, valued and empowered to succeed. Hearing diverse perspectives fuels innovation, deepens connections between people and makes us a better company.
                    </p>

                    {/* Link with Icon */}
                    <a href="#" className="text-[#0D2B70] hover:underline flex items-center space-x-2">
                        <span>Learn about our equality initiatives</span>
                        <FaExternalLinkAlt />
                    </a>  
                </div>
            </Container>
            
            {/* values in action */}
            <Container className="flex flex-col lg:flex-row items-center justify-between py-16 px-8 lg:px-24 bg-white mb-4">
                {/* Text Section */}
                <div className="w-full lg:w-1/2 mb-8 lg:mb-0 text-left">
                    {/* Small Header */}
                    <p className="text-sm text-[#0D2B70] mb-4">Values in Action</p>

                    {/* Main Heading */}
                    <h2 className="text-4xl lg:text-5xl font-bold leading-snug text-[#0D2B70] mb-6">
                        We act as trusted advisors.
                    </h2>

                    {/* Description */}
                    <p className="text-lg lg:text-xl leading-relaxed text-gray-700 mb-4">
                        We are passionate proponents of stakeholder capitalism, committed to doing well by all our stakeholders - our customers, employees, partners, communities, the planet and society as a whole.
                    </p>

                    <p className="text-lg lg:text-xl leading-relaxed text-gray-700 mb-4">
                        And we lead by example, spearheading initiatives in philanthropy, racial equality and justice, climate action and advocacy, and the ethical and humane use of technology.
                    </p>

                    <p className="font-bold text-lg lg:text-xl leading-relaxed text-gray-700 mb-4">
                        A win-win-win approach.
                    </p>

                    <p className="text-lg lg:text-xl leading-relaxed text-gray-700 mb-6">
                        Our founders launched the 1-1-1 model, which commits 1% of our equity, our technology and our people&apos;s time to improving education, equality and the environment for everyone. Today, more than 18,000 companies worldwide have joined us in our Pledge 1% movement.
                    </p>

                    {/* Link with Icon */}
                    <a href="#" className="text-white bg-blue-600 hover:bg-blue-700 font-semibold py-2 px-4 rounded inline-flex items-center space-x-2">
                    <span>See our values in action</span>
                    <FaExternalLinkAlt />
                    </a>
                </div>

                {/* Image Section */}
                <div className="w-full lg:w-1/2 flex justify-end space-x-4">
                    {/* Image 1 */}
                    <Image
                    src="https://wp.sfdcdigital.com/en-us/wp-content/uploads/sites/4/2024/01/our-story-1-up-values-in-action.jpg?resize=1024,1024"
                    alt="Values Image 1"
                    width={500}
                    height={500}
                    />
                </div>
            </Container>


        </>
    )
}

export default Page