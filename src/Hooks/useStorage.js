import {useState, useEffect} from 'react';

import {storages, firestores, timestamp} from '../Firebase/config';

const useStorage = (file, title, desc, location) => {
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
            await collectionRef.add({url, time, title, desc, location});
            setUrl(url);
        });
    }, [file, title, desc, location]);

    return {progress, url, error}
}

export default useStorage;
