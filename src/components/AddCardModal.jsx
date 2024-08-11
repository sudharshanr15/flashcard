import React from 'react'
import ModalWrapper from './ModalWrapper'

const AddCardModal = ({ onClose }) => {
  return (
    <ModalWrapper>
        <div className="bg-red-900 rounded-md p-6 relative">
            <h2 className='text-xl font-bold'>Add to Card</h2>
            <button className='absolute top-0 right-0' onClick={onClose}>
                close
            </button>
            <form action="" className='mt-4'>
                <div className="mb-2">
                    <label htmlFor="question">Question</label>
                    <input type="text" className='block outline-none border rounded p-2 w-full mt-1 text-black' id='question' />
                </div>
                <div className='mb-2'>
                    <label htmlFor="answer">Answer</label>
                    <input type="text" className='block outline-none border rounded p-2 w-full mt-1 text-black' id='answer' />
                </div>
                <button type='submit' className='w-full block bg-green-400 rounded p-2 mt-4'>Submit</button>
            </form>
        </div>
    </ModalWrapper>
  )
}

export default AddCardModal