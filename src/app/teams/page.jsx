import axios from 'axios'
import {React} from 'react'
import { Container } from '@/components/container/page';
import Image from 'next/image';

async function page() {
  const response = await axios.get('https://randomuser.me/api?results=10');
  const team = response.data.results;

  return (
      <>
        {/* Executives Heading */}
        <Container className="py-4 px-8 lg:px-24 bg-white text-center mb-8">
          {/* Header Section */}
          <h2 className="text-3xl lg:text-4xl font-bold text-[#0D2B70] mb-10 mt-10">
            Meet our distinguished Team! 
          </h2>
          
          {/* Grid Container for Executive Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-8 lg:px-24 py-8 bg-white">
              {team.map((member, index) => (
                  <div key={index} className="max-w-xs mx-auto flex flex-col items-center text-center border p-4 rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 hover:scale-105">
                  {/* Image Section */}
                  <Image
                      src={member.picture.large} // Image URL
                      alt={`${member.name.title + "." + member.name.first + " " + member.name.last}'s photo`}
                      width={200} // Adjust to your desired width
                      height={200} // Adjust to your desired height
                      className="rounded-lg object-cover mb-4" // Apply object-cover for proper aspect ratio
                  />

                  {/* Info Section */}
                  <h3 className="text-lg font-bold text-[#0D2B70] mb-2">{member.name.title + "." + member.name.first + " " + member.name.last}</h3>
                  <p className="text-sm text-gray-600 mb-1">member</p>
                  <p className="text-xs text-gray-400 mb-2">Salesforce</p>

                  {/* Experience Description Styled as a Quote */}
                  {/* <div className="relative my-4 min-h-[100px] flex flex-col justify-center">
                      <div className="absolute left-0 top-0 h-full w-[4px] bg-blue-500 rounded-lg"></div>
                      <p className="text-sm italic text-gray-700 mb-4 pl-6 pr-4 leading-relaxed">
                      {executive.description}
                      </p>
                  </div> */}
                  </div>
              ))}
          </div>
        </Container>  

      
      
      </>  
  )
}

export default page