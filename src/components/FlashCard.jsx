import React, { useRef } from 'react'

const FlashCard = () => {
    const flashcard_container_ref = useRef();

    function revealAnswer(e){
        // document.querySelector(".flashcard-container").classList.add("rotate-y-180")
        flashcard_container_ref.current.classList.add("rotate-y-180")
    }
    return (
        <div className="flashcard-wrapper" onClick={revealAnswer}>
            <div className="w-[250px] h-[500px] flex items-center justify-center border rounded-md flashcard-container relative" ref={flashcard_container_ref}>
                <div className="bg-red-900 flashcard-question m-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos adipisci nobis, consequatur maiores libero et qui ut corrupti iusto vitae.
                </div>
                <div className="bg-green-900 flashcard-answer m-4">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt ab id corrupti? Corrupti harum, eum fugit aliquam magnam tempore mollitia.
                </div>
            </div>
        </div>
    )
}

export default FlashCard