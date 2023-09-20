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
        console.log(user)
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
    getUser(id) {
        return fetch(`http://localhost:5500/accounts/user/${id}/`, {
            method: "GET",
            headers: {
                "content-type": "application/json",
            },
        }).then(res => res.json())
    },
    updateUser(id, user) {
        return fetch("http://localhost:5500/accounts/update/" + id + "/", {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(user),
        }).then(res => res.json())
    },
    getAllPhotos() {
        return fetch("http://localhost:5500/accounts/images/", {
            method: "GET",
            headers: {
                "content-type": "application/json",
            },
        }).then(res => res.json())
    },
    verifToken(token) {
        return fetch("http://localhost:5500/accounts/verify-token/" + token + "/", {
            method: "GET",
            headers: {
                "content-type": "application/json",
            },
        }).then(res => res.json())
    },
    formResetPassword(token, password) {
        return fetch(`http://localhost:5500/accounts/reset-password/${token}/`, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(password),
        }).then(res => res.json())
    },
}
