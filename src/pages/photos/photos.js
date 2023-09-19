import React, { useState, useEffect, useContext } from "react"
import userService from "../../services/user.service"
import Button from "../../components/others/button/button"
import { BsXLg } from "react-icons/bs"
import AuthContext from "../../context/AuthContext"
import "./photos.scss"
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

    return (
        <div className="bloc-info">
            <div className="container-info">
                <h1 className="title-info">Souvenirs</h1>

                {photo ? (
                    <div className="bloc-photos">
                        {photo.map(element => (
                            <div key={element}>
                                <img src={element} alt="image cloudinary" />
                            </div>
                        ))}
                    </div>
                ) : (
                    <div></div>
                )}
            </div>
        </div>
    )
}

export default Photos
