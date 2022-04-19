import React, { useEffect }  from 'react';

import useStorage from '../Hooks/useStorage';

const UploadMessage = ({file, title, desc, location, setFile, setTitle, setDesc, setLocation, email}) => {

    const storageObj = {file, title, desc, location, email}

    const {progress, url, error} = useStorage(storageObj, "images"); 

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