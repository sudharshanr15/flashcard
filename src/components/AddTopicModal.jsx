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
        <div className="bg-red-900 rounded-md p-6 relative">
            <h2 className='text-xl font-bold'>Add Topic</h2>
            <button className='absolute top-0 right-0' onClick={onClose}>
                close
            </button>
            <form action="" className='mt-4' onSubmit={onSubmit}>
                <div className="mb-2">
                    <label htmlFor="topic">Topic Name</label>
                    <input type="text" required className='block border rounded p-2 w-full mt-1 text-black' id='topic' ref={name} />
                </div>
                <button type='submit' className='w-full block bg-green-400 rounded p-2 mt-4'>Submit</button>
            </form>
        </div>
    </ModalWrapper>
  )
}

export default AddTopicModal