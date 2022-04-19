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

    // For users
    let email = obj.email;
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
                    await collectionRef.add({url, time, title, desc, location});
                    setUrl(url);
                });
                break;
            case "users":
                // Create new user and store user to the DB
                collectionRef = firestores.collection('users');
                const time = timestamp();
                collectionRef.add({email, username, firstname, lastname, password, time});
                setUrl("Finished Making");
                break;
        }
       
    }, [file, title, desc, location]);

    return {progress, url, error}
}

export default useStorage;
