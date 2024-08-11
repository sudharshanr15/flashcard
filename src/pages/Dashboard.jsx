import React from 'react'

const topics = [
    {
      name: "Cybsersecurity",
      url: "",
    },
    {
      name: "Cybsersecurity",
      url: "",
    },
    {
      name: "Cybsersecurity",
      url: "",
    },
    {
      name: "Cybsersecurity",
      url: "",
    },
    {
      name: "Cybsersecurity",
      url: "",
    },
]

const Dashboard = () => {
  return (
    <>
        <h1 className='text-center text-2xl'>Choose a Topic and evaluate your knowledge!</h1>
        <div className="my-8">
            <div className="grid grid-cols-4 gap-4">
                {topics.map((item, index) => (
                <button className="border p-4 border-gray-600 rounded-md bg-blue-950 bg-opacity-50 hover:scale-x-105" key={index}>
                    {item.name}
                </button>
                ))}
            </div>
        </div>
    </>
  )
}

export default Dashboard