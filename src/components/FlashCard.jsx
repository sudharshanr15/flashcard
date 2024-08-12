import React, { useRef } from 'react'

const questionColors = [
    // 'bg-amber-600',
    // 'bg-yellow-600',
    // 'bg-sky-600',
    'bg-blue-600',
    // 'bg-indigo-600',
    // 'bg-violet-600'
]

const FlashCard = ({ item }) => {
    const flashcard_container_ref = useRef();

    function revealAnswer(e){
        // document.querySelector(".flashcard-container").classList.add("rotate-y-180")
        flashcard_container_ref.current.classList.add("rotate-y-180")
    }

    const questionColor = questionColors[Math.round(Math.random() * 10) % questionColors.length]
    return (
        <div className="flex items-center justify-center">
            <div className="flashcard-wrapper" onClick={revealAnswer}>
                <div className="w-[250px] h-[500px] flex items-center justify-center border border-gray-500 rounded-md flashcard-container relative" ref={flashcard_container_ref}>
                    <div className={`${questionColor} flashcard-question h-full p-4 w-full`}>
                        {item.question}
                    </div>
                    <div className={`bg-lime-400 flashcard-answer h-full p-4 text-black w-full`}>
                        {item.answer}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FlashCard