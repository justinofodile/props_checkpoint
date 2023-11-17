import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
// import { playerJSON } from './players';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { CardGroup } from 'react-bootstrap';
// import PlayerList from './PlayerList';




//Destgructuring and rending of attributes for the Player component in our card.
const Player = ({ id, name, team, jerseyNumber, nationality, age, imageUrl }) => {
    return (
        <div>
            {
                <Card style={{ width: '18rem' }} border='dark' bg='light' className='text-center'>
                    <Card.Img width={200} height={400} variant="top" src={imageUrl} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            {nationality}
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item><strong>Age:</strong> {age}</ListGroup.Item>
                        <ListGroup.Item><strong>Team:</strong> {team}</ListGroup.Item>
                        <ListGroup.Item><strong>Jersey No:</strong> {jerseyNumber}</ListGroup.Item>
                    </ListGroup>
                    <Card.Body>
                        <Card.Link href="#">JayLinks.com</Card.Link>
                    </Card.Body>
                </Card>

            }
        </div>
    )
}

export default Player