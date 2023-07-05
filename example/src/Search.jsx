import React from "react";

const Search=(props)=>{
    
    return (
        <div className="se">
          <input
            type="text"
            value={props.inputValue}
            onChange={props.onInputChange}
          />
          <button onClick={handleClick}>{props.buttonLabel}</button>
        </div>
      );
};
export default Search;