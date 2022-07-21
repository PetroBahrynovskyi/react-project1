import React from "react";
import itemImg from '../images/item-img.webp'; 
class SearchBox extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            searchList: [],
            detailProduct: [],
            searchValue: ""
        }
    }

    componentDidMount(){
       
    }
    
    searhProduct = () => {
        this.props.gettingProduct(this.state.detailProduct);
        const arr = [...this.props.searchItems];
        console.log(this.state.searchValue);
       
        console.log(arr);
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
                    <button className="search_btn" onClick={() => {this.searhProduct()}}>Go</button>                    

            </div>
        )
    }

}
export default SearchBox;