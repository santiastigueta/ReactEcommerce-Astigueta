
import React, { useState, useEffect } from 'react';
import itemsMock from './productos';
import ItemList from './ItemList/ItemList';
import Spinner from '../Loader/Loader';


const ItemListContainer = ({ match }) => {

    const categoriaID = match.params.id;
    const [productList, setProductList] = useState([]);
    const [isloading, setIsLoading] = useState(true);



    useEffect(() => {
        setIsLoading(true);
        setProductList([]);

        itemsMock(categoriaID)
            .then((productList) => {
                setProductList(productList);
                setIsLoading(false);
            });
    }, [categoriaID]);

    console.log(productList)
    return (
        <>
            {isloading ? <Spinner /> : <ItemList productList={productList} />}
        </>

    );
}

export default ItemListContainer;

