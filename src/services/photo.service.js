export default {
    addPhoto(photo) {
        return fetch("http://localhost:5500/accounts/upload_photo/", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(photo),
        }).then(res => res.json())
    },
    getAllPhotos() {
        return fetch("http://localhost:5500/accounts/get_photos/", {
            method: "GET",
            headers: {
                "content-type": "application/json",
            },
        }).then(res => res.json())
    },
    deletePhoto(id) {
        return fetch("http://localhost:5500/accounts/delete_photo/" + id + "/", {
            method: "DELETE",
            headers: {
                "content-type": "application/json",
            },
        }).then(res => res.json())
    },
}
