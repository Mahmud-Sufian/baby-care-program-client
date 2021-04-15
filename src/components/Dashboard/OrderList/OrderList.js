import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import OrderTable from '../OrderTable/OrderTable';
import Sidebar from '../Sidebar/Sidebar';

const OrderList = () => {
    const [order, setOrder] = useState([]);

    useEffect(() => {
        fetch(`https://secure-refuge-75906.herokuapp.com/getApply`)
        .then(res => res.json())
        .then(data => setOrder(data))
    },[])

    return (
        <section className="">
            <div className="row">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-10 mt-5">
                        <h3>Order List</h3>
                         <OrderTable order={order}></OrderTable>
                </div>
            </div>
        </section>
    );
};

export default OrderList;