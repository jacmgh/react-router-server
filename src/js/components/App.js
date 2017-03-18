import React from 'react';
import {Link} from 'react-router';

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <nav className="navbar navbar-default">
                    <ul className="nav navbar-nav">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/actors">Actors</Link>
                        </li>
                        <li>
                            <Link to="/movies">Movies</Link>
                        </li>
                    </ul>
                </nav>

                {this.props.children}

                <footer className="text-center">
                    <hr/>
                    &copy; 2017
                </footer>
            </div>
        );
    }
}

export default App;
