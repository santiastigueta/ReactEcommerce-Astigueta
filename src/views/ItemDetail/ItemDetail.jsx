import React from 'react';
import { useEffect, useState } from 'react';
import { Card, Image, Button } from 'semantic-ui-react';
import axios from 'axios';

//componentes
import ItemCount from '../../components/UserCard/ItemCount/ItemCount';


const ItemDetail = ({ match }) => {
    console.log('MATCH', match);

    let chardID = match.params.id;

    const [product, setProduct] = useState([]);
    const [terminar, setTerminar] = useState(false);

    useEffect(() => {
        axios(`https://breakingbadapi.com/api/characters/${chardID}`).then(res => {
            setProduct(res.data)
        })
    }, [chardID]);

    const onAdd = (cantidad) => {
        setProduct(cantidad);
        setTerminar(!terminar)
        alert('fin')
    }
    return (
        <div className="CharacterDetail">
            {product.map((product) => {
                return (
                    <Card>
                        <Image src={product.img} wrapped ui={false} />
                        <Card.Content>
                            <Card.Header>{product.name}</Card.Header>
                            <Card.Meta>
                                <Button secondary>Volver</Button>
                            </Card.Meta>
                            <Card.Description>{product.occupation}</Card.Description>
                        </Card.Content>
                        <ItemCount initial='1' stock='10' onclick={(cant) => onAdd(cant)} />
                    </Card>
                );
            })}
        </div>
    )
}

export default ItemDetail;
