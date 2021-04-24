import React from 'react'
import { Link } from "react-router-dom";
export const Home = () => {
    let homeStyling = {
        minHeight: "85vh"
    }
    return (
        <div className="container my-3" style={homeStyling}>
            <h1>Welcome to WhatNotes</h1>
            <h3>Where notes are safe</h3>
            <p>Adding and saving your important notes is very difficult as there are many apps & Websites out there and they are very difficult to use. <b>WhatNotes</b> is a web application that allows you to add notes easily on your own browser without any problem.</p>
            <p>After using this website, your notes are automatically saved on your browser and there is no issue with your privacy. We use your browser <b>localStorage</b> to store your notes safely so that your notes are safe from anyone.</p>
            <p>If you want to try our website, simply click on the below button to get started now. <b>It's Free!</b></p>
            <Link exact to="/notes" className="btn btn-success">Get Started</Link>
        </div>
    )
}
