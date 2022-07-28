import React from 'react';


import Sidebar from '../Sidebar/Sidebar';
import Products from '../Products/Products';


import './Main.css'

const Main = (props) => {

    return(
            <section className='main'>
                <Sidebar 
                    productItems={props.productItems}
                    onGetCategoryButtons={props.onGetCategoryButtons}
                    onGetPriceMin={props.onGetPriceMin}
                    onGetPriceMax={props.onGetPriceMax}
                    onGetRating={props.onGetRating}
                    ratingValue={props.ratingValue}
                    productsToDisplay={props.productsToDisplay}
                    onShowAllProducts={props.onShowAllProducts}
                    onFilterByCategories={props.onFilterByCategories}
                    onFilterByPrice={props.onFilterByPrice}
                    onFilterByRating={props.onFilterByRating}

                />
                <Products
                    productItems={props.productItems}
                    categoryToShow={props.categoryToShow} 
                    onDisplayAllProducts={() => props.onDisplayAllProducts(props.productItems)}
                    onDisplayFilterButtons={() => props.onDisplayFilterButtons(props.productItems)}
                    productsToDisplay={props.productsToDisplay}


                />
            </section>
        );
}
export default Main;