async function getTopicsList() {
    return fetch("https://portfolio.selfmade.one/api/topic/get.php", { mode: "cors", credentials: "include" })
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
    return fetch("https://portfolio.selfmade.one/api/topic/get_card.php?topic=" + id, { mode: "cors" })
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
    return fetch("https://portfolio.selfmade.one/api/topic/delete_card.php?card=" + card, { mode: "cors" })
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
    const url = new URL("https://portfolio.selfmade.one/api/topic/add.php")
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
    const url = new URL("https://portfolio.selfmade.one/api/topic/add_card.php")
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
    const url = new URL("https://portfolio.selfmade.one/api/topic/edit_card.php")
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

async function login(username, password){
    const url = new URL("https://portfolio.selfmade.one/api/login.php")
    const formdata = new FormData()
    formdata.append("username", username);
    formdata.append("password", password);

    return fetch(url.toString(), {
        method: "POST",
        body: formdata,
        mode: "cors",
        credentials: "include"
    }).then(res => {
        return res.json()
    }).then(res => {
        return res
    }).catch(err => {
        console.error(err)
        return {
            status: false
        }
    })
}

async function authorize(){
    const url = new URL("https://portfolio.selfmade.one/validate.php");
    return fetch(url.toString(), {
        mode: "cors",
        credentials: "include"
    }).then(res => {
        if(res.ok){
            return {
                status: true
            }
        }
        return res.json()
    }).then(res => {
        return res
    }).catch(err => {
        console.error(err)
        return {
            status: false
        }
    })
}
export { getTopicsList, getTopicCards, deleteCard, addTopic, addCard, editCard, login, authorize }