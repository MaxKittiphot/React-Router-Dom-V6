import React from 'react';
import {useNavigate} from "react-router-dom";

function Page1(props) {
    let navigate = useNavigate();
    
    function handleClick() {
        navigate("/")
    }

    return (
        <div>
            This is Page1.
            <button onClick={handleClick}>Change to Homepage</button>
        </div>
    );
}

export default Page1;