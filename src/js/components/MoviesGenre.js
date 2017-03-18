import React from 'react';

class MoviesGenre extends React.Component {
    render() {
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h2 className="panel-title">List of {this.props.params.genre} movies</h2>
                </div>
                <div className="panel-body">
                    <p>(list of movies)</p>
                </div>
            </div>
        );
    }
}

export default MoviesGenre;
