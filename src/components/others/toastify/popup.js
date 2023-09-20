import React, { useEffect, useState } from "react"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const Popup = ({ valid, error, mess }) => {
    const [isVisible, setIsVisible] = useState(false)
    console.log(valid)
    console.log(error)
    const validToast = () => {
        console.log("dans le valid")
        setTimeout(() => {
            toast.success(mess, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            })
        }, 3)
    }

    const errorToast = () => {
        toast.error(mess, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        })
    }
    useEffect(() => {
        return () => (valid ? validToast() : errorToast())
    }, [])

    // useEffect(() => {
    //     console.log(valid)
    //     console.log(error)
    //     console.log(mess)
    //     if (valid) {
    //         notifyValid()
    //     } else {
    //         notifyError()
    //     }
    // }, [error])

    return (
        <div>
            {error ? (
                <ToastContainer
                    toastStyle={{ backgroundColor: "red", color: "#20232a" }}
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="colored"
                />
            ) : (
                ""
            )}
            {valid ? (
                <ToastContainer
                    toastStyle={{ backgroundColor: "#61dafb", color: "#20232a" }}
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="colored"
                />
            ) : (
                ""
            )}
        </div>
    )
}

export default Popup
