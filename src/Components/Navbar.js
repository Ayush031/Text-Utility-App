import React, { useState } from 'react'
import propTypes from 'prop-types'
import { Link } from 'react-router-dom';

export default function Navbar(pass) {
    // const { mode, title, homeText, toggleModePink, toggleModeGreen, toggleMode, modePinkBtnTxt, modeGreenBtnTxt, modeBtnTxt } = props;
    const [isChecked1, setIsChecked1] = useState(false);
    const [isChecked2, setIsChecked2] = useState(false);
    const [isChecked3, setIsChecked3] = useState(false);

    const handleSwitchChange = (switchValue) => {
        if (switchValue === 'switch1') {
            setIsChecked1(!isChecked1);
            setIsChecked2(false);
            setIsChecked3(false);
        } else if (switchValue === 'switch2') {
            setIsChecked1(false);
            setIsChecked2(!isChecked2);
            setIsChecked3(false);
        } else if (switchValue === 'switch3') {
            setIsChecked1(false);
            setIsChecked2(false);
            setIsChecked3(!isChecked3);
        }
    };

    return (
        <nav className={`navbar navbar-expand-lg navbar-${pass.mode === 'pink' || pass.mode === 'dark' || pass.mode === 'green' ? 'dark' : 'light'} bg-${pass.mode === 'pink' || pass.mode === 'dark' || pass.mode === 'green' ? 'dark' : 'light'}`}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">{pass.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/">{pass.homeText}</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/About1">About</Link>
                        </li>
                         <li className="nav-item">
                            <Link className="nav-link text-primary" to="https://github.com/Ayush031" target="_blank" >GitHub</Link>
                        </li>
                    </ul>
                    {/* Pink Mode Switch */}
                    <div className={`form-check form-switch text-${pass.mode === 'pink' || pass.mode === 'green' || pass.mode === 'dark' ? 'light' : 'dark'} mx-3`}>
                        <input className="form-check-input" onClick={pass.toggleModePink} type="checkbox" role="switch" name='switch' checked={isChecked1}
                            onChange={() => handleSwitchChange('switch1')} />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{pass.modePinkBtnTxt}</label>
                    </div>
                    {/* Green Mode Switch */}
                    <div className={`form-check form-switch text-${pass.mode === 'pink' || pass.mode === 'green' || pass.mode === 'dark' ? 'light' : 'dark'} mx-3`}>
                        <input className="form-check-input" onClick={pass.toggleModeGreen} type="checkbox" role="switch" name='switch' checked={isChecked2}
                            onChange={() => handleSwitchChange('switch2')} />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{pass.modeGreenBtnTxt}</label>
                    </div>
                    {/* Dark Mode Switch */}
                    <div className={`form-check form-switch text-${pass.mode === 'pink' || pass.mode === 'green' || pass.mode === 'dark' ? 'light' : 'dark'} mx-3`}>
                        <input className="form-check-input" onClick={pass.toggleMode} type="checkbox" role="switch" name='switch' checked={isChecked3}
                            onChange={() => handleSwitchChange('switch3')} />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{pass.modeBtnTxt}</label>
                    </div>

                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}

// both '' , "" colons are correct and have same usage.
// default props will also override the isRequired command
Navbar.propTypes = {
    title: propTypes.string,
    homeText: propTypes.string.isRequired
}

Navbar.defaultProps = {
    title: 'Set title here',
    homeText: "Home"
}


