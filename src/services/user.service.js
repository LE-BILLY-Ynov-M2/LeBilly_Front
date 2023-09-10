export default {
    login(user) {
        return fetch(`http://localhost:5500/accounts/login/`, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(user),
        }).then(res => res.json())
    },
    register(user) {
        return fetch(`http://localhost:5500/accounts/create-account/`, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(user),
        }).then(res => res.json())
    },
    sendCode(id_code, num_code) {
        return fetch(`http://localhost:5500/accounts/activate-account/${id_code}/`, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(num_code),
        }).then(res => res.json())
    },
    forgotPassword(email) {
        return fetch(`http://localhost:5500/accounts/password-reset-request/`, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(email),
        }).then(res => res.json())
    },
}
