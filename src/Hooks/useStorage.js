import React, {useState, useEffect} from 'react';

import {storages, firestores, timestamp} from '../Firebase/config';

const useStorage = (file) => {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

    useEffect(() => {

        // Create reference
        const storageRef = storages.ref(file.name);
        const collectionRef = firestores.collection('images');

        storageRef.put(file).on('state_changed', (snap) => {
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
            setProgress(percentage);
        }, (err) => {
            setError(err);
        }, async () => {
            const url = await storageRef.getDownloadURL();
            const time = timestamp();
            collectionRef.add({url, time});
            setUrl(url);
        });
    }, [file]);

    return {progress, url, error}
}

export default useStorage;