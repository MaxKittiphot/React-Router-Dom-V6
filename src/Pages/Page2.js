import React from 'react';
import {useParams} from "react-router-dom";

function Page2(props) {
    const {name} = useParams();

    return (
        <div>
            Welcome {name} to Page2!
        </div>
    );
}

export default Page2;