import React, { useState, useEffect } from 'react'
import img from '../../public/tres.jpg'
import '../css/welcome.css'

export default function WelcomeBase() {
    const [scroll, setScroll] = useState(document.documentElement.scrollTop)
    
    useEffect(() => {
        document.documentElement.scrollTo(0,0)
        document.addEventListener("scroll", () => {
            const diff = scroll - document.documentElement.scrollTop 
            setScroll(document.documentElement.scrollTop)
            document.getElementById("big-tree").style.transform = 'translateY(' + - diff / 2 + 'px)'
        })

    }, [])
    return (
        <div>
            <div className="big-tree-holder">
                <img id="big-tree" src={img}/>
                <div className="big-tree-shadow"></div>
                <div className="big-tree-text">
                    HEY WASS POPPIN
                </div>
            </div>
            <div className="green-content">

            </div>
        </div>
    )
}





