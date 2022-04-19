import React, {useState, useEffect} from 'react';

import './Search.css';

import useFirestore from '../Hooks/useFirestore';


function Search(props) {

    // Get the query string...
    const params = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => searchParams.get(prop),
    });

    const [results, setResults] = useState([]);
    const [load, setLoad] = useState(false);

    const { docs } = useFirestore('users');

    useEffect(() => {
        let tempResults = [];
        docs.forEach(user => {
            if(user.username.includes(params.keyword)){
                tempResults.push(user);
            }
        });
        console.log(params.keyword);
        console.log(tempResults);
        setResults(tempResults);
        setLoad(true);

        return () => {
            setLoad(false);
            setResults([]);   
        };
    }, []);

    return (
        <div className = "page-container">
            <div className = "search-container">
                <p>Showing results for... {params.keyword}</p>
                {load ? 
                <>
                    {results.map(result => {return (
                        <div className = "row search">
                            <i class="fa-solid fa-circle-user"></i>
                            <p>{result.username}</p>
                            <button>Follow</button>
                        </div>
                    )})}
                </>:<h1>Woops, something went wrong!</h1>
                }           
            </div>
        </div>
    );
}

export default Search;