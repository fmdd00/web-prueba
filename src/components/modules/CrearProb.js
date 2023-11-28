import React from 'react'
import BarLog from '../bar/BarLog'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";


const CrearProb = () => {
    return (
        <div>
            <BarLog />
            <div className='container mt-4'>
                <h1 className='text-center' style={{ color: "#800080" }}>Problema A</h1>
                <div className='mt-4'>
                    <InputGroup size='lg'>
                        <InputGroup.Text>Descripción</InputGroup.Text>
                        <Form.Control as="textarea" aria-label="descripcion" />
                    </InputGroup>
                </div>
                <div className='d-grid col-2 mx-auto mt-4'>
                    <Button variant='primary'style={{ backgroundColor:"#800080", borderColor:"#800080" }}>
                        Subir problema <FontAwesomeIcon icon={faArrowRight} />
                    </Button>
                </div>

            </div>
        </div>
    )
}

export default CrearProb