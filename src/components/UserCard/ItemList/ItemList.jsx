import React, { useState, useEffect } from 'react';
import ItemListContainer from '../ItemListContainer';

// mi archivo JSON:
import prueba from './prueba.json';

const CardList = () => {
    const [productList, setProductList] = useState([]);

    console.log(productList);


    useEffect(() => {
        const myPromise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(prueba);
            }, 2000);
        });

        myPromise.then((response) => {
            setProductList(response)
        })
    }, []);


    return (
        <div className="ItemList">
            <h1>Product List</h1>

            {productList.map((product) => {
                return (
                    <div key="{product.id}">
                        <ItemListContainer data={product} />
                    </div>
                );
            })}

        </div>
    );
};

export default CardList;
