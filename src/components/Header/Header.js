import React from 'react';
import SearchBox from '../SearchBox/SearchBox';

import './Header.css';


const Header = (props) => {
    
        return (
            <header className='header'>
                <SearchBox 
                onGetSearch={props.onGetSearch} 
                searchValue={props.searchValue}
                onFilterBySearch={props.onFilterBySearch}
                />  
            </header>
        );
    
}
export default Header;