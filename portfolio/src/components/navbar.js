import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './navbar.css';

class Navbar extends Component {
    render() {
        return (
            <div id="navbar" className="blue">
                <div className="container">
                    <div className="row">
                        <div className="col s4">
                            <div id="photo">
                                <img src="http://www.valerianpolizzi.fr/assets/img/valerian-polizzi.png" alt="Valérian Polizzi" className="responsive-img z-depth-2"/>
                            </div>
                        </div>
                        <div className="col s8">
                            <h1 className="white-text">Valérian Polizzi</h1>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div id="navbar-footer" className="white z-depth-2">
                        <div id="subtitle "className="col s8 offset-s4">
                            <ul className="navigation">
                                <li className="col s3 navigation-item btn-flat"><Link to='/about' className="blue-text"  >About</Link></li>
                                <li className="col s3 navigation-item btn-flat"><Link to='/workflow' className="blue-text">Workflow</Link></li>
                                <li className="col s3 navigation-item btn-flat"><Link to='/workflow' className="blue-text">Timeline</Link></li>
                                <li className="col s3 navigation-item btn-flat"><Link to='/workflow' className="blue-text">Skills</Link></li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Navbar;
