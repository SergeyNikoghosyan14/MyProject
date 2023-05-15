import React from "react";
import { NavLink } from "react-router-dom";
import './Menu.css'

export default function Menu() {

    const fakeData = [
        {
            id: 1,
            to: "/Home",
            value: "Home"
        },
        {
            id: 2,
            to: "/AboutPage",
            value: "AboutPage"
        },
        {
            id: 3,
            to: "/ToDo",
            value: "ToDo"
        },
        {
            id: 4,
            to: "/Jokes",
            value: "Jokes"
        },
        {
            id: 5,
            to: "/Register",
            value: "Register"
        }

    ]

    return (
        <div>
            <ul id="nav">
                {
                    fakeData?.map((index) => {
                        return <NavLink to={index?.to} key={index?.id}
                            className={({ isActive }) =>  isActive ? "Li1" : 'Li2' }
                            >
                            <li>{index?.value}</li>
                        </NavLink>
                    }
                    )
                }
            </ul>
        </div>
    )
}