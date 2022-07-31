import React, { useState, useEffect }  from 'react';

import SearchBox from '../SearchBox/SearchBox';

import ProductCategoriesFilter from '../ProductCategoriesFilter/ProductCategoriesFilter';
import ProductPriceFilter from '../ProductPriceFilter/ProductPriceFilter';
import ProductRatingFilter from '../ProductRatingFilter/ProductRatingFilter'

import SearchResultList from '../SearchResultList/SearchResultList';

import './DisplayItemsPage.css';

const DisplayItems = () =>  {
 
    const [productList, setProductList] = useState([]);
    const [searchValue, setSearchValue] = useState("");
    const [categoryToShow, setCategoryToShow] = useState("");
    const [priceMin, setPriceMin] = useState('');
    const [priceMax, setPriceMax] = useState('');
    const [ratingValue, setRatingValue] = useState(0);
    const [productsToDisplay, setProductsToDisplay] = useState([]);

    useEffect(() => {
        processData();
    },[]);
    
    const processData = () => {
        let url = 'https://fakestoreapi.com/products';
        fetch(url)
        .then((res) => res.json())
        .then(data => {
            setProductList(data);
            setProductsToDisplay(data);
                
            });    
    }
    /* -------------- handlers -------------- */

    const handleMinPriceChange = (chosenPrice) => {
        setPriceMin(chosenPrice);
    }

    const handleMaxPriceChange = (chosenPrice) => {
        setPriceMax(chosenPrice);
    }

    const handleSearchValue = (searchedText) => {
        setSearchValue(searchedText);
    }

    /* Function that work with data from form */
    
     const showAllProducts = () => {
        const returnedArray = productList.map((item) => item);
        setProductsToDisplay(returnedArray);
        return returnedArray;
    } 
    const filterByCategories = (selectedCategory) => {
        const returnedArray = productList.filter((elem) => elem.category === selectedCategory);
        setProductsToDisplay(returnedArray);
        return returnedArray;
    } 
    const filterByPrice = () => {   
        const returnedArray = productsToDisplay.filter((elem) => elem.price >= priceMin &&  elem.price <= priceMax);
        setProductsToDisplay(returnedArray);
        return returnedArray;
    } 

    const filterByRating = (rating) => {
        console.log(rating);
        const returnedArray = productsToDisplay.filter((elem) => {
            return (elem.rating.rate < 3 && Math.trunc(elem.rating.rate) === +rating) ||  (Math.ceil(elem.rating.rate) === +rating);
       });
       setProductsToDisplay(returnedArray);
       return returnedArray;
    }

    const filterBySearch = () => {
        const returnedArray = productsToDisplay.filter((item) => {
            let seekingSentence = item.title.toLowerCase();
            let seekingWord = searchValue.toLowerCase();
            return seekingWord.length >=3 && seekingSentence.startsWith(seekingWord);
        });
        setProductsToDisplay(returnedArray);
        return returnedArray;
    }

    /*---- */

    const getCategoriesFromProductList  = () =>  {
        return Array.from(new Set(productList.map((item) => item.category))).map((item, i) => {
            return item;      
        })
    }

    const getRatingFromProductList = () => {
        return Array.from(new Set(productList.map(item => item.rating.rate < 3 ? Math.trunc(item.rating.rate) : Math.ceil(item.rating.rate)))).sort();
    }


    const categories = getCategoriesFromProductList();
    const rating = getRatingFromProductList();

    
    return (             
            <>
            <SearchBox 
                onSearchValueChange={handleSearchValue}
                onFilterBySearch={filterBySearch}
             />
            <div className='sidebar'>
                <ProductCategoriesFilter 
                    categoryList={categories} 
                    onShowAllProducts={showAllProducts}
                    onFilterByCategories={filterByCategories} 
                />
                <ProductPriceFilter 
                    onMinPriceChange={handleMinPriceChange} 
                    onMaxPriceChange={handleMaxPriceChange}
                    onFilterByPrice={filterByPrice}
                />
                <ProductRatingFilter 
                    ratingList={rating} 
                    onFilterByRating={filterByRating}
                />
            </div>
            <SearchResultList 
                productsToDisplay={productsToDisplay}

                />  
            </>
    );
}

    
export default DisplayItems;

