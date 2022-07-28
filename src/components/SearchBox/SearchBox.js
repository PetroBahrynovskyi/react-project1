import React from "react";
import './SearchBox.css';
const SearchBox = (props) =>  {



    return(
            <div className="search">
                    <input 
                        value = {props.searchValue}
                        onChange={(e) => {props.onGetSearch(e.target.value)}}
                        type="text"
                        className="search_input"/>
                    <button className="search_btn" onClick={() => {props.onFilterBySearch()}}>Search</button>                    

            </div>
        )
}
export default SearchBox;