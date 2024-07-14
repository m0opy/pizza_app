import { Link } from "react-router-dom"

export function Error () {
    return ( 
        <>
        <div>
            <Link to="/">Menu</Link>
            <Link to="/card">Card</Link>
            <Link to="*">Error</Link>
        </div>
        <p>Error</p>
        </>
    )
}
