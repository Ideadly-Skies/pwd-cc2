"use client";
import { useState } from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";
import { FaExternalLinkAlt } from "react-icons/fa"; // Importing the external link icon
import { ChevronLeft, ChevronRight } from "lucide-react";

// Replace with your actual images
import image1 from '../../../public/img/home/hero4.png';

// Interface for image data
interface TestimonialData {
  image: StaticImageData;
  quote: string;
  author: string;
  position: string;
}

// Testimonial data array
const testimonials: TestimonialData[] = [
  {
    image: image1,
    quote: "With Salesforce as our partner, we trust them to take us on a journey to success. We can create more extraordinary experiences for our customers and that will move us forward.",
    author: "Dr Astrid Fontaine",
    position: "Board Member for People, Digitalisation and IT, Bentley Motors",
  },
  {
    image: image1, 
    quote: "Salesforce has been a key partner in transforming our digital landscape. Their expertise and technology have helped us streamline processes and drive innovation.",
    author: "Miley Cirus",
    position: "Chief Technology Officer, Tech Corp",
  },
  {
    image: image1, 
    quote: "Salesforce enables us to build meaningful relationships with our customers and empowers us to deliver superior experiences.",
    author: "Jane Smith",
    position: "Head of Marketing, Example Corp",
  },
];

export default function TestimonialSlider(): JSX.Element {
  // State to keep track of the current testimonial index
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // State to determine if the slider is being hovered over
//   const [isHovered, setIsHovered] = useState<boolean>(false);

  // Function to show the previous testimonial
  const prevSlide = (): void => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  // Function to show the next testimonial
  const nextSlide = (): void => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  return (
    <div className="relative w-full mx-auto mt-4">
      {/* Main Container for the Testimonial Section */}
      <div
        className="relative group bg-white px-8 lg:px-24 py-12 rounded-lg border border-gray-200 border-full"
      >
        {/* Testimonial Card Content */}
        <div className="flex flex-wrap items-center justify-between">
          {/* Left Section - Image */}
          <div className="flex items-center justify-center w-full lg:w-1/3 mb-8 lg:mb-0">
            {/* Image of the person giving the testimonial */}
            <Image
              src={testimonials[currentIndex].image}
              alt="Testimonial Illustration"
              width={160}
              height={160}
              className="object-cover shadow-lg rounded-full"
            />
          </div>

          {/* Right Section - Text Content */}
          <div className="w-full lg:w-2/3">
            {/* Quote */}
            <p className="text-2xl lg:text-3xl font-bold leading-snug text-[#0D2B70] mb-4">
              <span className="text-4xl text-[#0D2B70] mr-2">“</span>
              {testimonials[currentIndex].quote}
              <span className="text-4xl text-[#0D2B70] ml-2">”</span>
            </p>

            {/* Name and Position */}
            <p className="text-lg font-semibold text-[#0D2B70] mb-2">{testimonials[currentIndex].author}</p>
            <p className="text-md text-gray-600 mb-4">{testimonials[currentIndex].position}</p>

            {/* Call-to-Action Button */}
            <button className="px-4 py-2 text-blue-700 font-semibold border border-blue-700 rounded-md shadow-md hover:bg-blue-50 transition-all duration-300 flex items-center">
              See the story
              <span className="ml-2"><FaExternalLinkAlt /></span>
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        className="absolute left-0 top-1/2 transform h-[460px] rounded-xl mx-1 -mt-[10px] -translate-y-1/2 bg-white text-white p-2 group"
        onClick={prevSlide}
      >
        <ChevronLeft className="text-gray-400 group-hover:text-[#0D2B70]" />
      </button>
      <button
        className="absolute right-0 top-1/2 transform h-[460px] rounded-xl mx-1 -mt-[10px] -translate-y-1/2 bg-white text-white p-2 group"
        onClick={nextSlide}
      >
        <ChevronRight className="text-gray-400 group-hover:text-[#0D2B70]" />
      </button>

      {/* Pagination Dots */}
      <div className="flex justify-center mt-4">
        {testimonials.map((_, index) => (
          <div
            key={index}
            className={`h-1 w-10 mx-1 ${
              index === currentIndex ? "bg-[#0D2B70] rounded-xl" : "bg-gray-300 rounded-xl"
            } transition-all duration-500 ease-in-out`}
          ></div>
        ))}
      </div>
    </div>
  );
}
