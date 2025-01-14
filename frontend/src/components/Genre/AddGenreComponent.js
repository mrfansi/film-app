import React, { useState } from 'react'
import { Button, Col, Container, Form, Row, Alert} from 'react-bootstrap'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const AddGenreComponent = () => {
    const [genre_name, setGenreName] = useState('')
    const redirect = useNavigate()
    const [error, setError] = useState('')
    const [message, setMessage] = useState('')

    const saveGenre = async (e) => {
        e.preventDefault()
        try {
            await axios.post('http://localhost:8000/genre/create', 
            { genre_name },
            { withCredentials: true }
            )
            redirect('/Genre') 
            setMessage('Genre added successfully')
        } catch (error) {
            if (error.response) {
                setError(error.response.data.message)
            }
        }
    }
    return (
        <Container>
                <h3 className='mt-4'>ADD GENRE </h3>
                <div className='row'>
                    <div className='col-12'>
                        {error ? (
                            <Alert variant='danger'>
                                {error}
                            </Alert>
                        ) : null
                        }
                        {message ? (
                            <Alert variant='primary'>
                                {message}
                            </Alert>
                        ) : null
                        }
                    </div>
                </div>
                <Form onSubmit={saveGenre} className='mb-4'>
                    <Form.Group as={Row} className='mt-4 mb-4' controlId='formHorizontalEmail'>
                        <Form.Label column sm={2}>
                            Genre
                        </Form.Label>
                        {error ? (
                            <Alert variant='danger'>
                                {error}
                            </Alert>
                        ) : null
                        }
                        <Col sm={10}>
                            <Form.Control 
                                type='string'
                                required 
                                value={genre_name} 
                                onChange={(e) => setGenreName(e.target.value)}
                                placeholder='Genre' 
                            />
                        </Col>
                    </Form.Group>
                    <div className='row'>
                        <div className='col-6'>
                            <Button href='/Genre' variant='secondary' type='reset' size='md' >
                                Cancel
                            </Button>
                            <Button variant='primary' type='submit' size='md' className='m-3'>
                                Submit
                            </Button>
                        </div>
                    </div>
                </Form>
        </Container>
    )
}

export default AddGenreComponent;