import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Card, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import ItemCount from '../../components/UserCard/ItemCount/ItemCount';

// context:
import { CartContext } from '../../CartContext';

const ItemDetail = ({ match }) => {

    let chardID = match.params.id;

    const [character, setCharacter] = useState([]);
    const [compra, setCompra] = useState();
    const [terminar, setTerminar] = useState(false);

    //context 
    const [itemInCart, setItemInCart] = useState(false)
    const [addItem] = useContext(CartContext);

    useEffect(() => {
        axios(`https://breakingbadapi.com/api/characters/${chardID}`).then((res) =>
            setCharacter(res.data)
        );
    }, [chardID]);

    const onAdd = (cantidad) => {
        setCompra(cantidad);
        setTerminar(!terminar);
    }

    // Trabajo con context:
    const addItemCart = (cantidad) => {
        addItem(chardID, cantidad);
        setItemInCart(true);
    }

    return (
        <div className='CharacterDetail' style={{ padding: 100 }}>
            <h1>Character Detail</h1>
            {character.map((char) => {
                return (
                    <Card key={char.char_id}>
                        <Image src={char.img} wrapped ui={false} />
                        <Card.Content>
                            <Card.Header>{char.name}</Card.Header>
                            <Card.Meta>
                                <span className='date'>{char.birthday}</span>
                            </Card.Meta>
                            <Card.Description>{char.status}</Card.Description>
                        </Card.Content>
                        {terminar ? (
                            <Link to='/Cart'><button onAdd={addItemCart}>Terminar compra</button></Link>
                        ) : (
                            <ItemCount initial='1' stock='10' onClick={(cant) => onAdd(cant)} />
                        )}
                    </Card>

                );
            })}
        </div>
    );
};

export default ItemDetail;
