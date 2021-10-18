import axios from 'axios';
import React, { useState, useEffect } from 'react';
import prueba from './prueba.json';
import ItemList from './ItemList/ItemList';
import Spinner from '../Loader/Loader';

const ItemListContainer = () => {
    const [productList, setProductList] = useState([]);
    const [isloading, setIsLoading] = useState(false);

    console.log(productList);

    useEffect(() => {
        setIsLoading(true)
        axios('https://breakingbadapi.com/api/characters').then((json) =>
            setProductList(json.data)
        );
        setIsLoading(false)
    }, []);


    return (
        <div className="ItemListContainer">
            {isloading ? <Spinner /> : <ItemList data={productList} />}
        </div>

    );
}

export default ItemListContainer;

