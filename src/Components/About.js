import React from 'react'

export const About = () => {
    let aboutStyling = {
        minHeight: "90vh"
    }
    return (
        <div className="my-4 container" style={aboutStyling}>
            <h1>About Us</h1>
            <h2>WhatNotes</h2>
            <p>WhatNotes is a website where you can add your study notes for free!. Our website will store your notes in your browser storage so that your personal notes secure from hackers.</p>
        </div>
    )
}
