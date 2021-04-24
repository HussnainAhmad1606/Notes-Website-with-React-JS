import React from 'react'

export const Footer = () => {
    let footerStyling = {
        width: "100%"
    }
    return (
        <footer className="bg-dark text-light py-1" style={footerStyling}>
            <h5 className="text-center">
            Developed By: Psycho Coder
            </h5>
        </footer>
    )
}
