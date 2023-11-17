import React from 'react'
import { playerJSON } from './players';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Player from './Player';

const PlayerList = () => {
    //Converting the JSON file to the value that our card element will understand
    const player = JSON.parse(playerJSON)
    return (
        <div className='d-flex gap-2'>
            {
                //Mapping through the player.js JSON file
                player.map(p => {
                    return (
                        //Defining a key for our card
                        <div key={p.id}>
                            <Player {...p} />
                        </div>

                    )
                })
            }
        </div>
    )
}

export default PlayerList