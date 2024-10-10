import React from 'react';

function SearchBar(){
    return(
        <div className='searchbar'>
            <div className="searchbar-options">
                <button>Best Match</button>
                <button>Highest Rating</button>
                <button>Most Reviewed</button>
            </div>
            <div className='searchbar-inputs'>
                <input type="text" placeholder="Search Businesses"></input>
                <input type="text" placeholder="Where?"></input>
            </div>
            <div className='searchbar-submit'>
                <button>Let's Go</button>
            </div>
        </div>
    )
}

export default SearchBar;