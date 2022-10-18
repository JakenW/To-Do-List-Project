import React from 'react';

/*
            {movie.release_date}
*/

export const MovieItem = ({ movie }) => {
    return (
        <div>
            {movie.title}
        </div>
    );
};