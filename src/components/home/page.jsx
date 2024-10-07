'use client'

import Image from "next/image";

import { Container } from "../container/page";
import heroImg from "../../../public/img/home/hero.png"
import heroImg1 from "../../../public/img/home/hero1.png"
import heroImg2 from "../../../public/img/home/hero2.png"
import heroImg3 from "../../../public/img/home/hero3.png"
import heroImg4 from "../../../public/img/home/hero6.png"

import heroBg from "../../../public/img/home/hero-bg-1.png"
import ImageSlider from "../../components/TestimonialSlider/page";

// import story cards here
import storyCard1 from "../../../public/img/home/our-story-card-customer-success.png"
import storyCard2 from "../../../public/img/home/our-story-card-trailhead.png"
import storyCard3 from "../../../public/img/home/our-story-card-trailblazers.png"

// import products illustration here
import AgentForce from "../../../public/img/home/AgentForce.png"
import CRMApps from "../../../public/img/home/crm-apps.png"
import Data from "../../../public/img/home/Data.png"

import { useRouter } from 'next/navigation';

export const HomePage = () => {
  const router = useRouter();

  const handleClick = (page) => {
    router.push(`/${page}`);
  }

  return (
    <>
      {/* Home section 1 */}
      <Container className="flex flex-wrap mb-4">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 style={{ color: '#0D2B70' }} className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white mb-4">
              We&apos;re Salesforce, the Customer Company. 
            </h1>

            <p className="text-lg lg:text-xl leading-relaxed text-gray-600 dark:text-gray-300">
              You could say we&apos;ve always been the customer company. <br/>
              From the day we opened our doors, focus on our customers drove our every decision. It fuelled our growth and powered our customers&apos; success. We develop the technology, the partnerships and the communities that help companies connect with customers. So that every company can become a customer company.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="">
            <Image
              src={heroImg}
              width="600"
              height="600"
              className={"object-cover"}
              alt="Hero Illustration"
              loading="eager"
              placeholder="blur"
            />
          </div>
        </div>
      </Container>

      {/* Home Section 2 */}
      <Container className="flex flex-col items-center justify-center text-center py-4 px-4 lg:px-0">
        {/* Title Section */}
        <div className="w-full max-w-3xl mb-8">
          <h1 style={{ color: '#0D2B70' }} className="text-xl font-bold leading-tight tracking-tight text-gray-800 lg:text-5xl dark:text-white">
            The world will change, but customer focus remains.
          </h1>
        </div>

        {/* Subtitle Section */}
        <div className="w-full max-w-2xl">
          <p className="text-lg lg:text-xl leading-relaxed text-gray-600 dark:text-gray-300">
            As sure as the sun will rise, there will be new technologies, new social trends, new things that matter right now. 
            But the customer will still be the customer. Discerning. Demanding. Eager to be wowed. Our goal is to help you to 
            meet them where they are, so that they stay forever loyal to your company, come what may.
          </p>
        </div>
      </Container>

      {/* Home section 3 */}
      <Container className="flex flex-wrap items-center justify-center py-4 px-8 lg:px-24 lg:py-24">

        {/* Left section - Image content */}
        <div className="flex items-center justify-center w-full lg:w-1/2 mt-8 lg:mt-0">
          <div className="">
            <Image
              src={heroImg1} 
              width="600"
              height="600"
              className={"object-cover"}
              alt="Hero Illustration"
              loading="eager"
              placeholder="blur"
            />
          </div>
        </div>

        {/* Right section - Text content */}
        <div className="flex items-start w-full lg:w-1/2">
          <div className="max-w-lg mb-8">
            <h1 style={{ color: '#0D2B70' }} className="text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-snug xl:text-5xl xl:leading-snug dark:text-white mb-6">
              We build bridges between companies and customers.
            </h1>

            <p className="text-lg lg:text-xl leading-relaxed text-gray-600 dark:text-gray-300 mb-4">
              Businesses succeed when they create meaningful connection. Our mission is to deliver it. We help unite every department to better focus on customers with Customer 360, the world’s #1 CRM.
            </p>

            <p className="text-lg lg:text-xl leading-relaxed text-gray-600 dark:text-gray-300 mb-6">
              We allow everyone, on every team, to share a single source of truth with integrated collaboration capabilities that guide essential conversations and decisions right where people work. And with Tableau, we help companies uncover deep insights and take data-driven actions to better serve their customers.
            </p>

            {/* Call to Action Button */}
            <button className="px-6 py-3 text-lg font-semibold text-white bg-blue-700 rounded-md shadow-lg hover:bg-blue-500 transition-all duration-300">
              Explore Customer 360
            </button>
          </div>
        </div>
      </Container>

      {/* Home Section 4 */}
      <Container className="relative flex flex-col items-center justify-center px-8 lg:px-24 overflow-hidden bg-white pb-0"> 
        {/* Text Content */}
        <div className="relative z-10 text-center max-w-3xl">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight tracking-tight text-[#0D2B70] mb-4"> {/* Reduced bottom margin */}
            Every product we offer plays a part in building the connections that drive success — and that success can be harnessed to create positive change.
          </h2>
        </div>
        
        {/* Woman's Image + BG */}
        <div className="relative mt-8">
          {/* Background Image Positioned in the Middle */}
          <Image
            src={heroBg}
            alt="Background Cloud Image"
            width={2000}
            height={2000}
            className="translate-y-8 -translate-x-20" // Adjusted translate-y to move background up
          />

          {/* Woman's Image */}
          <Image
            src={heroImg2}
            alt="Woman smiling with product logos around her"
            width={780}
            height={780}
            className="border-none translate-x-60 -translate-y-48" // Adjusted translate-y to bring woman's image up
          />
        </div>
      </Container>

      {/* Home Section 5 */}
      {/* AI CRM Section with Header and Card Components */}
      <Container className="flex flex-col items-center justify-center pt-6 px-8 lg:px-24 bg-white">

        {/* Header Section */}
        <div className="text-center mb-8">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight tracking-tight text-[#0D2B70]">
            Connect with your customers in a whole new way with the #1 AI CRM.
          </h2>
        </div>

        {/* AI CRM Card Section */}
        <div className="flex flex-row items-stretch justify-between w-full lg:w-auto gap-6">
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
              Augment every employee and serve customers 24/7 with agents that assist and take action autonomously in sales, service, marketing, commerce, and more. You can even build your own custom agents with low-code tools.
            </p>

            {/* Link */}
            <a href="/products" className="text-blue-600 hover:text-blue-700 font-semibold">Get started with Agentforce</a>
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
            <p className="text-gray-700 mb-12">
              Easily connect structured and unstructured data with Salesforce using zero copy to create a single source of truth that drives action across agents, apps, automation, prompts, analytics, and more.
            </p>

            {/* Link */}
            <a href="/products" className="text-blue-600 hover:text-blue-700 font-semibold">Learn about Data Cloud</a>
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
              Get a complete view of your customers on one platform and create a seamless handoff between agents and employees across sales, service, marketing, commerce, and more. With us, a Customer 360 comes standard.
            </p>

            {/* Link */}
            <a href="/products" className="text-blue-600 hover:text-blue-700 font-semibold">Build your Customer 360</a>
          </div>
        </div>
      </Container>
    

      {/* Home Section 6 */}
      <Container className="flex flex-wrap items-center justify-center my-16 py-4 px-8 lg:px-24 bg-white"> {/* Reduced padding-y from lg:py-24 to py-4 */}
        {/* Left Section - Text Content */}
        <div className="w-full lg:w-1/2 mb-4 lg:mb-0"> 
          <p className="text-sm text-[#0D2B70] mb-2 translate-x-2">History</p>
          <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold leading-snug text-[#0D2B70] mb-4">
            A jump to the cloud. A leap of trust.
          </h1>
          <p className="text-lg lg:text-xl leading-relaxed text-gray-700 mb-4">
            <span className="font-bold">The cloud was born.</span> In 1999, four Salesforce founders, working shoulder to shoulder in a small San Francisco flat, launched a customer relationship management (CRM) system with a groundbreaking twist. All the software and critical customer data would be hosted on the Internet and made available as a subscription service. This pioneering “software as a service” or SaaS model quickly spread across the technology industry.
          </p>
        </div>

        {/* Right Section - Image Content */}
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="relative w-full max-w-xl h-auto flex justify-center">
            {/* Hero Image 3 - Placed as the main content */}
            <Image
              src={heroImg3}
              alt="Timeline Illustration of Salesforce"
              width={800}
              height={600}
              className="object-cover object-center"
            />
          </div>
        </div>
      </Container>

      {/* Home Section 7 */}
      <Container className="flex flex-wrap items-center justify-between my-16 py-32 px-8 lg:px-24 lg:py-16 bg-white">
        {/* Left Section - Text Content */}
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
          <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold leading-snug text-[#0D2B70] mb-6">
            Cultivating trust.
          </h1>

          <p className="text-lg lg:text-xl leading-relaxed text-gray-700 mb-6">
            Early adopters of our cloud-based model took a significant leap of faith. There was only one formula for earning their trust - that is, by building trusted relationships. Over the decades, our product has grown in scale and sophistication.
          </p>

          <p className="text-lg lg:text-xl leading-relaxed text-gray-700 mb-6">
            We now provide essential services to many of the world&apos;s biggest and most critical businesses, governments, and organisations. Trust is an ever more valuable commodity. Relationships are gold.
          </p>
        </div>

        {/* Right Section - Video/Image Content */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          {/* Placeholder for Video */}
          <div className="relative w-full lg:max-w-2xl h-auto">
            {/* Replace src with your video or image source */}
            <iframe 
              width="100%" 
              height="315" 
              src="https://www.youtube.com/embed/5DsyfLvpr9Q" 
              title="Trust Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
              className="rounded-lg shadow-lg"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </Container>

      {/* Home Section 8 */}
      <Container className="w-full px-8 my-16 lg:px-24 py-12 bg-white rounded-lg shadow-md border border-gray-200">
        <ImageSlider/> 
      </Container> 

      {/* Home Section 9 */}
      <Container className="flex flex-col items-center justify-center my-4 py-16 px-8 lg:px-24 overflow-hidden bg-white">
        {/* Text Content Section */}
        <div className="text-center max-w-4xl mb-12">
          {/* Section Label */}
          <p className="text-sm text-[#0D2B70] mb-4">Culture</p>

          {/* Main Heading */}
          <h1 className="text-4xl lg:text-5xl font-bold text-[#0D2B70] mb-8">
            We are Trailblazers.
          </h1>

          {/* Paragraph Content */}
          <p className="text-lg lg:text-xl leading-relaxed text-gray-700 mb-6">
            We&apos;re not a typical company. And that&apos;s by design. We call our community of Salesforce employees, customers and partners &quot;Trailblazers.&quot; We&apos;re a one-of-a-kind family. Trailblazers around the world reach across roles, companies and industries to help one another learn, grow and succeed.
          </p>
          <p className="text-lg lg:text-xl leading-relaxed text-gray-700 mb-10">
            We&apos;re serious when it comes to driving customer success and creating positive change in the world, but we have an awful lot of fun together as we do it.
          </p>

          {/* Call-to-Action Button */}
          <button onClick={() => handleClick('about-us')} className="px-6 py-3 text-lg font-semibold text-white bg-blue-700 rounded-md shadow-lg hover:bg-blue-500 transition-all duration-300">
            Learn more about us
          </button>
        </div>

        {/* Single Image Section for the Cards */}
        <div className="relative w-full flex justify-center">
          {/* Replace this with your complete image source */}
          <Image
            src={heroImg4} // Use the path to your combined image file
            alt="Trailblazers Illustration"
            width={1000} // Adjust based on your image width
            height={200} // Adjust based on your image height
            className="object-contain" // Ensure the image maintains aspect ratio and fits within the container
          />
        </div>
      </Container>

      {/* Home Section 10 */}
      <Container className="flex flex-col items-center justify-center py-16 px-8 lg:px-24 bg-white">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#0D2B70] mb-8">
            Helping customers succeed. It&apos;s a Salesforce thing.
          </h2>
        </div>

        {/* Card Components Section */}
        <div className="flex justify-center gap-8">
          {/* First Card */}
          <div className="w-full lg:w-1/3 bg-white border border-gray-200 rounded-lg shadow-md p-6 text-center">
            {/* Image */}
            <Image
              src={storyCard1}
              alt="Customer success illustration"
              width={400} // Adjust based on your image width
              height={200} // Adjust based on your image height
              className="rounded-t-lg object-cover"
            />

            {/* Title */}
            <h3 className="text-xl font-bold text-[#0D2B70] mt-4 mb-2">
              Customer success.
            </h3>

            {/* Description */}
            <p className="text-gray-700 mb-4">
              Hear tales of success, straight from our customers.
            </p>

            {/* Link */}
            <a href="#" className="text-blue-700 font-semibold hover:underline">
              See customer stories
            </a>
          </div>

          {/* Second Card */}
          <div className="w-full lg:w-1/3 bg-white border border-gray-200 rounded-lg shadow-md p-6 text-center">
            {/* Image */}
            <Image
              src={storyCard2}
              alt="Learn the fun way illustration"
              width={400} // Adjust based on your image width
              height={200} // Adjust based on your image height
              className="rounded-t-lg object-cover"
            />

            {/* Title */}
            <h3 className="text-xl font-bold text-[#0D2B70] mt-4 mb-2">
              Learn more about our products
            </h3>

            {/* Description */}
            <p className="text-gray-700 mb-4">
              Visit our product page to learn about our <u>products</u> that helps shapes customer success.
            </p>

            {/* Link */}
            <a href="/products" className="text-blue-700 font-semibold hover:underline">
              Visit our product page
            </a>
          </div>

          {/* Third Card */}
          <div className="w-full lg:w-1/3 bg-white border border-gray-200 rounded-lg shadow-md p-6 text-center">
            {/* Image */}
            <Image
              src={storyCard3}
              alt="Meet Trailblazers illustration"
              width={400} // Adjust based on your image width
              height={200} // Adjust based on your image height
              className="rounded-t-lg object-cover"
            />

            {/* Title */}
            <h3 className="text-xl font-bold text-[#0D2B70] mt-4 mb-2">
              Meet our Trailblazers.
            </h3>

            {/* Description */}
            <p className="text-gray-700 mb-11">
              Learn, connect, have fun and give back together.
            </p>

            {/* Link */}
            <a href="#" className="text-blue-700 font-semibold hover:underline">
              Join the community
            </a>
          </div>
        </div>
      </Container>      
    </>
  );
}