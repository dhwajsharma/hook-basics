import React, { useEffect } from 'react'

const Hello = () => {

    useEffect(() => {
        console.log("render");

        return () => {
            console.log("unmount");
        }
    }, []);

    return (
        <div>
            <h2>hi</h2>
        </div>
    )
}

export default Hello
