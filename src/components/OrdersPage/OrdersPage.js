import React, {useState} from "react";
import SearchBox from "../SearchBox/SearchBox";

const OrderPage = () => {
    const [searchValue, setSearchValue] = useState('');
    const [filteredOrders, setFilteredOrders] = useState([]);

    const orders = [
        {
            orderId: 1,
            productId: 2213,
            orderTotalAmount: 320,
            orderClient: `John`,  
        },
        {
            orderId: 2,
            productId: 4718,
            orderTotalAmount: 470,  
        }
    ]

    handleTxtChange = (changedTxt) => {
        setSearchValue(changedTxt);
        setFilteredOrders(arr.filter((item) => item.productId === changedTxt));
        // to-do: 

    }


 

    return (
    <>
           <SearchBox 
                    onTxtChange={handleTxtChange} 
                    searchValue={searchValue}
                /> 
        <ul>
            {orders.map((item, id) => {
                return <li key={id}>
                        <p>Id: {item.orderId}</p>
                        <p>ProductId : {item.productId}</p>
                        <p>Total amount :{item.orderTotal}</p>
                       </li>
            })}
        </ul>
        <SearchResultList/>
    </>
    );
}

export default OrderPage;

