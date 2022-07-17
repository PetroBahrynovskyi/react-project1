import React from "react";
import itemImg from '../images/item-img.webp'; 
class SearchBox extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            searchValue: "",
            detailProduct: null,
            searchQuery : this.props.searchQuery
        }
        this.props = {
            searchValue : this.state.searchValue,
            detailProduct : this.state.detailProduct,
            searchQuery : this.state.searchQuery
        }
    }

     searhProduct = () => {
        const notFoundProduct = [{
            name: "Item not found:(",
            salePrice: "0",
            image: itemImg
        }]
        const sortProduct = this.state.searchQuery.filter((item) => {
            let seekingSentence = item.title.toLowerCase();
            let seekingWord = this.state.searchValue.toLowerCase();
            return seekingWord.length >=3 && seekingSentence.startsWith(seekingWord);
        })
        this.setState({detailProduct : notFoundProduct });
        (this.state.detailProduct.length >=0) ? this.setState({detailProduct : sortProduct}) :
        this.setState({detailProduct : notFoundProduct});
         console.log(this.state.detailProduct);
    }

    render(){
        return(
            <div className="search">
                    <input 
                    value = {this.state.searchValue}
                    onChange={(e) => {this.setState({searchValue: e.target.value})}}
                    type="text"
                    className="search_input"/>
                    <button className="search_btn" onClick={() => this.searhProduct()}>Go</button>
                    <span className="correct-name"></span>
            </div>
        )
    }

}
export default SearchBox;