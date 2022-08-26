import React from "react"
import Navbar from "./Components/Navbar.js"
import Main from "./Components/Main.js"
import "./App.css";


export default function App() {
    return (
        <div className="container">
            <Navbar />
            <Main />
        </div>
    )
}