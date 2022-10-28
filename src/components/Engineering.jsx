import React from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";

const Engineering = () => {
    let navigate = useNavigate()
    let location = useLocation()
    let {engineering} = useParams()
    // console.log(location)
    // console.log(testParam)


    return (
        <div>
            <h1>This is the school of Engineering {engineering}</h1>

            <button onClick={() => navigate('/Schools')}>Click me to go back to my parent </button>
        </div>
    )
}

export default Engineering;