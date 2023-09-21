export default {
    createCheckoutSession(token, body, event_id, user_id) {
        return fetch(`http://localhost:5500/accounts/events/${user_id}/${event_id}/payment/`, {
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
