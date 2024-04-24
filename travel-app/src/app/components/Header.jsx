import React from 'react';
import styles from './Header.css';
import Logo from './MainLogo';
// import logo from './../logo.svg';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                {/* <h1>Travel App</h1> */}
                {/* <img src={logo} className="App-logo" alt="logo" /> */}

                <a href="/">

                    <Logo />

                </a>
            </div>
        </header>
    )
};

export default Header;