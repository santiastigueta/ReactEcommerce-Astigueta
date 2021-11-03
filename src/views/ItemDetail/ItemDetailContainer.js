import React, { useEffect, useState } from 'react';
import Spinner from '../../components/Loader/Loader';
import ItemDetail from './ItemDetail';
import misProductos from './productos';

const ItemDetailContainer = ({ match }) => {
    const productID = match.params.id;

    const [product, setProduct] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {

        misProductos(productID)
            .then(item => {
                setProduct(item);
                setIsLoading(false);
            });
    });
    console.log(product);
    return (
        <>
            {isLoading ? <Spinner /> : <ItemDetail item={product} />}
        </>
    );
}

export default ItemDetailContainer;
