import React from 'react'
import { useParams } from 'react-router-dom'
import FlashCard from '../components/FlashCard'

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

const Topic = ({ id }) => {

    const params = useParams()

    return (
        <>
        <FlashCard />
        <FlashCard />
        </>
    )
}

export default Topic