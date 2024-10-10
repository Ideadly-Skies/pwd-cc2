"use client"

import React from 'react'
import Image from "next/image";

import SFTower from '../../../public/img/about-us/London_Salesforce_Tower_Ohana_Floor.jpg';
import Newscard1 from '../../../public/img/about-us/Newscard1.png';
import Newscard2 from '../../../public/img/about-us/Newscard2.jpg';
import { Container } from '../../components/container/page'
import { FaExternalLinkAlt } from "react-icons/fa"; // Importing the external link icon
import { useState } from "react";
import Link from 'next/link';

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
                                <Link href="mailto:PR@salesforce.com" className="underline text-gray-800 hover:text-blue-600 transition-colors"> PR@salesforce.com</Link>.
                            </p>
                            <h2 className="text-3xl font-bold text-[#0D2B70] mb-4">25 Years of Salesforce News Highlights</h2>
                            <p className="text-lg text-gray-700 mb-4">
                            The below timeline captures the history of Salesforce, including some key milestones along the way, illustrating our record of doing well while doing good.
                            </p>
                            <p className="text-lg text-gray-700 mb-8">
                            Salesforce is the <Link href="#" className="text-blue-600 underline">global leader in CRM</Link>, helping companies connect with customers in a whole new way. Founded in 1999, Salesforce enables companies of every size and industry to digitally transform around their customers by harnessing the power of automation, artificial intelligence, and real-time data to make every customer experience more personal, valuable and memorable.
                            </p>
                            {/* Additional Content for Left Section */}
                            <h3 className="text-3xl font-bold text-[#0D2B70] mb-4">1999</h3>
                            <ul className="list-disc pl-6 text-gray-700 mb-4">
                            <li className="mb-2">In February, the Salesforce journey begins with a clear vision to be &quot;A World-Class Internet Company for Sales Force Automation.&quot;</li>
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

                        {/* 2000 Section */}
                        <div className="text-left mb-4">
                            {/* Header for the Year */}
                            <h3 className="text-3xl font-bold text-[#0D2B70] mb-4">2000</h3>
                            
                            {/* List of Events */}
                            <ul className="list-disc pl-6 text-gray-700 mb-4">
                                <li className="mb-2">Like many other tech companies, Salesforce endured challenges brought on by the dot-com bubble bursting, and 20% of the company&apos;s workforce was laid off.</li>
                                <li className="mb-2">On February 7, salesforce.com officially launches at an event themed around &quot;The End of Software&quot; at San Francisco&apos;s Regency Theater with 1,500 attendees and a concert with The B-52s.</li>
                                <li className="mb-2">In March, Salesforce gets a boost from its first piece of major press coverage, in *The Wall Street Journal*, when it hires actors to stage a mock protest outside a Siebel Systems conference. The &quot;protestors&quot; carry signs with anti-software messages to drive home Salesforce&apos;s &quot;The End of Software&quot; marketing tagline.</li>
                                <li className="mb-2">Salesforce.org launches the <Link href="https://www.salesforce.org/" className="text-blue-600 underline">1-1-1 model</Link>, leveraging its technology, people, and resources to improve communities around the world.</li>
                                <li className="mb-2">In November, the growing business moves from the Rincon Center to a larger base at One Market Street.</li>
                                <li className="mb-2">Revenue hits $5.4 million for fiscal year ending January 31, 2001.</li>
                            </ul>

                            {/* Embedded Picture */}
                            <div className="w-full flex items-center justify-center mb-2">
                                <Image
                                src="https://www.salesforce.com/news/wp-content/uploads/sites/3/2020/09/2000-Salesforce-Spear-office.jpg"
                                alt="Salesforce Office in 2000"
                                width={560}
                                height={315}
                                className="rounded-lg mb-4"
                                />
                            </div>

                            {/* Image Description */}
                            <div className='text-center'>
                                <p className="italic text-sm text-gray-600 mt-2">
                                An early Salesforce office circa 2000
                                </p>
                            </div>
                        </div>
                        
                        {/* 2001 & 2002 Section */}
                        <div className="text-left mb-8">
                            {/* Header for the Year */}
                            <h3 className="text-3xl font-bold text-[#0D2B70] mb-4">2001</h3>
                            
                            {/* List of Events for 2001 */}
                            <ul className="list-disc pl-6 text-gray-700 mb-4">
                                <li className="mb-2">In April, Salesforce announces its expansion into the worldwide marketplace with headquarters in Dublin and Tokyo.</li>
                                <li className="mb-2">Salesforce surpasses 3,000 customers, making it the fastest-growing CRM company.</li>
                                <li className="mb-2">In November, Benioff is named Chief Executive Officer and Chairman.</li>
                                <li className="mb-2">Salesforce delivers $22.4 million in revenue for the fiscal year, ending January 31, 2002.</li>
                            </ul>
                            </div>

                            {/* 2002 Section */}
                            <div className="text-left mb-8">
                            {/* Header for the Year */}
                            <h3 className="text-3xl font-bold text-[#0D2B70] mb-4">2002</h3>
                            
                            {/* List of Events for 2002 */}
                            <ul className="list-disc pl-6 text-gray-700 mb-4">
                                <li className="mb-2">By end of the year, the company has 5,740 customers, 70,000 users in 107 countries accessing the service in multiple currencies and eight languages.</li>
                                <li className="mb-2">Salesforce delivers $51 million in revenue for the fiscal year, ending January 31, 2003.</li>
                                <li className="mb-2">Marc Benioff makes a prediction about the future of Salesforce, CRM, and business: &quot;There were the leaders, but Oracle displaced them. The same thing is going to happen again. It&apos;s the beginning of a brand new technology and business world.&quot;</li>
                            </ul>
                        </div>
                        
                        {/* 2003 Section */}
                        <div className="text-left mb-8">
                            {/* Header for the Year */}
                            <h3 className="text-3xl font-bold text-[#0D2B70] mb-4">2003</h3>
                            
                            {/* List of Events for 2003 */}
                            <ul className="list-disc pl-6 text-gray-700 mb-4">
                                <li className="mb-2">
                                The first <Link href="https://www.salesforce.com/dreamforce/" className="text-blue-600 underline">Dreamforce</Link> event is held at the Westin St. Francis hotel in downtown San Francisco. Just over 1,000 registered attendees take part in the event, which has 52 presentations.
                                </li>
                                <li className="mb-2">sForce 2.0 - the industry&apos;s first on-demand application service - is launched at the event.</li>
                                <li className="mb-2">The company&apos;s employees number more than 400.</li>
                                <li className="mb-2">It establishes a global presence, opening offices in Australia, France, Germany, Ireland, Japan, Spain, and the U.K.</li>
                                <li className="mb-2">Salesforce reaches almost $100 million in revenue by year end, files to go public in December.</li>
                            </ul>

                            {/* Embedded Image */}
                            <div className="w-full flex items-center justify-center mb-4">
                                <Image
                                src="https://www.salesforce.com/news/wp-content/uploads/sites/3/2020/09/historic_dreamforce_badge.jpg" // Replace with your actual image URL
                                alt="Dreamforce badges from the inaugural Salesforce conference in 2003"
                                width={400}
                                height={400}
                                className="rounded-lg mb-4"
                                />
                        </div>

                            {/* Image Description */}
                            <div className='text-center'>
                                <p className="italic text-sm text-gray-600 mt-2">
                                <Link href="https://www.salesforce.com/dreamforce/" className="text-blue-600 underline">Dreamforce</Link> badges from the inaugural Salesforce conference in 2003
                                </p>
                            </div>
                        </div>

                        {/* 2004 Section */}
                        <div className="text-left mb-8">
                            {/* Header for 2004 */}
                            <h3 className="text-3xl font-bold text-[#0D2B70] mb-4">2004</h3>
                            
                            {/* List of Events for 2004 */}
                            <ul className="list-disc pl-6 text-gray-700 mb-4">
                                <li className="mb-2">On June 23, Salesforce successfully completes its initial public offering on the New York Stock Exchange, raising $110 million at $11 per share.</li>
                                <li className="mb-2">Salesforce earns $176 million in revenue over the fiscal year ending January 31, 2005.</li>
                                <li className="mb-2">The company has 767 employees.</li>
                                <li className="mb-2">The customer base has grown to 13,900.</li>
                                <li className="mb-2">Some 8,000 developers and 150 independent software vendors are using Salesforce technologies to create apps.</li>
                                <li className="mb-2">Salesforce has 12 offices around the world.</li>
                            </ul>
                        </div>

                        {/* 2005 Section */}
                        <div className="text-left mb-8">
                            {/* Header for 2005 */}
                            <h3 className="text-3xl font-bold text-[#0D2B70] mb-4">2005</h3>
                            
                            {/* List of Events for 2005 */}
                            <ul className="list-disc pl-6 text-gray-700 mb-4">
                                <li className="mb-2">In September, Salesforce introduces its <Link href="https://www.salesforce.com/products/platform/overview/" className="text-blue-600 underline">AppExchange</Link> service, offering third-party developers a place to work on their own applications and open them up to Salesforce customers.</li>
                                <li className="mb-2">By the end of the year, the company&apos;s customer base stands at 20,500 worldwide, with nearly 400,000 unique users.</li>
                                <li className="mb-2">The company surpasses 1,300 employees by end of fiscal year.</li>
                                <li className="mb-2">It has earned $309.98 million in revenue for fiscal year ending January 31, 2006.</li>
                            </ul>
                        </div>
                        
                        {/* 2006 Section */}
                        <div className="text-left mb-8">
                            {/* Header for 2006 */}
                            <h3 className="text-3xl font-bold text-[#0D2B70] mb-4">2006</h3>
                            
                            {/* List of Events for 2006 */}
                            <ul className="list-disc pl-6 text-gray-700 mb-4">
                                <li className="mb-2">Salesforce&apos;s mobile journey starts with the acquisition of wireless technology startup Sendia, and the original Salesforce mobile app, AppExchange Mobile.</li>
                                <li className="mb-2">The AppExchange ecosystem grows into a vibrant marketplace with 575 apps from 250 independent software vendors.</li>
                                <li className="mb-2">In a defining moment, Benioff shares his view that business is the greatest platform for change, publishing <em>The Business of Changing the World</em> with essays by 20 other thought leaders.</li>
                                <li className="mb-2">The Power of Us partner program launches, engaging Salesforce&apos;s partners with the 1-1-1 philanthropy model.</li>
                                <li className="mb-2">Salesforce has 29,800 customers worldwide.</li>
                                <li className="mb-2">Revenue tops $497 million for the fiscal year ending January 31, 2007.</li>
                            </ul>

                            {/* Embedded Picture for AppExchange */}
                            <div className="w-full flex items-center justify-center mb-2">
                                <Image
                                src="https://www.salesforce.com/news/wp-content/uploads/sites/3/2020/09/salesforce_history_appexchange.png"
                                alt="The Salesforce AppExchange circa 2006"
                                width={400}
                                height={400}
                                className="rounded-lg mb-4"
                                /> 
                            </div>

                            {/* Image Description */}
                            <div className='text-center'>
                                <p className="italic text-sm text-gray-600 mt-2">
                                The Salesforce <Link href="#" className="text-blue-600 underline">AppExchange</Link> circa 2006
                                </p>   
                            </div>
                        </div>

                        {/* 2007 Section */}
                        <div className="text-left mb-8">
                            {/* Header for 2007 */}
                            <h3 className="text-3xl font-bold text-[#0D2B70] mb-4">2007</h3>
                            
                            {/* List of Events for 2007 */}
                            <ul className="list-disc pl-6 text-gray-700 mb-4">
                                <li className="mb-2">
                                <span className="font-semibold">IdeaExchange</span> (now 
                                <Link href="#" className="text-blue-600 underline"> Trailblazer Community</Link>) launches, inviting customers to contribute new feature ideas for future releases.
                                </li>
                                <li className="mb-2">At Dreamforce, plans for the Force.com technology platform are announced, which will allow developers to build applications on the Salesforce platform and create any user interface on demand.</li>
                                <li className="mb-2">Salesforce reports revenue of $748.7 million for the fiscal year ending January 31, 2008.</li>
                                <li className="mb-2">Users exceed 1.1 million, from 41,000 customers across the globe.</li>
                                <li className="mb-2">The AppExchange community has 450 independent software vendor partners.</li>
                                <li className="mb-2">Salesforce employees log 70,000 volunteer hours.</li>
                            </ul>
                        </div>

                        {/* 2008 Section */}
                        <div className="text-left mb-8">
                            {/* Header for 2008 */}
                            <h3 className="text-3xl font-bold text-[#0D2B70] mb-4">2008</h3>
                            
                            {/* List of Events for 2008 */}
                            <ul className="list-disc pl-6 text-gray-700 mb-4">
                                <li className="mb-2">Salesforce has revenue of just over $1 billion for the fiscal year ending January 31, 2009, making it the first cloud computing company to breach the billion-dollar mark in annual revenue.</li>
                                <li className="mb-2">Forbes names Salesforce among the fastest-growing technology companies in the world.</li>
                                <li className="mb-2">Number of customers grows to 55,400.</li>
                                <li className="mb-2">Dreamforce in San Francisco reaches a new milestone, with 10,000 registered attendees.</li>
                                <li className="mb-2">Force.com is released, making it easier for customers to build and install apps on Salesforce&apos;s architecture.</li>
                            </ul>
                        </div>

                        {/* 2009 Section */}
                        <div className="text-left mb-4">
                            <h3 className="text-3xl font-bold text-[#0D2B70] mb-4">2009</h3>
                            <ul className="list-disc pl-6 text-gray-700 mb-4">
                                <li className="mb-2">
                                Salesforce <Link href="https://www.salesforce.com/service-cloud" className="text-blue-600 underline">launches Service Cloud</Link>, bringing customer service and support automation features to the market.
                                </li>
                                    <li className="mb-2">Revenues rise by more than 20% to $1.3 billion for the fiscal year, ending January 31, 2010.</li>
                                    <li className="mb-2">Salesforce&apos;s global customer base grows to 72,000 customers.</li>
                                    <li className="mb-2">The first application built on Force.com for the iPhone launches, and it&apos;s the first enterprise partner on Apple&apos;s App Store.</li>
                                    <li className="mb-2">Salesforce.org gives $14 million in grants to support nonprofits.</li>
                                    <li className="mb-2">
                                    Chairman and CEO Marc Benioff publishes <Link href="https://www.salesforce.com/news/behind-the-cloud/" className="text-blue-600 underline">Behind the Cloud</Link>, a memoir of Salesforce&apos;s early days and growth to a company with $1 billion in annual revenues.
                                </li>
                            </ul>

                            {/* Image */}
                            <div className="w-full flex items-center justify-center mb-2">
                                <Image
                                src="" // image is missing
                                alt="Salesforce SaaSy Mascot"
                                width={300}
                                height={150}
                                className="rounded-lg mb-4"
                                />
                            </div>

                            {/* Image Description */}
                            <div className="text-center">
                                <p className="italic text-sm text-gray-600 mt-2">Original Salesforce mascot called &quot;SaaSy&quot;</p>
                            </div>
                        </div>

                        {/* 2010 Section */}
                        <div className="text-left mb-4">
                            <h3 className="text-3xl font-bold text-[#0D2B70] mb-4">2010</h3>
                            <ul className="list-disc pl-6 text-gray-700 mb-4">
                                <li className="mb-2">
                                Salesforce agrees to acquire <Link href="https://www.salesforce.com/heroku" className="text-blue-600 underline">Heroku</Link>, an application platform-as-a-service, to support the next generation of app developers.
                                </li>
                                <li className="mb-2">Company finishes the fiscal year with more than 92,000 customers and 5,000 employees.</li>
                                <li className="mb-2">Annual revenue rises to almost $1.66 billion for the fiscal year, ending January 31, 2011.</li>
                                <li className="mb-2">
                                Over the last ten years, Salesforce gave $23 million in grants, employees volunteered 255,000 hours, and 11,000 nonprofits had access to Salesforce products for free.
                                </li>
                                <li className="mb-2">Fortune magazine ranks Salesforce fourth on its list of the world&apos;s fastest-growing companies.</li>
                                <li className="mb-2">
                                Salesforce is also named by the Ethisphere Institute as <Link href="https://www.salesforce.com/news/ethisphere/" className="text-blue-600 underline">one of the world&apos;s most ethical companies</Link> for the fourth consecutive year.
                                </li>
                            </ul>
                        </div>
                        
                        {/* related section */}
                        <div className="bg-white py-12">
                            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                                {/* Related Title */}
                                <h2 className="text-3xl font-bold text-[#0D2B70] mb-8 text-center">Related</h2>
                                
                                {/* Related Articles Grid */}
                                <div className="grid gap-8 grid-cols-1 lg:grid-cols-2">
                                {/* Related Card 1 */}
                                <div className="bg-white rounded-xl overflow-hidden shadow-lg flex items-center">
                                    {/* Image Section */}
                                    <div className="flex-shrink-0">
                                    <Image
                                        src="https://www.salesforce.com/news/wp-content/uploads/sites/3/2024/09/Salesforce_plus_logo.png?w=1024"
                                        alt="Salesforce Signs Definitive Agreement to Acquire Zoomin"
                                        width={180}
                                        height={120}
                                        className="object-cover"
                                    />
                                    </div>
                                    
                                    {/* Text Section */}
                                    <div className="p-6">
                                    <Link href="https://www.salesforce.com/news/stories/salesforce-signs-definitive-agreement-to-acquire-zoomin/">
                                        <h3 className="text-xl font-semibold text-[#0D2B70] hover:underline">Salesforce Signs Definitive Agreement to Acquire Zoomin</h3>
                                    </Link>
                                    <p className="text-gray-500 mt-2">3 min read</p>
                                    </div>
                                </div>

                                {/* Related Card 2 */}
                                <div className="bg-white rounded-xl overflow-hidden shadow-lg flex items-center">
                                    {/* Image Section */}
                                    <div className="flex-shrink-0">
                                    <Image
                                        src="https://www.salesforce.com/news/wp-content/uploads/sites/3/2024/06/AI-Center-Opening_UK.png?w=1024"
                                        alt="Salesforce Opens First AI Center"
                                        width={180}
                                        height={120}
                                        className="object-cover"
                                    />
                                    </div>
                                    
                                    {/* Text Section */}
                                    <div className="p-6">
                                    <Link href="https://www.salesforce.com/news/stories/ai-center-london-opening/">
                                        <h3 className="text-xl font-semibold text-[#0D2B70] hover:underline">Salesforce Opens First AI Center with AI Training Event Backed by London City Hall</h3>
                                    </Link>
                                    <p className="text-gray-500 mt-2">3 min read</p>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* 2011 year section */}
                        <div className="text-left mb-8">
                            {/* Year Header */}
                            <h3 className="text-3xl font-bold text-[#0D2B70] mb-4">2011</h3>
                            
                            {/* Year Highlights List */}
                            <ul className="list-disc pl-6 text-gray-700 mb-6">
                                <li className="mb-2">
                                Salesforce launches Chatter as a social collaboration service for the enterprise; more than 80,000 customers adopt Chatter in the first year.
                                </li>
                                <li className="mb-2">
                                Salesforce extends its social enterprise capabilities to include marketing with the acquisition of social media monitoring company, 
                                <Link href="#" className="text-blue-600 underline hover:text-blue-800"> Radian6.</Link>
                                </li>
                                <li className="mb-2">
                                Annual revenue rises 37% over the fiscal year to almost $2.27 billion, for the fiscal year ending January 31, 2012.
                                </li>
                                <li className="mb-2">
                                By the end of the fiscal year, Salesforce employs 7,785 people around the globe.
                                </li>
                                <li className="mb-2">
                                <em>Forbes</em> names Salesforce one of &quot;The 50 Companies of Tomorrow,&quot;&quot; taking notice of the innovation the company has achieved.
                                </li>
                            </ul>
                            
                            {/* Embedded Image */}
                            <div className="w-full flex items-center justify-center mb-4">
                                <Image
                                src="https://www.salesforce.com/news/wp-content/uploads/sites/3/2020/09/history_of_salesforce_Forbes.jpg"
                                alt="Forbes Innovators Cover"
                                width={400}
                                height={550}
                                className="rounded-lg shadow-lg mb-4"
                                />
                            </div>

                            {/* Image Caption */}
                            <div className="text-center">
                                <p className="italic text-sm text-gray-600 mt-2">
                                <Link href="#" className="text-blue-600 underline hover:text-blue-800">Marc Benioff</Link> takes the number one spot on Fortune&apos;s &quot;The 50 Companies of Tomorrow&quot; list
                                </p>
                            </div>
                        </div>
                        
                        {/* 2012 Section */}
                        <div className="text-left mb-8">
                            {/* Year Header */}
                            <h3 className="text-3xl font-bold text-[#0D2B70] mb-4">2012</h3>

                            {/* Year Highlights List */}
                            <ul className="list-disc pl-6 text-gray-700 mb-6">
                            <li className="mb-2">
                                Salesforce has more than $3 billion in annual revenue for the fiscal year ending January 31, 2013.
                            </li>
                            <li className="mb-2">The company has 9,800 employees in 22 offices around the world.</li>
                            <li className="mb-2">
                                The company also crosses a threshold with more than 100,000 customers.
                            </li>
                            <li className="mb-2">
                                Salesforce leases space in the yet-to-be-built tower at 350 Mission Street as the plan for an urban campus takes shape.
                            </li>
                            <li className="mb-2">
                                Dreamforce 2012 notches up 90,000 registered attendees. Salesforce Marketing Cloud is unveiled during the keynote address.
                            </li>
                            <li className="mb-2">
                                <em>Forbes</em> selects Salesforce as the world&apos;s most innovative company for the second consecutive year.
                            </li>
                            <li className="mb-2">Gartner ranks Salesforce #1 in CRM.</li>
                            </ul>
                        </div>

                        {/* 2013 Section */}
                        <div className="text-left mb-8">
                            {/* Year Header */}
                            <h3 className="text-3xl font-bold text-[#0D2B70] mb-4">2013</h3>

                            {/* Year Highlights List */}
                            <ul className="list-disc pl-6 text-gray-700 mb-6">
                            <li className="mb-2">
                                Salesforce completes its largest acquisition to date with ExactTarget, allowing it to supercharge the power of Marketing Cloud.
                            </li>
                            <li className="mb-2">
                                The Salesforce1 Platform launches, empowering customers to run their business from their phone.
                            </li>
                            <li className="mb-2">
                                Dreamforce has more than 143,000 registered attendees. A benefit concert during the event features the bands Blondie and Green Day.
                            </li>
                            <li className="mb-2">
                                The AppExchange hosts more than 2,000 apps, and records over 2 million installs.
                            </li>
                            <li className="mb-2">
                                Annual revenue over the fiscal year exceeds $4 billion for the fiscal year ending January 31, 2014.
                            </li>
                            <li className="mb-2">
                                Salesforce has more than 13,300 employees worldwide.
                            </li>
                            </ul>
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

                        {/* 2015 Section */}
                        <div className="text-left mb-8">
                            {/* Year Header */}
                            <h3 className="text-3xl font-bold text-[#0D2B70] mb-4">2015</h3>

                            {/* Year Highlights List */}
                            <ul className="list-disc pl-6 text-gray-700 mb-6">
                            <li className="mb-2">Salesforce enters the Fortune 500.</li>
                            <li className="mb-2">
                                <em>Fortune</em> also recognizes Salesforce as one of the Top 10 Best Companies to Work For and one of the World&apos;s Most Admired Software Companies.
                            </li>
                            <li className="mb-2">
                                At Dreamforce, Salesforce announces new Lightning Experience, a completely new CRM experience.
                            </li>
                            <li className="mb-2">
                                Salesforce unveils IoT Cloud, connecting billions of events from devices, sensors, apps and more from the Internet of Things to Salesforce.
                            </li>
                            <li className="mb-2">
                                When San Francisco runs short of hotel rooms for Dreamforce attendees, Salesforce docks the &apos;Dreamboat&apos; cruise ship to provide 1,000 extra accommodations.
                            </li>
                            <li className="mb-2">
                                The company generates more than $6.66 billion in revenue for the fiscal year ending January 31, 2016.
                            </li>
                            <li className="mb-2">
                                Salesforce has more than 150,000 customers worldwide and more than 20,000 employees.
                            </li>
                            </ul>
                        </div>

                        {/* 2016 Section */}
                        <div className="text-left mb-8">
                            {/* Year Header */}
                            <h3 className="text-3xl font-bold text-[#0D2B70] mb-4">2016</h3>

                            {/* Year Highlights List */}
                            <ul className="list-disc pl-6 text-gray-700 mb-6">
                            <li className="mb-2">
                                Salesforce conducts its first equal pay assessment, resulting in $3 million in salary adjustments.
                            </li>
                            <li className="mb-2">Salesforce Tower opens in New York.</li>
                            <li className="mb-2">
                                The company acquires ecommerce platform Demandware to extend its Customer Success Platform to the retail industry, and introduces Commerce Cloud.
                            </li>
                            <li className="mb-2">
                                Year-over-year revenue increases 26% to more than $8.4 billion for the fiscal year ending January 31, 2017.
                            </li>
                            <li className="mb-2">
                                Salesforce has more than 25,000 employees across 25 countries.
                            </li>
                            <li className="mb-2">
                                <em>Forbes</em> recognizes CEO Marc Benioff as &quot;the decade&apos;s top innovator.&quot;
                            </li>
                            <li className="mb-2">
                                The company acquires productivity software company Quip.
                            </li>
                            <li className="mb-2">
                                Salesforce is named the #1 &quot;Workplace for Giving Back&quot; by <em>Fortune</em>.
                            </li>
                            <li className="mb-2">
                                Salesforce.org has given $160 million in grants, logged 2 million employee volunteer hours, and more than 31,000 nonprofits and NGOs use the software for free or at a discount.
                            </li>
                            <li className="mb-2">
                                Salesforce launches Einstein, the first comprehensive artificial intelligence (AI) technology for CRM, making AI accessible to every company and business user.
                            </li>
                            </ul>
                        </div>
                        
                        {/* 2017 section */}
                        <div className="text-left mb-8">
                            {/* 2017 Header */}
                            <h3 className="text-3xl font-bold text-[#0D2B70] mb-4">2017</h3>

                            {/* 2017 Highlights List */}
                            <ul className="list-disc pl-6 text-gray-700 mb-6">
                                <li className="mb-2">
                                The company achieves net-zero greenhouse gas emissions and begins delivering a carbon-neutral cloud.
                                </li>
                                <li className="mb-2">
                                mySalesforce is unveiled, allowing everyone from admins to business users to build and deploy modern, highly customized mobile apps with point-and-click tools.
                                </li>
                                <li className="mb-2">
                                Revenue grows to $10.548 billion for the fiscal year ending January 31, 2018, up 25% on the previous year.
                                </li>
                                <li className="mb-2">
                                Salesforce has 29,000 employees around the world and more than 150,000 customers.
                                </li>
                                <li className="mb-2">
                                Ninety-five of the Fortune 100 run at least one app from the AppExchange.
                                </li>
                            </ul>

                            {/* Image Section */}
                            <div className="w-full flex items-center justify-center mb-4">
                                <Image
                                src="https://www.salesforce.com/news/wp-content/uploads/sites/3/2020/09/history_of_saelesforce_einstein_launch.jpg"
                                alt="Salesforce Einstein Launch"
                                width={560}
                                height={315}
                                className="rounded-lg mb-4"
                                />
                            </div>

                            {/* Image Description */}
                            <div className="text-center">
                                <p className="italic text-sm text-gray-600 mt-2">
                                Salesforce launches Einstein, the first comprehensive artificial intelligence (AI) technology for CRM.
                                </p>
                            </div>
                        </div>
                        
                        {/* 2018 & 2019 */}
                        <div className="text-left mb-8">
                            {/* 2018 Header */}
                            <h3 className="text-3xl font-bold text-[#0D2B70] mb-4">2018</h3>

                            {/* 2018 Highlights List */}
                            <ul className="list-disc pl-6 text-gray-700 mb-6">
                                <li className="mb-2">
                                The Salesforce Tower in San Francisco has its grand opening.
                                </li>
                                <li className="mb-2">
                                The company introduces Salesforce Customer 360 (now Einstein 1), a new platform service that seamlessly manages customer data across clouds via a click-based user interface.
                                </li>
                                <li className="mb-2">
                                Einstein Voice is introduced, empowering any user to talk to Salesforce.
                                </li>
                                <li className="mb-2">
                                The company acquires MuleSoft to help power Salesforce&apos;s integration capabilities. <i>Fortune</i> names Salesforce #1 on the 100 Best Companies to Work For list.
                                </li>
                                <li className="mb-2">
                                The company has more than 36,000 employees.
                                </li>
                                <li className="mb-2">
                                Revenue reaches $13.3 billion for the fiscal year ending January 31, 2019.
                                </li>
                            </ul>

                            {/* 2019 Header */}
                            <h3 className="text-3xl font-bold text-[#0D2B70] mb-4">2019</h3>

                            {/* 2019 Highlights List */}
                            <ul className="list-disc pl-6 text-gray-700 mb-6">
                                <li className="mb-2">
                                Salesforce acquires <Link href="https://www.salesforce.com/company/news-press/stories/2019/tableau/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Tableau</Link>, bringing the world&apos;s #1 CRM and #1 analytics platform together to supercharge customers&apos; digital transformations.
                                </li>
                                <li className="mb-2">
                                Benioff&apos;s book <i>Trailblazer</i> hits the shelves.
                                </li>
                                <li className="mb-2">
                                More than 1.8 million learners are changing their lives on Trailhead.
                                </li>
                                <li className="mb-2">
                                Dreamforce gathers Trailblazers from <strong>120 countries and 50 U.S. states</strong>, with more than 171,000 registered attendees and 16 million online viewers.
                                </li>
                                <li className="mb-2">
                                <i>Fortune</i> ranked Salesforce as one of its 100 Best Companies to Work for the 12th year in a row, one of the top 10 Most Admired Companies in the World and one of the Best Workplaces for Giving Back.
                                </li>
                                <li className="mb-2">
                                Over the last two decades, Salesforce has given $330 million in grants to worthy causes, employees volunteered 4.9 million hours, and 46,000 nonprofits and NGO use the software for free or at a discount.
                                </li>
                                <li className="mb-2">
                                Annual revenue grew 29%, surpassing $17 billion for the fiscal year ending January 31, 2020.
                                </li>
                            </ul>

                            {/* Image Section */}
                            <div className="w-full flex items-center justify-center mb-4">
                                <Image
                                src="https://www.salesforce.com/news/wp-content/uploads/sites/3/2020/09/marc_benioff_history_of_salesforce.jpg"
                                alt="Marc Benioff at Dreamforce 2019"
                                width={560}
                                height={315}
                                className="rounded-lg mb-4"
                                />
                            </div>

                            {/* Image Description */}
                            <div className="text-center">
                                <p className="italic text-sm text-gray-600 mt-2">
                                Marc Benioff demos <Link href="https://www.salesforce.com/company/news-press/stories/2019/einstein-voice/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Einstein Voice</Link> capabilities at Dreamforce 2019.
                                </p>
                            </div>
                        </div>

                        <div className="text-left mb-8">
                            {/* 2020 Header */}
                            <h3 className="text-3xl font-bold text-[#0D2B70] mb-4">2020</h3>

                            {/* 2020 Highlights List */}
                            <ul className="list-disc pl-6 text-gray-700 mb-6">
                                <li className="mb-2">
                                IDC ranks Salesforce #1 in CRM for the 7th year in a row, gaining more share of the market than the next nine competitors combined.
                                </li>
                                <li className="mb-2">
                                Salesforce launches a number of products and resources to help companies navigate the pandemic including:
                                <ul className="list-disc pl-10 space-y-2 mt-2">
                                    <li>
                                    <Link href="https://www.salesforce.com/company/news/press-releases/2020/04/salesforce-care/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                                        Salesforce Care
                                    </Link>, a set of free rapid response solutions, companies can stay connected to employees, customers, and partners during the pandemic.
                                    </li>
                                    <li>
                                    <Link href="https://www.salesforce.com/work/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                                        Work.com
                                    </Link>, a suite of expert advice, content, data, and new products to help companies around the globe reopen their businesses and communities, then get back to growth.
                                    </li>
                                    <li>
                                    <Link href="https://www.salesforce.com/company/news/press-releases/2020/07/vaccine-cloud/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                                        Vaccine Cloud
                                    </Link> to help public health authorities, healthcare providers, and nonprofits quickly scale vaccine operations, from recipient registration and scheduling to inventory management and public health outreach.
                                    </li>
                                </ul>
                                </li>
                                <li className="mb-2">
                                Salesforce is added to the Dow Jones Industrial Average, effective August 31, 2020.
                                </li>
                                <li className="mb-2">
                                Salesforce acquires <Link href="https://www.salesforce.com/company/news/press-releases/2020/02/salesforce-acquires-vlocity/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Vlocity</Link>, and signs a definitive agreement to <Link href="https://www.salesforce.com/company/news/press-releases/2020/12/salesforce-to-acquire-slack/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">acquire Slack</Link>.
                                </li>
                                <li className="mb-2">
                                Salesforce hosts a <Link href="https://www.salesforce.com/dreamforce/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">virtual Dreamforce</Link>, attracting more than 140 million views, and its first ever Dreamforce To You, bringing a version of Dreamforce tailored to individual customers around the world.
                                </li>
                            </ul>

                            {/* Image Section */}
                            <div className="w-full flex items-center justify-center mb-4">
                                <Image
                                src="https://www.salesforce.com/news/wp-content/uploads/sites/3/2020/12/DF2U_Keynote_Marc_Benioff-1.png?w=1218&amp;h=686"
                                alt="Marc Benioff at Dreamforce To You 2020"
                                width={560}
                                height={315}
                                className="rounded-lg mb-4"
                                />
                            </div>

                            {/* Image Description */}
                            <div className="text-center">
                                <p className="italic text-sm text-gray-600 mt-2">
                                Salesforce Chair & CEO, Marc Benioff, delivers the Dreamforce To You 2020 Keynote from Salesforce Park.
                                </p>
                            </div>
                        </div>
                        
                        {/* 2021 & 2022 */}
                        <div className="text-left mb-8">
                            {/* 2021 Header */}
                            <h3 className="text-3xl font-bold text-[#0D2B70] mb-4">2021</h3>

                            {/* 2021 Highlights List */}
                            <ul className="list-disc pl-6 text-gray-700 mb-8">
                                <li className="mb-2">
                                Salesforce <Link href="https://www.salesforce.com/news/press-releases/2021/07/salesforce-completes-slack-acquisition/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">completes acquisition</Link> of Slack, shares vision for Slack-driven Digital HQ.
                                </li>
                                <li className="mb-2">
                                <Link href="https://www.salesforce.com/news/press-releases/2021/10/2021-idc-report/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">According to data</Link> from a new study from IDC, Salesforce and its ecosystem of partners will create 9.3 million new jobs and $1.6 trillion in new business revenues worldwide by 2026.
                                </li>
                                <li className="mb-2">
                                <Link href="https://www.salesforce.com/products/salesforce-plus/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Salesforce+</Link> is introduced, an all-new streaming service with compelling live and on-demand content for every role, industry, and line of business.
                                </li>
                                <li className="mb-2">
                                Salesforce was ranked #1 in CRM <Link href="https://www.salesforce.com/company/news/press-releases/2021/04/salesforce-ranked-number-1-crm-8th-year/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">for the 8th consecutive year</Link>.
                                </li>
                                <li className="mb-2">
                                Salesforce <Link href="https://www.salesforce.com/news/press-releases/2021/10/salesforce-net-zero-commitment/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">announced</Link> that it is a Net Zero company across its full value chain and has achieved 100% renewable energy for its global operations by procuring renewable energy equivalent to our electric energy usage.
                                </li>
                                <li className="mb-2">
                                Salesforce commits to new Equality initiatives following widespread racial injustice incidents, pushes for police reform.
                                </li>
                            </ul>

                            {/* 2022 Header */}
                            <h3 className="text-3xl font-bold text-[#0D2B70] mb-4">2022</h3>

                            {/* 2022 Highlights List */}
                            <ul className="list-disc pl-6 text-gray-700 mb-8">
                                <li className="mb-2">
                                At the 20th annual Dreamforce, Salesforce <Link href="https://www.salesforce.com/news/press-releases/2022/09/customer-data-cloud-launch/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">announced</Link> Customer Data Cloud, a hyperscale real-time data platform that now powers the Einstein 1 Platform.
                                </li>
                                <li className="mb-2">
                                Salesforce <Link href="https://www.salesforce.com/news/press-releases/2022/02/safety-cloud-launch/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">announced</Link> Safety Cloud to help people get together safely. Building on Salesforce&apos;s own event and workplace experience.
                                </li>
                                <li className="mb-2">
                                Salesforce officially <Link href="https://www.salesforce.com/news/press-releases/2022/01/sustainability-core-value/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">announced</Link> sustainability as a core company value.
                                </li>
                                <li className="mb-2">
                                Salesforce was <Link href="https://www.salesforce.com/news/press-releases/2022/04/salesforce-ranked-number-1-crm-9th-year/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">ranked #1 in CRM</Link> for the 9th consecutive year.
                                </li>
                                <li className="mb-2">
                                Salesforce <Link href="https://www.salesforce.com/news/press-releases/2022/11/nft-cloud-launch/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">announced</Link> NFT Cloud a trusted, sustainable, connected, NFT commerce solution.
                                </li>
                                <li className="mb-2">
                                Salesforce received multiple notable recognitions including Most Sustainable Company, World&apos;s Best Workplace, and World&apos;s Most Admired.
                                </li>
                                <li className="mb-2">
                                Following the <Link href="https://www.salesforce.com/company/1-1-1/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">1-1-1 model</Link>, Salesforce gave more than $614 million in grants, 7.8 million hours of community service, and provided product donations for more than 51,000 nonprofits and educational institutions.
                                </li>
                            </ul>
                        </div>

                        {/* 2023 - EinsteinGPT */}
                        <div className="text-left mb-4">
                            
                            {/* Content for 2014 - Trailhead */}
                            <h3 className="text-3xl font-bold text-[#0D2B70] mb-4">2023</h3>
                            <ul className="list-disc pl-6 text-gray-700 mb-4">
                            <li className="mb-2">Einstein, launched at Dreamforce in 2016, generates more than 1 trillion AI-powered predictions per week for customers.</li>
                            <li className="mb-2">Salesforce introduces the next generation of Einstein AI, Einstein GPT, the world&apos;s first generative AI for CRM.</li>
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
                        
                        {/* 2024 section */}
                        <div className="text-left mb-8">
                            {/* 2024 Header */}
                            <h3 className="text-3xl font-bold text-[#0D2B70] mb-4">2024</h3>

                            {/* 2024 Highlights List */}
                            <ul className="list-disc pl-6 text-gray-700 mb-8">
                                <li className="mb-2">
                                <Link href="https://www.salesforce.com/products/einstein/copilot/" target="_blank" className="text-blue-600 hover:underline">
                                    Einstein Copilot
                                </Link>, the conversational AI assistant for CRM, becomes available to customers.
                                </li>
                                <li className="mb-2">
                                Salesforce <Link href="https://www.salesforce.com/news/stories/25th-anniversary/" target="_blank" className="text-blue-600 hover:underline">celebrates</Link> a quarter-century of innovation on its 25th anniversary.
                                </li>
                                <li className="mb-2">
                                Slack AI becomes <Link href="https://slack.com/ai" target="_blank" className="text-blue-600 hover:underline">available</Link> to all paid Slack customers.
                                </li>
                                <li className="mb-2">
                                Salesforce was <Link href="https://www.salesforce.com/news/press-releases/2024/04/ranked-number-1-crm-11th-year/" target="_blank" className="text-blue-600 hover:underline">ranked</Link> #1 CRM provider for the 11th consecutive year.
                                </li>
                                <li className="mb-2">
                                Salesforce <Link href="https://www.salesforce.com/news/press-releases/2024/03/zero-copy-partner-network/" target="_blank" className="text-blue-600 hover:underline">announces</Link> the Zero Copy Partner Network, a global ecosystem of tech solution providers committed to bidirectional zero copy integrations with <Link href="https://www.salesforce.com/products/data-cloud/" target="_blank" className="text-blue-600 hover:underline">Salesforce Data Cloud</Link> so that data can be actioned across the <Link href="https://www.salesforce.com/products/einstein/" target="_blank" className="text-blue-600 hover:underline">Salesforce Einstein 1 Platform</Link>.
                                </li>
                                <li className="mb-2">
                                Salesforce chooses London for its first <Link href="https://www.salesforce.com/news/press-releases/2024/06/ai-center-london/" target="_blank" className="text-blue-600 hover:underline">AI Center</Link> - a physical space to bring together industry experts, partners, and customers to advance AI innovation while providing critical upskilling opportunities.
                                </li>
                            </ul>
                        </div>

                    </div>

                    {/* Right Section - 34% Width */} 
                    <div className="w-full lg:w-1/3 px-5 lg:sticky lg:top-[calc(50vh-250px)] self-start">
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
                                    <Link href="https://www.salesforce.com/news/stories/crm-benchmark/" className="w-28 h-20 flex-shrink-0 rounded-lg overflow-hidden mr-4">
                                        <Image
                                            src={Newscard1}
                                            alt="Salesforce Announces the World's First LLM Benchmark for CRM"
                                            width={300}
                                            height={200}
                                            className="w-full h-full object-cover"
                                        />
                                    </Link>
                                    <div className="flex-1">
                                        <h3 className="text-lg font-semibold text-[#0D2B70] leading-tight">
                                            <Link href="https://www.salesforce.com/news/stories/crm-benchmark/" target="_self">
                                                Salesforce Announces the World&apos;s First LLM Benchmark for CRM
                                            </Link>
                                        </h3>
                                        <p className="text-sm text-gray-500 mt-1">5 min read</p>
                                    </div>
                                </article>

                                {/* Article 2 */}
                                <article className="flex items-center">
                                    <Link href="https://www.salesforce.com/news/stories/video/connections-2024-recap/" className="w-28 h-20 flex-shrink-0 rounded-lg overflow-hidden mr-4">
                                        <Image
                                            src={Newscard2}
                                            alt="Connections 2024: New Marketing and Commerce Innovations Tap AI, Data for Personalized Experiences"
                                            width={300}
                                            height={200}
                                            className="w-full h-full object-cover"
                                        />
                                    </Link>
                                    <div className="flex-1">
                                        <h3 className="text-lg font-semibold text-[#0D2B70] leading-tight">
                                            <Link href="https://www.salesforce.com/news/stories/video/connections-2024-recap/" target="_self">
                                                Connections 2024: New Marketing and Commerce Innovations Tap AI, Data for Personalized Experiences
                                            </Link>
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
                    <Link href="#" className="text-[#0D2B70] hover:underline flex items-center space-x-2">
                        <span>Get real-time system updates</span>
                        <FaExternalLinkAlt />
                    </Link> 
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
                    <Link href="#" className="text-[#0D2B70] hover:underline flex items-center space-x-2">
                        Learn how we empower customers
                    </Link> 
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
                    <Link href="#" className="text-[#0D2B70] hover:underline flex items-center space-x-2">
                        <span>See our latest product features and updates</span>
                        <FaExternalLinkAlt />
                    </Link>  
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
                    <Link href="#" className="text-[#0D2B70] hover:underline flex items-center space-x-2">
                        <span>Learn about our equality initiatives</span>
                        <FaExternalLinkAlt />
                    </Link>  
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
                    <Link href="#" className="text-white bg-blue-600 hover:bg-blue-700 font-semibold py-2 px-4 rounded inline-flex items-center space-x-2">
                        <span>See our values in action</span>
                        <FaExternalLinkAlt />
                    </Link>
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