import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { getClima } from '../helpers/getClima';
import '../styles.css'
import ClimaItem from './ClimaItem';

const Formulario = () => {

    const [city, setCity] = useState('');
    const [pais, setPais] = useState('');
    const [clima, setClima] = useState([]);

    const getWeather = async () => {
        const weather = await getClima(city, pais)
        setClima(weather)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        getWeather()
    }


    return (
        <div>
            <div className='mt-5 d-flex justify-content-center'>
                <Form className='ms-5 formWidth2' onSubmit={handleSubmit}>
                    <Form.Group className="mb-3 d-flex align-items-center row">
                        <Form.Label className='col-4 fw-bold'>Ingresar una ciudad</Form.Label>
                        <Form.Control className='col formWidth ms-4' type="text" placeholder="Ingresar una ciudad"
                            maxLength={30}
                            required
                            onChange={(e) => setCity(e.target.value)}
                            value={city}
                        />
                    </Form.Group>



                    <Form.Group className="mb-3 d-flex align-items-center row">
                        <Form.Label className='col-4 fw-bold' >Seleccionar un pais</Form.Label>
                        <Form.Select className='col formWidth ms-4'
                            onChange={(e) => setPais(e.target.value)}
                            value={pais}
                        >
                            <option>Seleccionar un pais</option>
                            <option value="ar">Argentina</option>
                            <option value="br">Brasil</option>
                            <option value="uk">Inglaterra</option>
                        </Form.Select>
                    </Form.Group>

                    <div className='text-center mt-4'>
                        <Button className='mb-3 centrar' variant="primary" type="submit">
                            Buscar
                        </Button>
                    </div>
                </Form>
            </div>
            {clima.length !== 0 ? <ClimaItem clima={clima}></ClimaItem> : null}

        </div>
    );
};

export default Formulario;