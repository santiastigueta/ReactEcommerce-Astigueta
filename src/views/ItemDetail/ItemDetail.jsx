import React from 'react';
import { useEffect, useState } from 'react';
import { Card, Image, Button } from 'semantic-ui-react';
import axios from 'axios';

//componentes
import ItemCount from '../../components/UserCard/ItemCount/ItemCount';


const ItemDetail = ({ match }) => {
    console.log('MATCH', match);

    let chardID = match.params.id;

    const [product, setProduct] = useState([])

    useEffect(() => {
        axios(`https://breakingbadapi.com/api/characters/${chardID}`).then(res => {
            setProduct(res.data)
        })
    }, [chardID]);

    return (
        <div className="CharacterDetail">
            {product.map((product) => {
                return (
                    <Card>
                        <Image src={product.img} wrapped ui={false} />
                        <Card.Content>
                            <Card.Header>{product.name}</Card.Header>
                            <Card.Meta>
                                <Button primary>Comprar ya</Button>
                                <Button secondary>Carrito</Button>
                            </Card.Meta>
                            <Card.Description>{product.occupation}</Card.Description>
                        </Card.Content>
                        <ItemCount />
                    </Card>
                );
            })}
        </div>
    )
}

export default ItemDetail;