import React, { useState } from "react"
import './HomePage.css'
import miyagi from './miyagi.jpg'
import andy from './andy.jpg'
import scriptanit from './scriptanit.jpg'



export default function HomePage() {
    const [x, setX] = useState(false)
    const [y, setY] = useState(false)
    const [z, setZ] = useState(false)

    return (
        <div className="flex">
            <div>
                <img src={miyagi} onClick={()=>setX((a) => !a)} />
                {x && <div><a href="https://ru.wikipedia.org/wiki/MiyaGi_%26_Andy_Panda" target="_blank">Miyagi</a></div>}
            </div>
            <div>
                <img src={andy} onClick={()=>setY((a) => !a)} />
                {y && <div><a href='https://ru.wikipedia.org/wiki/MiyaGi_%26_Andy_Panda' target="_blank">Andy</a></div>}
            </div>
            <div>
                <img src={scriptanit} onClick={() => setZ((a) => !a)} />
                {z && <div><a  href="https://ru.wikipedia.org/wiki/%D0%A1%D0%BA%D1%80%D0%B8%D0%BF%D1%82%D0%BE%D0%BD%D0%B8%D1%82"target="_blank">Scriptanit</a></div>}
            </div>

        </div>
    )
}