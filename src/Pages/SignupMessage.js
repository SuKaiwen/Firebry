import React, {useEffect} from 'react';

import useStorage from '../Hooks/useStorage';
import { Link } from 'react-router-dom';

function SignupMessage(props) {

    let userObj = props;
    const {url} = useStorage(userObj, "users"); 

    useEffect(() => {
        if (url) {
          props.setEmail(null);
          props.setUsername(null);
          props.setFname(null);
          props.setLname(null);
          props.setPassword(null);
        }
    }, [url]);

    return (
        <div>
            <p>Successfully signed up with Firebry!</p>
            <Link to="/profile"><p>Login to continue</p></Link>
        </div>
    );
}

export default SignupMessage;