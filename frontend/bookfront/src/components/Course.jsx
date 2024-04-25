import React from 'react'
import Cards from './Cards'
import list from '../assets/list.json'
import { Link } from 'react-router-dom'
const Course = () => {
  return (
    <>
      <div className='max-w-sereen-2xl container mx-auto md:px-20 px-4'>
        <div className='mt-28 items-center justify-center text-center'>
          <h1 className='text-2xl md-text-4xl'>
            We're delighted to have you{""}
            <span className='text-pink-500'>Here! :)</span>
          </h1>
          <p className='mt-12'>
            Lorem, ipsum dolor sit amet consectetur Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta vitae ullam soluta culpa magnam autem eveniet voluptate laudantium, reiciendis error saepe iste tempore nam ducimus odio? Facilis hic voluptate voluptatem. adipisicing elit. Natus eligendi veniam accusantium neque illo modi quo magnam optio at quae!
          </p>
          <Link to="/">
            <button className='mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300'>Back</button>
          </Link>
        </div>
        <div className='mt-12 grid grid-cols-1 md:grid-cols-4 '>
          {
            list.map((item) => (
              <Cards item={item} key={item.id} />
            ))
          }
        </div>

      </div>
    </>
  )
}

export default Course