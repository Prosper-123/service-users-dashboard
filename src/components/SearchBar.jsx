import React from 'react';

const searchBar = ({searchQuerry, setSearchQuerry}) => {
    return (
        <input
        type='text'
        placeholder='Search by ID'
        value={searchQuerry}
        onChange={(e) => setSearchQuerry(e.target.value)}

        style={{
            padding: '10px',
            width: '300px',
            borderRadius: '5px',
            border: '1px solid #ccc',
            fontSize: '16px'
        }}
        /> 
    )
}

export default searchBar