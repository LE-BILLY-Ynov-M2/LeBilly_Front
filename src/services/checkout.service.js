export default {
    createCheckoutSession(token, body, event_id) {
        console.log(body)
        return fetch(`http://localhost:5500/accounts/events/payment/`, {
            // mode: "no-cors",
            method: "POST",
            headers: {
                "content-type": "application/json",
                authorization: token,
            },
            body: JSON.stringify(body),
        }).then(res => res.json())
    },
}
