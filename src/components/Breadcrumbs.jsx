import { Link } from "react-router-dom";

const Breadcrumbs = () => {
    return (
        <div className="breadcrumbs text-sm">
            <ul>
                <li><Link>Home</Link></li>
                <li><Link to={".."}>Documents</Link></li>
            </ul>
        </div>
    )
}

export default Breadcrumbs
