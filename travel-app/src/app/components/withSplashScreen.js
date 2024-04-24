import React, { Component } from 'react';
import logo from '../logo.svg';
import './splash-screen.css';
import Logo from './MainLogo';

const splashClass = "splash-screen";

function SplashMessage() {
    return (
        <div className={splashClass}>
            {/* <img src={logo} className="App-logo" alt="logo" /> */}

            <Logo />

            <div id="p2" className="mdl-progress mdl-js-progress mdl-progress__indeterminate"></div>
        </div>
    );
}

export default function withSplashScreen(WrappedComponent) {
    return class extends Component {
        constructor(props) {
            super(props);
            this.state = {
                loading: true,
            };
        }

        async componentDidMount() {
            try {
                setTimeout(() => {
                    this.setState({
                        loading: false,
                    });
                }, 3000)
            } catch (err) {
                console.log(err);
                this.setState({
                    loading: false,
                });
            }
        }

        render() {
            // while checking user session, show "loading" message
            if (this.state.loading) return SplashMessage();

            // otherwise, show the desired route
            return <WrappedComponent {...this.props} />;
        }
    };
}
