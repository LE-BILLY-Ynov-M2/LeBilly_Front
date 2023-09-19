import React, { useState, useEffect, useContext } from "react"
import userService from "../../services/user.service"
import Button from "../../components/others/button/button"
import { BsXLg } from "react-icons/bs"
import AuthContext from "../../context/AuthContext"

import styles from "./photos.module.scss"
import photoService from "../../services/photo.service"

const Photos = () => {
    const [photo, setPhotos] = useState([])
    const [uploadFile, setUploadFile] = useState({})
    const [isChangeUploadFile, setIsChangeUploadFile] = useState(false)
    const { userContext } = useContext(AuthContext)

    useEffect(() => {
        userService
            .getAllPhotos()
            .then(data => {
                setPhotos(data.images)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    // const deletePhoto = () => {}

    // const handleFileSelected = e => {
    //     setIsChangeUploadFile(true)
    //     setUploadFile(e.target.files[0])
    // }
    // useEffect(() => {
    //     if (isChangeUploadFile) {
    //         handleSubmit()
    //         setIsChangeUploadFile(false)
    //     }
    // }, [uploadFile])

    // const handleSubmit = async () => {
    //     console.log(uploadFile, "file")
    //     const formData = new FormData()
    //     formData.append("file", uploadFile)
    //     formData.append("upload_preset", "ml_default")
    //     console.log("tt")
    //     console.log(formData)
    //     console.log("/tt")
    //     photoService
    //         .addPhoto(uploadFile)
    //         .then(data => {
    //             console.log(data)
    //         })
    //         .catch(err => console.log(err))
    //     // const response = await fetch(`http://localhost:5500/accounts/upload_photo/`, {
    //     //     method: "POST",
    //     //     body: { file: formData },
    //     // })
    //     // const data = await response.json()
    //     // console.log("data")
    //     // console.log(data)
    // }

    return (
        <div>
            <h1 className={styles.h1}>Souvenirs</h1>
            {/* {userContext && userContext.admin ? (
                <div className={styles.flex}>
                    <img
                        src={"https://cdn-icons-png.flaticon.com/512/70/70310.png"}
                        alt="ajouter une photo"
                        className={styles.img}
                    />
                    <input
                        className={styles.addPhoto}
                        id="file"
                        //className={styles.inputfile}
                        type="file"
                        onChange={e => handleFileSelected(e)}
                    />
                </div>
            ) : (
                ""
            )} */}

            {photo ? (
                <div className={styles.main}>
                    {photo.map(element => (
                        <div className={styles.divmain} key={element}>
                            <div className={styles.divsousmain}>
                                <img
                                    className={styles.image}
                                    src={element}
                                    alt="image cloudinary"
                                />
                                {/* {userContext && userContext.admin ? (
                                    <Button
                                        onClick={() => {
                                            deletePhoto()
                                        }}
                                        className={styles.button}
                                    >
                                        <BsXLg size={30} />
                                    </Button>
                                ) : (
                                    ""
                                )} */}
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div></div>
            )}
        </div>
    )
}

export default Photos
