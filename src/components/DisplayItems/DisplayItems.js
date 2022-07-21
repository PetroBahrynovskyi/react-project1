import React  from 'react';
import SearchBox from '../SearchBox/SearchBox';
import ProductList from '../ProductList/ProductList';
import SearchResultList from '../SearchResultList/SearchResultList';
import ProductCategories from '../ProductCategories/ProductCategories';
import './DisplayItems.css';

class  DisplayItems extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            productList: [],
            detailProduct: [],
            searchValue: ""
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
    
    getDetailProduct = (returnedValue) => {
        this.setState({detailProduct : returnedValue});
    }
    
    
    render(){
        
    return (
        <>
            <SearchBox searchItems={this.state.productList} gettingProduct={this.getDetailProduct}/>
            <ProductCategories buttons={this.state.productList} />
            <SearchResultList detailProduct={this.state.detailProduct}/>
            <ProductList list={this.state.productList}/>
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