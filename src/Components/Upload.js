import React, {useState} from 'react';

import "./Upload.css";

import UploadMessage from './UploadMessage';

function Upload(props) {

    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);

    // for validation
    const types = ['image/png', 'image/jpeg'];

    const changeHandler = (e) => {
        let selectedFile = e.target.files[0];

        if(selectedFile && types.includes(selectedFile.type)){
            setFile(selectedFile);
            setError(null);
        } else {
            setFile(null);
            setError("Select a valid image file (png or jpeg)");
        }
    }

    return (
        <div>
            <form>
                <button className = 'upload-btn'><i class="fa-solid fa-plus"></i></button>
                <input type="file" onChange = {changeHandler} />
                <div>
                    {error && <p>{error}</p>}
                    {file && <p>Selected image: {file.name}</p>}
                </div>
                {file && 
                <UploadMessage 
                    file={file}
                />}
            </form>
        </div>
    );
}

export default Upload;