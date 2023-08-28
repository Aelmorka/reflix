import { useState, useEffect } from "react"
import { gifAPI } from "../helpers/config"
import Icons from './../../images/sprite.svg'
export default function Modal({movieName, show, setVisibility}) {
    let [gifUrl, setGifUrl] = useState("")
    function closeModal() {
        setVisibility(false)
    }
    function getGif() {
        setGifUrl("")
        fetch(gifAPI + movieName)
            .then(function(response) {
                if (!response.ok) {
                    throw Error(response.statusText)
                }
                return response.json()
            })
            .then(function(data) {
                setGifUrl(data.data[0].embed_url)
            }).catch(function(error) {
                console.log(error);
            })
    }
    useEffect(() => {
        if (movieName) {
            getGif()
        }
    }, [movieName])
    return (
        <div onClick={closeModal} className={"modal__container " + (!show ? "hidden" : "")}>
            <div onClick={(e) => e.stopPropagation()} className="modal">
                <button className="btn-svg" onClick={closeModal}>
                    <svg>
                        <use href={`${Icons}#close`}/>
                    </svg>
                </button>
                <h4>{`Rented "${movieName}" Sucessfully!`}</h4>
                <embed className="gif" type="text/html" src={gifUrl} />
            </div>
        </div>
    )
}