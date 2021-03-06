import React, {useEffect} from 'react';

import useStorage from '../Hooks/useStorage';
import { Link } from 'react-router-dom';

function SignupMessage(props) {

    let userObj = props;
    const {url} = useStorage(userObj, "users"); 

    return (
        <div>
            <p>Successfully signed up with Firebry!</p>
            <Link to="/"><p>Login to continue</p></Link>
        </div>
    );
}

export default SignupMessage;