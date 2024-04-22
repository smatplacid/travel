import React, { Component } from 'react';
import logo from '../logo1.png';
import './splash-screen.css';

const splashClass = "splash-screen";

function SplashMessage() {
    return (
        <div className={splashClass}>
            <img src={logo} className="App-logo" alt="logo" />
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
                // Put here your await requests/ API requests
                setTimeout(() => {
                    this.setState({
                        loading: false,
                    });
                }, 80000)
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