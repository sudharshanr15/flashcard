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

export { getTopicsList, getTopicCards }