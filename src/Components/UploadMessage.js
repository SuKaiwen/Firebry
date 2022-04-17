import React from 'react';

import useStorage from '../Hooks/useStorage';

function UploadMessage(props) {

    const { progress, url } = useStorage(props.file); 

    return (
        <div>
            <p>Sucessfully uploaded: {props.file.name}</p>
        </div>
    );
}

export default UploadMessage;