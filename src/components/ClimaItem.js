import React from 'react';
import { Card } from 'react-bootstrap';
import Estado from './Estado';

const ClimaItem = (props) => {


    return (
        props.clima !== 'error' ?
        
        <div className='mt-3 d-flex justify-content-center'>
            <Card style={{ width: '18rem' }}>
            <Card.Body >
                <Card.Title>{props.clima.ciudad}</Card.Title>
                <Card.Text>
                    {`${props.clima.temperatura}º`}
                </Card.Text>
                <Card.Text>
                    {props.clima.description}
                </Card.Text>
                <div className='d-flex justify-content-center'>
                </div>

            </Card.Body>
        </Card>
        </div>  
        :
        <Estado></Estado>
    );
};

export default ClimaItem;