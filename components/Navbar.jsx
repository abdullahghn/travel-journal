import React from "react"
import logo from '../src/assets/logo.png'

export default function Navbar() {
    return (
        <nav className="navbar">
            <img src={logo} />
            My Travel Journal
        </nav>
    )
}