import React, { useEffect }  from 'react';

import useStorage from '../Hooks/useStorage';

const UploadMessage = ({file, title, desc, location, setFile, setTitle, setDesc, setLocation}) => {

    const {progress, url, error} = useStorage(file, title, desc, location); 
    console.log("hello")

    useEffect(() => {
        if (url) {
          setFile(null);
          setTitle(null);
          setDesc(null);
          setLocation(null);
        }
    }, [url, setFile]);

    return (
        <div>
            <p>{progress}%</p>
            {error && <p>Something went wrong!</p>}
            {!error && <p>Sucessfully uploaded: {file.name}</p>}
        </div>
    );
}

export default UploadMessage;