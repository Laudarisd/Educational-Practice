import React  from "react";

function Logout({ onLogout }) {
    return (
        <div>
            <button onClick={onLogout}>Logout</button>
        </div>
    );
}

export default Logout;