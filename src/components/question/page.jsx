import { FaExternalLinkAlt } from 'react-icons/fa';
import Image from 'next/image';
import { Container } from '../container/page';

function QuestionSection() {
  return (
    <Container className="flex flex-col lg:flex-row items-center justify-between py-16 px-8 lg:px-24 bg-white mb-8">
        {/* Text Section */}
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0 text-left">
            {/* Main Heading */}
            <h2 className="text-4xl lg:text-5xl font-bold leading-snug text-[#0D2B70] mb-6">
                Questions? We&apos;ll put you on the right path.
            </h2>

            {/* Description */}
            <p className="text-lg lg:text-xl leading-relaxed text-gray-700 mb-4">
                Ask about Salesforce products, pricing, implementation or anything else. Our highly trained reps are standing by, ready to help.
            </p>

            {/* Button with Icon */}
            <div className="text-white bg-blue-600 hover:bg-blue-700 font-semibold py-3 px-6 rounded inline-flex items-center space-x-2">
                <span>Contact us</span>
                <FaExternalLinkAlt />
            </div>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex justify-end relative">
            {/* Replace with your image URLs */}
            <Image
                src="https://wp.sfdcdigital.com/en-us/wp-content/uploads/sites/4/2022/12/closer-small.jpg?resize=1024,683" // Replace with the actual image URL
                alt="Trailblazers Image"
                width={600}
                height={400}
            />
        </div>
    </Container>
  )
}

export default QuestionSection