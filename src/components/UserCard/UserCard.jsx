
import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

import './UserCard.css'



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
            <Card.Content extra>
                <a>
                    <Icon name='user' />
                    {props.purchases} purchases
                </a>
            </Card.Content>
        </Card>
    </div>


);

export default UserCard;

