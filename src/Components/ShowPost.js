import React from 'react'
import Footer from './Footer'
import Nav from './Nav'

export default function ShowPost(props) {
    window.scrollTo(0, 0);
    document.title = 'Aeroskop - blog'
    return (
        <>
            <Nav/>
            {props.fullText}
            <Footer/>
        </>
    )
}
