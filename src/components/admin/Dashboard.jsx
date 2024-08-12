import React, { useEffect, useState } from 'react'
import TopicCard from './TopicCard'
import AddCardModal from '../AddCardModal'
import { deleteCard, getTopicCards, getTopicsList } from '../../server_api'
import EditCardModal from '../EditCardModal'
import { toast } from 'react-toastify'
import AddTopicModal from '../AddTopicModal'

const Dashboard = () => {
    const [isAddModelOpen, setIsAddModalOpen] = useState(false);
    const [editTopic, setEditTopic] = useState(false);
    const [activeTopic, setActiveTopic] = useState(null);
    const [topics, setTopics] = useState([]);
    const [topicCards, setTopicCards] = useState({});
    const [isAddTopicModalOpen, setIsAddTopicModalOpen] = useState(false);

    // load topics on initial load
    useEffect(() => {
        loadTopicList()
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

        loadTopicCards()
    }, [activeTopic])

    function loadTopicList(){
        getTopicsList().then(res => {
            setTopics(res)
        })
    }

    function loadTopicCards(){
        getTopicCards(activeTopic.id).then(res => {
            setTopicCards(prev => ({
                ...prev,
                [activeTopic.name]: res
            }))
        })
    }


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

    function onCardEdit(item){
        setEditTopic(item)
    }

    function onCardDelete(item){
        // confirm("Are you sure you want to delete?")
        const result = window.confirm("Are you sure you want to delete?")
        if(result){
            deleteCard(item.id).then(res => {
                if(res.status){
                    toast.success("Card deleted successfully")
                    loadTopicCards()
                }else{
                    return Promise.reject("Unable to delete card")
                }
            }).catch(e => {
                toast.error(e)
            })
        }
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
                <button onClick={() => setIsAddTopicModalOpen(true)}>Add Topic</button>
            </div>
        </div>
        <hr className='my-4' />
        {activeTopic && (
            <section className="section-topic">
                <div className="flex justify-between">
                        <h2>{activeTopic.name} Topic</h2>
                        <button onClick={() => setIsAddModalOpen(prev => !prev)}>New Card</button>
                    </div>

                    <div className="grid grid-cols-4 gap-4 mt-4">
                        {topicCards && topicCards[activeTopic.name] && topicCards[activeTopic.name].map((item, index) => (
                            <TopicCard item={item} key={index} onDelete={() => onCardDelete(item)} onEdit={() => onCardEdit(item)} />
                        ))}
                    </div>
            </section>
        )}
        {isAddModelOpen && <AddCardModal topic={activeTopic} onClose={() => setIsAddModalOpen(prev => !prev)} onSuccess={() => loadTopicCards()} />}
        {editTopic && <EditCardModal topic={activeTopic} onClose={() => setEditTopic(null)} item={editTopic} onSuccess={() => loadTopicCards()} />}
        {isAddTopicModalOpen && <AddTopicModal onClose={() => setIsAddTopicModalOpen(false)} onSuccess={() => loadTopicList()} />}
    </main>
  )
}

export default Dashboard