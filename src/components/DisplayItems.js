import React, {useState, useEffect } from 'react';
import '../styles/general.css';
import ProductItem from './ProductItem';
import SearchBox from './SearchBox';
import itemImg from '../images/item-img.webp';

const  DisplayItems  = () =>  {

    const [productList, setProductList] = useState([]);
    const [detailProduct, setDetailProduct] = useState([]);
    const [searchValue, setSearchValue] = useState("");

    useEffect(() => {
        processData();
    });


    const processData =  () => {
        let url = 'https://fakestoreapi.com/products';
            fetch(url)
            .then((res) => res.json())
            .then(data => {
                setProductList(data);
            });    
    } 
    

    return (
        <>
            <SearchBox searchQuery={productList}/>
            <span className='space'></span>
            <span className='list-of-found'>
                {/* Why it doesn't work?) */}
                {detailProduct.length >=0 ? detailProduct.map((item) => {
                    return <ProductItem key={'key__' + item.title + '' + item.salePrice + ''} name={item.title} salePrice={item.price} image={item.image}/>
                }) : <ProductItem name="" salePrice="" image={itemImg}/>}
            </span>
            <span className='space'></span>
                <div className='products-wrapper'>   
                    
                    {productList.map((item) =>{
                        return <ProductItem key={'key__' + item.title + '' + item.salePrice + ''} name={item.title} salePrice={item.price} image={item.image} />
                    })
                    }
            </div>
        </>
    );
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