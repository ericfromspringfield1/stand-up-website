import React, { Component } from "react"
import { Link } from "react-router-dom"
// import "bootstrap/dist/css/bootstrap.min.css"   
import './NavBar.css'


class NavBar extends Component {
    render() {
        return (
            <nav className="nav-container">
                <ul className="nav-list-container">
                    <li className="nav-item-home">
                        <Link className="nav-link-home" to="/">home | </Link>
                    </li>
                    <li className="nav-item-gigs">
                        <Link className="nav-link-gigs" to="/gigs">gigs | </Link>
                    </li>
                    <li className="nav-item-venues">
                        <Link className="nav-link-venues" to="/venues">venues </Link>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default NavBar
