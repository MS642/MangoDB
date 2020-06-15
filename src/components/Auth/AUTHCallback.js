import React, { useEffect } from 'react';
import { useAuth } from "react-use-auth"

const AUTHCallback = () => {
    const { handleAuthentication } = useAuth();
    useEffect(() => {
        handleAuthentication({ postLoginRoute: "/feed" });
    }, []);

    return (
        <h1>
            You should be redirected immediately.
        </h1>
    )
}

export default AUTHCallback;