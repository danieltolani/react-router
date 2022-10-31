// import React from "react";
import { useState, useEffect } from "react";

export const UserFetch = () => {
    const [userArray, setUserArray] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    
    useEffect(() => {
        setIsLoading(true)
        fetch('https://randomuser.me/api/?results=100')
            .then((res) => res.json)
            .then((data) => {
                setIsLoading(false)
                setUserArray(data)})
    }, []);

    console.log(userArray)
    console.log(isLoading)
}