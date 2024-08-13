import React, { useMemo, useRef, useState } from 'react'
import ModalWrapper from './ModalWrapper'
import { addCard, addTopic } from '../server_api';
import { toast } from 'react-toastify';

const AddTopicModal = ({ onClose, onSuccess }) => {
    const name = useRef();

    function onSubmit(e){
        e.preventDefault();
        addTopic(name.current.value).then(res => {
            if(res.status){
                toast.success("Topic added successfully")
                onSuccess()
                onClose()
            }else{
                return Promise.reject("Unable to add Topic")
            }
        }).catch(e => {
            toast.error(e)
        })
    }
  return (
    <ModalWrapper>
        <div className="bg-bluegray rounded-md p-6 relative">
            <h2 className='text-xl font-bold'>Add Topic</h2>
            <button className='absolute top-4 right-4' onClick={onClose}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
                </svg>
            </button>
            <form action="" className='mt-4' onSubmit={onSubmit}>
                <div className="mb-2">
                    <label htmlFor="topic">Topic Name</label>
                    <input type="text" required className='block border rounded p-2 w-full mt-1 text-black bg-gray-100' placeholder='Enter topic name' id='topic' ref={name} />
                </div>
                <button type='submit' className='w-full block bg-green-400 rounded p-2 mt-4'>Submit</button>
            </form>
        </div>
    </ModalWrapper>
  )
}

export default AddTopicModal