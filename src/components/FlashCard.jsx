import React, { useRef } from 'react'


const FlashCard = ({ item }) => {
    const flashcard_container_ref = useRef();

    function revealAnswer(e){
        // document.querySelector(".flashcard-container").classList.add("rotate-y-180")
        flashcard_container_ref.current.classList.toggle("rotate-y-180")
    }

    return (
        <div className="flex items-center justify-center">
            <div className="flashcard-wrapper" onClick={revealAnswer}>
                <div className="min-w-[250px] max-w-[250px] min-h-[400px] flex items-center justify-center flashcard-container relative" ref={flashcard_container_ref}>
                    <button className={`bg-white flashcard-question h-full p-4 w-full flex items-center justify-center border-[6px] shadow-lg border-blue-500`}>
                        <p className='text-lg text-center text-black font-semibold'>{item.question}</p>
                    </button>
                    <div className={`bg-[#F0F0F0] flashcard-answer h-full p-4 text-black w-full flex items-center justify-center border-[6px] shadow-lg border-green-500`}>
                        <p className='text-md text-black'>{item.answer}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FlashCard