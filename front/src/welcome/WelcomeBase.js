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
            document.getElementById("big-tree").style.transform = 'translateY(' + - 3 * diff / 5 + 'px)'
        })

    }, [])
    return (
        <div>
            <div className="big-tree-box">
                <div id="big-tree"></div>
                <div id="big-tree-shadow"></div>
                <div id="big-tree-content" className="content-container container">
                    It's like, church, in a park
                </div>
            </div>
            <div className="green-content">
                <div className="container content-container">
                    And uhh that's about it
                </div>
            </div>
            <div className="white-content">
                <div className="green-fadeout"></div>
                <div className="container content-container">
                    Yeah no that's really all it is
                </div>
            </div>
        </div>
    )
}





