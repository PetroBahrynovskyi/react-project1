import React  from 'react';

import Header from '../Header/Header';
import Main from '../Main/Main';

import ProductItem from '../ProductItem/ProductItem';

import './DisplayItemsPage.css';

class  DisplayItems extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            productList: [],
            filteredProductList: [],
            searchValue: "",
            categoryToShow : "",
            displayAllProducts : false,
            
        }
    }


    componentDidMount(){
        this.processData();
    }    

    processData =  () => {
        let url = 'https://fakestoreapi.com/products';
        fetch(url)
            .then((res) => res.json())
            .then(data => {
                this.setState({productList: data});
            });    
    }

    
    displayAllProducts (arr)  {
        return arr.map((item) => {
            return <ProductItem key={'key__' + item.title + '' + item.salePrice + ''} name={item.title} salePrice={item.price} image={item.image} description={this.state.categoryToShow}/>
        })
    }

    displayFilterButtons (arr) {
        return Array.from(new Set(arr.map((item) => item.category))).map((item, i) => {
            return <button key={i} className="category-btn" onClick={() => {this.sortProducts(item)}}>{`${item}`}</button>
        })
    }

    
    getDetailProduct = (handleSearchTxtChange) => {
        this.setState({filteredProductList : handleSearchTxtChange});
    }
    

    getAllProducts = (returnedValue) => {
        this.setState({ displayAllProducts : returnedValue})
    }


    
    render(){
        return (
            <>
            <Header/>  
            <Main
            productItems={this.state.productList}
            getAllProducts={() => this.getAllProducts(true)}
            displayAllProducts={this.state.displayAllProducts}
            onDisplayAllProducts={() => this.displayAllProducts(this.state.productList)}
            />
            </>
        );
    }
}


    
export default DisplayItems;


/*
1. Render (productList = [])
2. ComponentDidMount

*/

/*
    Home Task
1. Events in React (onFocus, OnMouseEnter, OnMouseOver, OnBlur, OnKeyPressed, OnKeyUp, OnKeyDown) => створити 7-8 функцій, юзати івенти
2. Пошук повинен здійснюватись при введенні тексту в інпут, а не при натисканні. Пошук повинен здійснюватись після введенні 3 символів або більше
3. SearchBox - створити окремий компонент
4. OnMouseOver - вивести item.description замість вікна з фото
5.  За допопомгою fetch зробити request на google.com і передати як параметр пошук product.title в гуглі. Взяти посилання на 1 результат в гуглі 

*/

/*
1. Створити компонент SearchResultList. 
2. Кожен компонент повинен мати свою папку і свої стилі
3. Додати кнопки з категоріями. Коли натискаю на кнопку категорії, фільтрую компоненти по категорії  
*/