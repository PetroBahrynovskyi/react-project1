import React from "react";


import ProductCategoriesFilter from "../ProductCategoriesFilter/ProductCategoriesFilter";
import ProductRatingFilter from "../ProductRatingFilter/ProductRatingFilter";
import ProductPriceFilter from "../ProductPriceFilter/ProductPriceFilter";


import './Sidebar.css'

class Sidebar extends React.Component {
    constructor(props){
        super(props);
    }
    
    render(){
        
        return(
            <div className="sidebar">
                <ProductCategoriesFilter
                productItems={this.props.productItems}
                getAllProducts={() => this.props.getAllProducts(true)}
                 />
                 <ProductPriceFilter/>
                 <ProductRatingFilter/>
            </div>
        );
    }
}
export default Sidebar;

/*
1. Стврити ProductPriceFilter - два текстових поля (від і до) 
2. Створити ProductRatingFilter - select (у якому рейтинги 1.2.3.4.5) і при тому на який компонент я натискаю -> показує продукти за цим рейтингом 
3. Синхронізувати пошук для всіх елементів, пошук працює по тих елементах, які відображаються на сторінці
4. Зробити нормальні стилі

*/