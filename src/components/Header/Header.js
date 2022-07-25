import React from 'react';
import SearchBox from '../SearchBox/SearchBox';

import './Header.css';


class Header extends React.Component {
    render(){
        return (
            <header className='header'>
                <SearchBox /* searchItems={this.state.productList}  gettingProduct={this.getDetailProduct} */ />  
            </header>
        );
    }
}
export default Header;