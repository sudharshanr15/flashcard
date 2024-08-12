import React, { useEffect, useState } from 'react'
import TopicCard from './TopicCard'
import AddCardModal from '../AddCardModal'
import { getTopicCards, getTopicsList } from '../../server_api'

const Dashboard = () => {
    const [isAddModelOpen, setIsAddModalOpen] = useState(true);
    const [activeTopic, setActiveTopic] = useState(null);
    const [topics, setTopics] = useState([]);
    const [topicCards, setTopicCards] = useState({})

    // load topics on initial load
    useEffect(() => {
        getTopicsList().then(res => {
            setTopics(res)
        })
    }, [])

    // set active topic on initial load
    useEffect(() => {
        if(!(topics.length > 0)){
            return
        }

        setActiveTopic(topics[0])
    }, [topics])

    useEffect(() => {
        if(activeTopic == null){
            return
        }

        // don't fetch data if already exist
        if(topicCards[activeTopic.name]){
            return
        }

        getTopicCards(activeTopic.id).then(res => {
            setTopicCards(prev => ({
                ...prev,
                [activeTopic.name]: res
            }))
        })
    }, [activeTopic])


    function onTopicChange(item){
        setActiveTopic(item)
    }

    const TopicMenu = ({ item }) => {
        return (
            <button className="border bg-red-900 p-2 rounded" onClick={() => onTopicChange(item)}>
                {item.name}
            </button>
        )
    }

  return (
    <main>
        <h1>Dashboard</h1>
        <div>
            <h2>Topics</h2>
            <div className="flex gap-4">
                {topics.map((item, index) => (
                    <TopicMenu item={item} key={index} />
                ))}
                <button>Add Topic</button>
            </div>
        </div>
        <hr className='my-4' />
        {activeTopic && (
            <section className="section-topic">
                <div className="flex justify-between">
                        <h2>{activeTopic.name} Topic</h2>
                        <button>New Card</button>
                    </div>

                    <div className="grid grid-cols-4 gap-4 mt-4">
                        {topicCards && topicCards[activeTopic.name] && topicCards[activeTopic.name].map((item, index) => (
                            <TopicCard item={item} key={index} />
                        ))}
                    </div>
            </section>
        )}
        {isAddModelOpen && <AddCardModal onClose={() => setIsAddModalOpen(prev => !prev)} />}
    </main>
  )
}

export default Dashboard