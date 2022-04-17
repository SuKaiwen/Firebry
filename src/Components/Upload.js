import React, {useState} from 'react';

import "./Upload.css";

import UploadMessage from './UploadMessage';

function Upload(props) {

    const [uploadStory, setUploadStory] = useState(false);
    const [upload, setUpload] = useState(false);

    // Fields
    const [title, setTitle] = useState(null);
    const [desc, setDesc] = useState(null);
    const [location, setLocation] = useState(null);
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);

    // For validation
    const types = ['image/png', 'image/jpeg'];

    const uploadFile = () => {
        if(title && desc && location && file){
            setUploadStory(false);
            setUpload(true);
        }
    }

    // Change files
    const changeTitle = (e) => {
        let selectedTitle = e.target.value;
        if(selectedTitle){
            setTitle(selectedTitle);
        }
    }

    const changeDescription = (e) => {
        let selectedDesc = e.target.value;
        if(selectedDesc){
            setDesc(selectedDesc);
        }
    }

    const changeLocation = (e) => {
        let selectedLoc = e.target.value;
        if(selectedLoc){
            setLocation(selectedLoc);
        }
    }

    const changeFile = (e) => {
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
            <button onClick = {() => setUploadStory(!uploadStory)} className = "upload-btn"><i class="fa-solid fa-plus"></i></button>
            <p>Upload a story</p>
            {uploadStory &&
                <div className = "form-setup">
                    <p>Title</p>
                    <input type="text" onChange = {changeTitle}/>
                    <p>Description</p>
                    <input type="text" onChange = {changeDescription}/>
                    <p>Location</p>
                    <input type="text" onChange = {changeLocation}/>
                    <p>Upload Image</p>
                    <form>
                        <input type="file" onChange = {changeFile} />
                        <div>
                            {error && <p>{error}</p>}
                        </div>
                    </form>
                    <button onClick = {uploadFile}>Upload</button>
                </div>
            }
            {(file && upload) && 
            <UploadMessage 
                file={file}
                title = {title}
                desc = {desc}
                location = {location}
                setFile = {setFile}
                setTitle = {setTitle}
                setDesc = {setDesc}
                setLocation = {setLocation}
            />}
            
        </div>
    );
}

export default Upload;