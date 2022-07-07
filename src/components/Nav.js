// Import dependency and Navigation Component
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

//Creates Navigation Component with three buttons: birds, cats, and dogs
class Nav extends Component {
    render(){
        return(
            <nav className="main-nav">
                <ul>
                    <li>
                        <NavLink to='/birds'  onClick={this.props.navSelection} id='Birds'>Birds</NavLink>
                    </li>
                    
                    <li>
                        <NavLink to='/cats' onClick={this.props.navSelection} id='Cats'>Cats</NavLink>
                    </li>
                    <li>
                        <NavLink to='/dogs' onClick={this.props.navSelection} id='Dogs'>Dogs</NavLink>
                    </li>
                </ul>
            </nav>
        );
    }

}

export default Nav;