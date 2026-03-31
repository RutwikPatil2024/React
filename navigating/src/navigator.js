import { Link } from "react-router-dom";

function Navigator() {
    return (
        <div>
            <Link to="/user/anil">Anil</Link><br></br>
            <Link to="/user/Peter">Peter</Link>
        </div>
    );
}

export default Navigator;