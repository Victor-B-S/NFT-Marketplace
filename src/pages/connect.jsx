import React from 'react'
import Navbar from '../components/Navbar/navbar'
import Footer from '../components/Footer/footer'
import Account from '../components/Connect/Account'

export default function (props) {
    return (
        <div>
            <Navbar />
            <Account forWhat={props.forWhat} />
            <Footer />
        </div>
    )
}
