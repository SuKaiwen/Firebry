import React, {useState, useEffect} from 'react';
import { firestores } from '../Firebase/config';

const useFirestore = (collection) => {
    const [docs, setDocs] = useState([]);

    useEffect(() => {
        const unsub = firestores.collection(collection)
        .orderBy('time', 'desc')
        .onSnapshot((snap) => {
            let documents = [];
            snap.forEach(doc => {
                documents.push({...doc.data(), id: doc.id})
            })
            setDocs(documents);
        })

        return () => unsub();
    }, [collection])

    return { docs };
}

export default useFirestore;