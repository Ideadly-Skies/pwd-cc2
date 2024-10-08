import React from 'react'

function loading() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-8 lg:px-24 py-8 bg-white">
        {[... new Array(10)].map((member, index) => (
                <div key={index} className="max-w-xs mx-auto flex flex-col items-center text-center border p-4 rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 hover:scale-105">
                {/* Image Section */}
                <div
                    className="bg-gray-600 w-[180px] h-[180px]" // Apply object-cover for proper aspect ratio
                />

                {/* Info Section */}
                <h3 className="text-lg font-bold text-[#0D2B70] mb-2">Loading...</h3>
                <p className="text-sm text-gray-600 mb-1">member</p>
                <p className="text-xs text-gray-400 mb-2">Salesforce</p>
                </div>


        ))}
    </div>


    // <div className='grid h-screen place-items-center'>loading...</div>
  )
}

export default loading