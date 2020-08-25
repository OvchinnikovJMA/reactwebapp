import React from 'react'
import {Link} from 'react-router-dom'

const SideBar = (props) => {

    const Logout = () => {
        props.handleAuth(false);
        localStorage.removeItem("1");
    }

    return (
        <div className="Sidebar">
            <div className="sidebar-sticky" id="sidebar-wrapper">
                <div className="sidebar-heading nav flex-row justify-content-around">
                    <img className="nav-item" src={`https://github.com/${props.login}.png`} width="30" height="30" alt="Нет аватарки :("></img>
                    <h3 className="nav-item">{props.login}</h3>
                </div>
                <div className="list-group list-group-flush">
                    <Link className="list-group-item list-group-item-action bg-light" to='/terminals'>Терминалы</Link>
                    <Link className="list-group-item list-group-item-action bg-light" to='/buyers'>Покупатели</Link>
                    <Link className="Logout list-group-item list-group-item-action bg-light" to='/' onClick={Logout}>Выйти</Link>
                </div>
            </div>
        </div>
        
    )
}

export default SideBar