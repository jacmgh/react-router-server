import React from 'react';
import {Link} from 'react-router';

class Movies extends React.Component {
    render() {
        const genres = [
            {id: 1, name: 'Action', slug: 'action', count: 126},
            {id: 2, name: 'Comedy', slug: 'comedy', count: 218},
            {id: 3, name: 'Horror', slug: 'horror', count: 48}
        ];

        return (
            <div>
                <h1>Movies</h1>
                <div className="row">
                    <nav className="col-md-3">
                        <div className="list-group">

                            {genres.map(genre => <Link key={genre.id} className="list-group-item" activeClassName="active" to={`/movies/${genre.slug}`}>
                                <span className="badge">{genre.count}</span>
                                {genre.name}
                            </Link>)}

                        </div>
                    </nav>
                    <div className="col-md-9">

                        {this.props.children || (
                            <div className="alert alert-info">Select genre on the left</div>
                        )}

                    </div>
                </div>
            </div>
        );
    }
}

export default Movies;
