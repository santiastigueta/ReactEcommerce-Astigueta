
import React from 'react'
import { Card, Image } from 'semantic-ui-react'

import './UserCard.css'

//componentes
import ItemCount from './ItemCount/ItemCount';

const UserCard = (props) => (
    <div className="usercard">
        <Card>
            <Image src={props.image} wrapped ui={false} />
            <Card.Content>
                <Card.Header>{props.product}</Card.Header>
                <Card.Meta>{props.price}</Card.Meta>
                <Card.Description>
                    {props.description}
                </Card.Description>
            </Card.Content>
            <ItemCount initial='1' stock='10' />
        </Card>

    </div>


);

export default UserCard;

