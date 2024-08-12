async function getTopicsList() {
    return fetch("http://localhost:8081/api/topic/get.php", { mode: "cors" })
        .then((res) => {
            return res.json();
        })
        .then((res) => {
            if (res.status) {
                return res.message
            }

            return []
        })
        .catch((err) => {
            console.error(err);
            return [];
        });
}

async function getTopicCards(id){
    return fetch("http://localhost:8081/api/topic/get_card.php?topic=" + id, { mode: "cors" })
    .then((res) => {
        return res.json();
    })
    .then((res) => {
        if (res.status) {
            return res.message
        }

        return []
    })
    .catch((err) => {
        console.error(err);
        return [];
    });
}

async function deleteCard(card){
    return fetch("http://localhost:8081/api/topic/delete_card.php?card=" + card, { mode: "cors" })
    .then(res => {
        return res.json()
    }).then(res => {
        return res
    })
    .catch((err) => {
        console.error(err)
        return {
            status: false
        }
    })
}

async function addTopic(topic){
    const url = new URL("http://localhost:8081/api/topic/add.php")
    url.searchParams.set("name", topic);

    return fetch(url.toString(), { mode: "cors" })
    .then(res => {
        return res.json()
    }).then(res => {
        return res
    })
    .catch((err) => {
        console.error(err)
        return {
            status: false
        }
    })
}

async function addCard(topic, question, answer){
    const url = new URL("http://localhost:8081/api/topic/add_card.php")
    url.searchParams.set("topic", topic);
    url.searchParams.set("question", question);
    url.searchParams.set("answer", answer);

    return fetch(url.toString(), { mode: "cors" })
    .then(res => {
        return res.json()
    }).then(res => {
        return res
    })
    .catch((err) => {
        console.error(err)
        return {
            status: false
        }
    })
}

async function editCard(topic, question, answer, id){
    const url = new URL("http://localhost:8081/api/topic/edit_card.php")
    url.searchParams.set("topic", topic);
    url.searchParams.set("question", question);
    url.searchParams.set("answer", answer);
    url.searchParams.set("id", id);

    return fetch(url.toString(), { mode: "cors" })
    .then(res => {
        return res.json()
    }).then(res => {
        return res
    })
    .catch((err) => {
        console.error(err)
        return {
            status: false
        }
    })
}
export { getTopicsList, getTopicCards, deleteCard, addTopic, addCard, editCard }