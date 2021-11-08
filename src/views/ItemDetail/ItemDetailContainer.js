import React, { useEffect, useState } from 'react';
import Spinner from '../../components/Loader/Loader';
import ItemDetail from './ItemDetail';

import { collection, getDocs } from 'firebase/firestore';
import {db} from '../../firebase';

const ItemDetailContainer = () => {

    const [product, setProduct] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
		const requestData = async () => {
			const docs = [];

			const items = await getDocs(collection(db, 'products'));
			items.forEach((document) => {
				console.log(document.id, ' => ', document.data());
				docs.push({...document.data(), id: document.id})
			});
			setProduct(docs);
            setIsLoading(false)
		};
		requestData();
	}, []);
    
    console.log(product);
    /* useEffect(() => {

        misProductos(productID)
            .then(item => {
                setProduct(item);
                setIsLoading(false);
            });
    }); */

    console.log(product);
    return (
        <>
            {isLoading ? <Spinner /> : <ItemDetail item={product} />}
        </>
    );
}

export default ItemDetailContainer;
