import React, { useState, useEffect }  from 'react';

import SearchBox from '../SearchBox/SearchBox';

import ProductCategoriesFilter from '../ProductCategoriesFilter/ProductCategoriesFilter';
import ProductPriceFilter from '../ProductPriceFilter/ProductPriceFilter';
import ProductRatingFilter from '../ProductRatingFilter/ProductRatingFilter'

import SearchResultList from '../SearchResultList/SearchResultList';

import ProductItemDetails from '../ProductItemDetails/ProductItemDetails';

import './DisplayItemsPage.css';

const DisplayItems = () =>  {
 
    const [productList, setProductList] = useState([]);
    const [searchValue, setSearchValue] = useState("");
    const [categoryToShow, setCategoryToShow] = useState("All");
    const [priceMin, setPriceMin] = useState(0);
    const [priceMax, setPriceMax] = useState(999999);
    const [ratingValue, setRatingValue] = useState("All");
    const [productsToDisplay, setProductsToDisplay] = useState(productList);
    const [detailedProductToshow, setDetailedProductToshow] = useState();

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
        setPriceMin(+chosenPrice);
    }

    const handleMaxPriceChange = (chosenPrice) => {
        setPriceMax(+chosenPrice);
        //1 priceMin new value will be set to chosenPrice
        //2 DiplayItemsPage gets rerendered
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
    const handleCategoryChange = (selectedCategory) => {
        setCategoryToShow(selectedCategory);
        filterByAllSelecteadFilter();
    } 
    const filterByPrice = (pricemin, pricemax) => {
        setPriceMin(pricemin);
        setPriceMax(pricemax);

        filterByAllSelecteadFilter();
    } 

    const handleRatingChange = (rating) => {
        setRatingValue(rating);
        filterByAllSelecteadFilter();
    }


    console.log({
        priceMin: priceMin,
        priceMax: priceMax,
        searchValue: searchValue,
        ratingValue: ratingValue,
        categoryToShow: categoryToShow
    });

    const showDetailsProduct = (name) => {
        
        let detailedProduct = productList.filter((item) => item.title === name);
        setDetailedProductToshow(...detailedProduct);
        console.log(detailedProductToshow);
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
    const produtRatingList = getRatingFromProductList();
    
    const filterByAllSelecteadFilter = () => {
        let filteredArray = productList.filter((elem) => 
            elem.price >= priceMin && elem.price <= priceMax
        );
        if (searchValue != '') {
            filteredArray = filteredArray.filter((elem) => elem.title.indexOf(searchValue) >= 0 )
        }

        if (categoryToShow != 'All') {
            filteredArray = filteredArray.filter((elem) => elem.category == categoryToShow)
        }
        
        if (ratingValue != "All") {
            filteredArray = filteredArray.filter((elem) => elem.rating.rate >= +(ratingValue)-1);
        }
        return filteredArray;
    }

    const fileredResults = filterByAllSelecteadFilter();
    

    return (             
        <>
            <SearchBox onSearchValueChange={handleSearchValue} />
            
            <div className='sidebar'>
                <ProductCategoriesFilter 
                    categoryList={categories} 
                    onCategoryChange={handleCategoryChange}
                />
                <ProductPriceFilter 
                    onMinPriceChange={handleMinPriceChange} 
                    onMaxPriceChange={handleMaxPriceChange}
                    onFilterByPrice={filterByPrice}
                />
                <ProductRatingFilter 
                    ratingList={produtRatingList} 
                    onRatingChange={handleRatingChange}
                />
            </div>
            <SearchResultList
                productsToDisplay={fileredResults}
                onShowDetailsProduct={showDetailsProduct}
            />
            {/* <ProductItemDetails productsToDisplay={productsToDisplay} detailedProductToshow={detailedProductToshow} />  
             * */}
                
            </>
    );
}



    
export default DisplayItems;

