import React from 'react'
import Movie from "../components/Movie/Movie";

export default function ({ match }) {
    return (
        <Movie id={match.params.id} />
    )
}