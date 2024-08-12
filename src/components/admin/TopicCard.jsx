import React from 'react'

const TopicCard = ({ item, onEdit, onDelete }) => {
  return (
    <div className="border border-gray-500 rounded bg-red-900 p-2">
        <p>ID: {item.id}</p>
        <p>{item.question}</p>
        <div className="text-end mt-3">
            <button className='me-4 underline' onClick={onEdit}>Edit</button>
            <button className='underline' onClick={onDelete}>Delete</button>
        </div>
    </div>
  )
}

export default TopicCard