import {useState, useEffect} from 'react';

import {storages, firestores, timestamp} from '../Firebase/config';

const useStorage = (obj, targetCollection) => {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

    // For images
    let file = obj.file;
    let title = obj.title;
    let desc = obj.desc;
    let location = obj.location;
    let email = obj.email;

    // For users
    let username = obj.username;
    let firstname = obj.fname;
    let lastname = obj.lname;
    let password = obj.password;

    let collectionRef;
    let storageRef;

    useEffect(() => {
        switch(targetCollection){
            case "images":
                // Create reference and store new image to the DB
                storageRef = storages.ref(obj.file.name);
                collectionRef = firestores.collection('images');

                storageRef.put(file).on('state_changed', (snap) => {
                    let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
                    setProgress(percentage.toFixed(1));
                }, (err) => {
                    setError(err);
                }, async () => {
                    const url = await storageRef.getDownloadURL();
                    const time = timestamp();
                    await collectionRef.add({url, time, title, desc, location, email});
                    setUrl(url);
                });
                break;
            case "users":
                // Create new user and store user to the DB
                collectionRef = firestores.collection('users');
                let followers = [];
                let followed = [];
                const time = timestamp();
                collectionRef.add({email, username, firstname, lastname, time, followers, followed});
                setUrl("Finished Making");
                break;
        }
       
    }, [file, title, desc, location]);

    return {progress, url, error}
}

export default useStorage;
