import React from 'react'

const ModalWrapper = ({ children }) => {
  return (
    <div className="w-screen h-screen fixed top-0 left-0">
        <div className="h-full w-full bg-black bg-opacity-50 flex justify-center items-center">
            { children }
        </div>
    </div>
  )
}

export default ModalWrapper