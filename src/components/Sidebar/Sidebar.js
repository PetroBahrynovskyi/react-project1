import React from "react";


import ProductCategoriesFilter from "../ProductCategoriesFilter/ProductCategoriesFilter";
import ProductRatingFilter from "../ProductRatingFilter/ProductRatingFilter";
import ProductPriceFilter from "../ProductPriceFilter/ProductPriceFilter";


import './Sidebar.css'

const Sidebar = (props) =>  {

        return(
            <div className="sidebar">
                <ProductCategoriesFilter
                    productItems={props.productItems}
                    onGetCategoryButtons={props.onGetCategoryButtons}
                    productsToDisplay={props.productsToDisplay}
                    onShowAllProducts={props.onShowAllProducts}
                    onFilterByCategories={props.onFilterByCategories}
                    

                 />
                 <ProductPriceFilter
                    productsToDisplay={props.productsToDisplay}
                    productItems={props.productItems}
                    onGetPriceMin={props.onGetPriceMin}
                    onGetPriceMax={props.onGetPriceMax}
                    onFilterByPrice={props.onFilterByPrice}
                    />
                 <ProductRatingFilter
                    productsToDisplay={props.productsToDisplay}
                    productItems={props.productItems}
                    onGetRating={props.onGetRating}
                    ratingValue={props.ratingValue}
                    onFilterByRating={props.onFilterByRating}
                 />
            </div>
        );
    }

export default Sidebar;

/*
1. Стврити ProductPriceFilter - два текстових поля (від і до) 
2. Створити ProductRatingFilter - select (у якому рейтинги 1.2.3.4.5) і при тому на який компонент я натискаю -> показує продукти за цим рейтингом 
3. Синхронізувати пошук для всіх елементів, пошук працює по тих елементах, які відображаються на сторінці
4. Зробити нормальні стилі

*/