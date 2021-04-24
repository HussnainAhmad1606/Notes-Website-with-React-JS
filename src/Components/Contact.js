import React from 'react'

export const Contact = () => {
    let contactStyling = {
        minHeight: "90vh"
    }
    return (
        <div className="my-4 container" style={contactStyling}>
            <h1>Contact Us</h1>
            <p>If you want to contact us for any reason, you can email us at <b>complaints@WhatNotes.com</b></p>
        </div>
    )
}
