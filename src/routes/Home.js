import React from 'react'
import Home from "../components/Home/Home";

export default function ({ match }) {
    const page = match.params.page ? match.params.page : 1
    const search = match.params.search ? match.params.search : ''
    return (
        <Home
            search={search}
            page={page}/>
    )
}