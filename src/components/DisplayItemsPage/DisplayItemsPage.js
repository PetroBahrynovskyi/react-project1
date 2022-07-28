import React, { useState, useEffect }  from 'react';

import Header from '../Header/Header';
import Main from '../Main/Main';

import './DisplayItemsPage.css';

const DisplayItems = () =>  {
 
    const [productList, setProductList] = useState([])
    const [searchValue, setSearchValue] = useState("")
    const [categoryToShow, setCategoryToShow] = useState("")
    const [priceMin, setPriceMin] = useState(0);
    const [priceMax, setPriceMax] = useState(0);
    const [ratingValue, setRatingValue] = useState(0);
    const [productsToDisplay, setProductsToDisplay] = useState(productList);


    useEffect(() => {
        processData();
      },[]);

    const processData = () => {
        let url = 'https://fakestoreapi.com/products';
        fetch(url)
            .then((res) => res.json())
            .then(data => {
                setProductList(data);
            });    
    }
    
   
    /* -------------- handlers -------------- */

    const handleValue = (value, setValue) => {
      return setValue(value);
    }

    const getCategory = (handleGetCategory) => {
        setCategoryToShow(handleGetCategory);
    }

    const getPriceMin = (handlePriceChange) => {
        setPriceMin(handlePriceChange);
    }
    
    const getPriceMax = (handlePriceChange) => {
        setPriceMax(handlePriceChange);
    }

    const getRating = (handlerRatingValue) => {
        setRatingValue(handlerRatingValue);
        console.log(ratingValue);
    }
    
    const getSearch = (handlerRatingValue) => {
        setSearchValue(handlerRatingValue);
    }
    
    /* Function that work with data from form */
    
     const showAllProducts = (arr) => {
        const returnedArray = arr.map((item) => item);
        setProductsToDisplay(returnedArray);
        return returnedArray;
    } 
    const filterByCategories = (arr) => {   
        const returnedArray = arr.filter((elem) => elem.category === categoryToShow);
        setProductsToDisplay(returnedArray);
        return returnedArray;
    } 
    const filterByPrice = (arr) => {   
        const returnedArray = arr.filter((elem) => elem.price >= priceMin &&  elem.price <= priceMax);
        setProductsToDisplay(returnedArray);
        return returnedArray;
    } 
    const filterByRating = (arr) => {
        const returnedArray = arr.filter((elem) => {
            return (elem.rating.rate < 3 && Math.trunc(elem.rating.rate) === ratingValue) ||  (Math.ceil(elem.rating.rate) === ratingValue);
       });
       setProductsToDisplay(returnedArray);
       return returnedArray;
    }

    const filterBySearch = (arr) => {
        const returnedArray = arr.filter((item) => {
            let seekingSentence = item.title.toLowerCase();
            let seekingWord = searchValue.toLowerCase();
            return seekingWord.length >=3 && seekingSentence.startsWith(seekingWord);
        });
        setProductsToDisplay(returnedArray);
        return returnedArray;
    }



    return (
                        
            <>
            <Header 
                onGetSearch={getSearch} 
                searchValue={searchValue}   
                onFilterBySearch={() => filterBySearch(productsToDisplay)}
            />
            <Main
                productItems={productList}
                onGetCategoryButtons={getCategory}
                onGetPriceMin={getPriceMin}
                onGetPriceMax={getPriceMax}
                ratingValue={ratingValue}
                onGetRating={getRating}
                
                productsToDisplay={productsToDisplay}
                /*------ */
                onShowAllProducts={() =>  showAllProducts(productList)}
                onFilterByCategories={() => filterByCategories(productList) }
                onFilterByPrice={() => filterByPrice(productsToDisplay)}
                onFilterByRating={() => filterByRating(productsToDisplay)}
            />
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

/*
1. Створити компонент SearchResultList. 
2. Кожен компонент повинен мати свою папку і свої стилі
3. Додати кнопки з категоріями. Коли натискаю на кнопку категорії, фільтрую компоненти по категорії  
*/

 /*
        
        let filteredProducts = filteredProducts.filter((item) => {
            return this.state.rating == item.rating;
        })

         filteredProducts = filteredProducts.filter((item) => {
            return this.state.categoryToShow == item.category;
        })


        this.setState({filteredProducts : filteredProducts})


        //1 searchValue ranting  || categoryToShow | | priceMin & priceMax |


        //2 productList

        //3 result
*/
