import React from 'react'
import Navbar from './Navbar'
import '../styles/global.css'

export default function Layout({children}) {
    return (
        <div>
         <Navbar />
         <div>
            {children}
        </div>   
        <footer>
            copyright 2021 Far Corporation
        </footer>
        </div>
    )
}
