import React from 'react'
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div>
            halo
            <Link to={"/test"}>test</Link>
        </div>
    )
}
