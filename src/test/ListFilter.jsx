import React, { useState, useEffect  } from "react";


export default function FilterList() {

    const list = ["Apple", "Banana", "Orange", "Mango", "Grapes"];
    const [search, setSearch] = useState("");
    const [debouncedSearch, setDebouncedSearch]= useState("");

     // Debounce logic
    useEffect (() => {

        const timer = setTimeout(() => {
            setDebouncedSearch(search);
        }, 900);  // run after 900ms

        return () => clearTimeout(timer);  // cleanup on type

    }, [search]);

        // Filter using the debounced value
    const filteredList = list.filter(item => item.toLowerCase().includes(debouncedSearch.toLowerCase()));

    function input(t) {
        setSearch(t);
    }

    return (

        <div style={{ fontSize: "30px", color: "red" }}>
            <input type="text" onChange={(e) => input(e.target.value)} />
            
            <ul>
                {
                //if you want write ui code in { } use ( )
                filteredList.length===0 ?
                (<p>No Item Found</p>):
                (filteredList.map((item, index) => (<li key={index}>{item}</li>)))
                
                }

            </ul>


        </div>
    );
}
