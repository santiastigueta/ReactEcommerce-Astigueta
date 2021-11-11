import React, { useEffect, useState } from 'react';
import Spinner from '../../components/Loader/Loader';
import ItemDetail from './ItemDetail';

import { collection, getDocs, query, doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase';

const ItemDetailContainer = ({match}) => {

    const itemId = match.params.id;
    const [product, setProduct] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        
		const getProductData = async () => {
            const docRef1 = doc(db, 'products', itemId);
			const docSnap1 = await getDoc(docRef1);
            
			if(docSnap1.exists()){
                const item1 = docSnap1.data();
                const id1 = docSnap1.id;
                setProduct({...item1, id1});
                setIsLoading(false)
            };
            const docRef2 = doc(db, 'products_2', itemId);
			const docSnap2 = await getDoc(docRef2);
            
			if(docSnap2.exists()){
                const item1 = docSnap2.data();
                const id1 = docSnap2.id;
                setProduct({...item1, id1});
                setIsLoading(false)
            };
		}; 
		getProductData();
	}, [itemId]);
    

    console.log(product);
    return (
        <>
            {isLoading ? <Spinner /> : <ItemDetail item={product} />}
        </>
    );
}

export default ItemDetailContainer;
