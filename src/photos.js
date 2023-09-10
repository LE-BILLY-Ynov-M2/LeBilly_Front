import React from 'react';



const Photos = () => {
    // const handleSubmitPhoto = async () => {
    //     console.log("dans handleSubmitPoto")
    //     let publicid = ""
    //     if (userContext && userContext.image) {
    //         let imgdelete = userContext.image.split("/users/")[1]
    //         publicid = "users/" + imgdelete.split(".")[0]
    //     }
    //     const formData = new FormData()
    //     formData.append("file", uploadFile)
    //     formData.append("upload_preset", "ml_default")
    //     const response = await fetch(`http://localhost:5000/api/v1/upload/uploadfile/users`, {
    //         method: "POST",
    //         body: formData,
    //     })
    //     const data = await response.json()
        // console.log(data, "data")
        // if (data.api_key) {
        //     console.log("FFFFFFFFFFFFFFFF")
        //     userService
        //         .updateuser(userContext.id, { image: data.secure_url })
        //         .then(() => {
        //             setUserContext({ ...userContext, image: data.secure_url })
        //         })
        //         .catch(err => console.log(err))
        // } else {
        // }
       
    // }
    
    return (
<div>

<label for="file">
{"Changer d'image"}
</label>

</div>
);
}


export default Photos;