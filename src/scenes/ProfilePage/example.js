import * as React from "react";
import {useAuth} from "react-use-auth";


const ExampleProfile = () => {
    const { user } = useAuth();

    return(
        <h1>Email: {user.name}</h1>
    );
}

export default ExampleProfile;