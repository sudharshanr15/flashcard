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
            <button className={`${(activeTopic && activeTopic.name) == item.name ? 'border' : ''} bg-bluegray p-2 rounded text-md`} onClick={() => onTopicChange(item)}>
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
        <h1 className='text-xl lg:text-2xl mb-6 font-semibold'>Welcome Admin!</h1>
        <div className=''>
            <h2 className='text-xl mb-4'>Topics</h2>
            <div className="flex gap-4 flex-wrap">
                {topics.map((item, index) => (
                    <TopicMenu item={item} key={index} />
                ))}
                <button onClick={() => setIsAddTopicModalOpen(true)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-plus-circle-fill" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3z"/>
                    </svg>
                </button>
            </div>
        </div>
        <hr className='my-6' />
        {activeTopic && (
            <section className="section-topic">
                <div className="flex justify-between mb-4">
                        <h2 className='text-xl'>{activeTopic.name}</h2>
                        <button onClick={() => setIsAddModalOpen(prev => !prev)} className='inline text-bluegray bg-white px-2 py-1 rounded-full'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-plus-lg inline" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"/>
                            </svg>
                            <span className='ms-2'>New Card</span>
                        </button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
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