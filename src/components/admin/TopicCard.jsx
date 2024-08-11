import React from 'react'

const TopicCard = () => {
  return (
    <div className="border border-gray-500 rounded bg-red-900 p-2">
        <p>ID: 1</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, repudiandae.</p>
        <div className="text-end mt-3">
            <button className='me-4 underline'>Edit</button>
            <button className='underline'>Delete</button>
        </div>
    </div>
  )
}

export default TopicCard