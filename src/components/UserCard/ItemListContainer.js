
import React, { useState, useEffect } from 'react';
import ItemList from './ItemList/ItemList';
import Spinner from '../Loader/Loader';

// firebase database:
import { collection, query, where, getDocs } from 'firebase/firestore';
import {db} from '../../firebase';

const ItemListContainer = () => {

    const [productList, setProductList] = useState([]);
    const [isloading, setIsLoading] = useState(true);

	useEffect(() => {
        setIsLoading(true)
        setProductList([]);

		const requestData = async () => {
			const docs = [];
			const items = await getDocs(collection(db, 'products'));
			items.forEach((document) => {
				console.log(document.id, ' => ', document.data());
				docs.push({...document.data(), id: document.id})
			});
			setProductList(docs);
            setIsLoading(false);
		};
		requestData();
	}, []);

    /* useEffect(() => {
        setIsLoading(true);
        setProductList([]);

        itemsMock(categoriaID)
            .then((productList) => {
                setProductList(productList);
                setIsLoading(false);
            });
    }, [categoriaID]); */

    console.log(productList)
    return (
        <>
            {isloading ? <Spinner /> : <ItemList productList={productList} />}
        </>

    );
}

export default ItemListContainer;

