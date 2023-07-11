import React from 'react';

const Search = (props) => {
    return(
        <div className="col col-sm-4">
            <input className="form-control" 
            value={props.value}
            onChange={(e)=> props.setSearch(e.target.value)}
             placeholder="I'm looking for..."></input>

        </div>
    )
}

export default Search;