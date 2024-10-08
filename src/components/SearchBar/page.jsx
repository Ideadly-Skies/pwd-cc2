'use client';
import { useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

export default function SectionFilter(){
    const router = useRouter()
    
    const debounced = useDebouncedCallback(
      (valueInput) => {
        router.push(`?search=${valueInput}`)
        router.refresh() 
      },
      2000
    )

    const onSortingProducts = (value) => {
      router.push(`?sort=${value}`)
      router.refresh()
    }

    // const onSearchProduct = (valueInput) => {
    //     router.push(`?search=${valueInput}`)
    //     router.refresh()
    // }

    return(
        <section className='py-5 flex flex-col lg:flex-row gap-3'>
        <div className='w-full'>
          <label className='input input-bordered w-full flex items-center gap-2 rounded-none'>
            <input onChange={(e) => debounced(e.target.value)} type='text' className='grow w-full bg-white border' placeholder='Search' />
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 16 16'
              fill='currentColor'
              className='h-4 w-4 text-gray-500'>
              <path
                fillRule='evenodd'
                d='M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z'
                clipRule='evenodd' />
            </svg>
          </label>
        </div>
        <div className='w-full lg:w-auto'>
          <select onChange={(e) => onSortingProducts(e.target.value)} className='select select-bordered w-full lg:max-w-xs bg-white rounded-none'>
            <option disabled selected>Sorting</option>
            <option value='ascending'>Low to High</option>
            <option value='descending'>High to Low</option>
          </select>
        </div>
      </section>
    )
}