import React from "react";

function NavBar(props){
    return(
        <div>
            <nav className="navbar navbar-expand-lg bg-dark">
            <div className="container">
                <a className="navbar-brand text-white fw-bold" href="/">{props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a className="nav-link active text-white fw-medium" aria-current="page" href="/">{props.home}</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link text-white fw-medium" href="/">Link</a>
                    </li>
                </ul>
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn text-white btn-outline-info" type="submit">Search</button>
                </form>
                </div>
            </div>
            </nav>
        </div>
    )
}

export default NavBar;
