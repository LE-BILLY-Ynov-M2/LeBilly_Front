export default {
    getAllClients() {
        return fetch(`http://localhost:5500/accounts/accounts/`, {
            method: "GET",
            headers: {
                "content-type": "application/json",
            },
        }).then(res => res.json())
    },
    updateClients(id, user) {
        return fetch("http://localhost:5500/accounts/update/" + id + "/", {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(user),
        }).then(res => res.json())
    },
    deleteClient(id) {
        return fetch("http://localhost:5500/accounts/delete/" + id + "/", {
            method: "DELETE",
            headers: {
                "content-type": "application/json",
            },
        }).then(res => res.json())
    },
    getClient(id) {
        return fetch("http://localhost:5500/accounts/api/users/" + id + "/", {
            method: "GET",
            headers: {
                "content-type": "application/json",
            },
        }).then(res => res.json())
    },
}
