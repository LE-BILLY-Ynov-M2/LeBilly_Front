export default {
    getAllEvents() {
        return fetch(`http://localhost:5500/accounts/events/`, {
            method: "GET",
            headers: {
                "content-type": "application/json",
            },
        }).then(res => res.json())
    },
    getIdEvent(id) {
        return fetch("http://localhost:5500/accounts/events/" + id + "/", {
            method: "GET",
            headers: {
                "content-type": "application/json",
            },
        }).then(res => res.json())
    },
}
