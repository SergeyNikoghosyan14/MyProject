import React, { useState, useEffect } from 'react'
import './JokesPage.css'

export default function JokesPage() {


    const [arr, setArr] = useState([])

    const [id, setId] = useState(1)

    const [intervall,setIntervall] = useState([])
    useEffect(() => {
        setId((tiv) => tiv + 1)
        console.log(id);
    }, [arr])

    function Zapros({}) {
        fetch('https://api.chucknorris.io/jokes/random')
            .then(response => response.json())
            .then((req => setArr((joke) => [...joke, req.value])))
            .catch(err => console.log(err))

        console.log(arr);
    }



    function Interval(){
        setInterval(() => {
            fetch('https://api.chucknorris.io/jokes/random')
            .then(response => response.json())
            .then((req => setIntervall((x) => [...x, req.value])))
            .then(() => console.log(setIntervall))
            .catch(err => console.log(err))
        },3000)
    }


    return (
        <div className='body'>
            <h1><button onClick={Zapros} className='button'>click</button></h1>
            {arr.map((element,index) => {
                return (
                    <>
                        <p key={index} >{element}</p>
                        <br />
                    </>

                )
            })}
            <h1><button onClick={Interval} className='button'>click2</button></h1>
        </div>
    )
}