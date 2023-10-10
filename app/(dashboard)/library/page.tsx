import React from 'react'
import TeachingCard from '@/components/teachingcard'
import card from '@/data/teaching.json'

const Library = () => {
  return (
    <div className='p-4' >
    <ul role='list' className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4'>
      {card.map((item)=>(
        <li key={item.title} 
        className='p-2 border-[1px]  col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow-sm'
        >
          <h1>{item.title}</h1>
          <span className="inline-flex flex-shrink-0 items-center rounded-full bg-green-50 px-1.5 py-0.5 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                  {item.method}
                </span>
        </li>
      ))}  
    </ul>  

      <TeachingCard data={card} />

    
    </div>

  )
}

export default Library