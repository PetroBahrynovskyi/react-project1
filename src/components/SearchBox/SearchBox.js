import React from "react";
import './SearchBox.css';
class SearchBox extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            searchList: [],
            filteredProductList: [],
            searchValue: ""
        }
    }

    componentDidMount(){
       
    }
    
    searhProduct = () => {
        this.props.gettingProduct(this.state.filteredProductList);
        const arr = [...this.props.searchItems];
        const sortProduct = arr.filter((item) => {
            let seekingSentence = item.title.toLowerCase();
            let seekingWord = this.state.searchValue.toLowerCase();
            return seekingWord.length >=3 && seekingSentence.startsWith(seekingWord);
        });
        
        (this.state.detailProduct.length >=0) ? this.setState({detailProduct : sortProduct}) :
        this.setState({detailProduct : `Product not Found`});
    }
    
    render(){
        
        return(
            <div className="search">
                    <input 
                    value = {this.state.searchValue}
                    onChange={(e) => {this.setState({searchValue: e.target.value})}}
                    type="text"
                    className="search_input"/>
                    <button className="search_btn" onClick={() => {this.searhProduct()}}>Search</button>                    

            </div>
        )
    }

}
export default SearchBox;