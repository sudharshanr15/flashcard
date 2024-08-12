import React, { useEffect, useMemo, useRef, useState } from 'react'
import ModalWrapper from './ModalWrapper'
import { addCard, addTopic, editCard } from '../server_api';
import { toast } from 'react-toastify';

const EditCardModal = ({ item, topic, onClose, onSuccess }) => {
    const questionRef = useRef();
    const answerRef = useRef();
    const topic_id = useMemo(() => topic ? topic.id : null, [topic]);

    // initialize input values
    useEffect(() => {
        questionRef.current.value = item.question
        answerRef.current.value = item.answer
    }, [])

    function onSubmit(e){
        e.preventDefault();
        editCard(topic_id, questionRef.current.value, answerRef.current.value, item.id).then(res => {
            if(res.status){
                toast.success("Card modified successfully")
                onSuccess()
                onClose()
            }else{
                return Promise.reject("Unable to edit card")
            }
        }).catch(e => {
            toast.error(e)
        })
    }
  return (
    <ModalWrapper>
        <div className="bg-red-900 rounded-md p-6 relative">
            <h2 className='text-xl font-bold'>Edit Card</h2>
            <button className='absolute top-0 right-0' onClick={onClose}>
                close
            </button>
            <form action="" className='mt-4' onSubmit={onSubmit}>
                <div className="mb-2">
                    <label htmlFor="question">Question</label>
                    <input type="text" required className='block border rounded p-2 w-full mt-1 text-black' id='question' ref={questionRef} />
                </div>
                <div className='mb-2'>
                    <label htmlFor="answer">Answer</label>
                    <input type="text" required className='block border rounded p-2 w-full mt-1 text-black' value={item.answer} id='answer' ref={answerRef} />
                </div>
                <button type='submit' className='w-full block bg-green-400 rounded p-2 mt-4'>Submit</button>
            </form>
        </div>
    </ModalWrapper>
  )
}

export default EditCardModal