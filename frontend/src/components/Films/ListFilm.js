import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Table } from 'react-bootstrap';
import { AiFillPlusCircle } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

const ListFilm = () => {
    const [Films, setFilms] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const redirect = useNavigate();

    useEffect(() => {
        getFilms();
        deleteActor();
    }, []);

    const getFilms = async () => {
        const { data: res } = await axios.get("http://localhost:8000/film",
            { withCredentials: true }
        )
        console.log(res.films)
        setFilms(res.films)
    };

    const deleteActor = async (id) => {
        try {
            await axios.delete(`http://localhost:8000/film/${id}`,
                { withCredentials: true }
            );
            getFilms();
        } catch (error) {
        }
    };

    return (
        <div className="p-3">
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Rating</th>
                        <th>Genre</th>
                        <th>Actor</th>
                        <th>Director</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {Films
                        .filter((film) => {
                            if (searchTerm === "") {
                                return film;
                            } else if (
                                film.actorName
                                    .toLowerCase()
                                    .includes(searchTerm.toLocaleLowerCase())
                            ) {
                                return film;
                            }
                        })
                        .map((film, index) => (
                            <tr key={film.id}>
                                <td>{index + 1}</td>
                                <td>{film.judulFilm}</td>
                                <td>{film.description}</td>
                                <td>{film.ratingFilm}</td>
                                <td>{film.genreId}</td>
                                <td>{film.actorId}</td>
                                <td>{film.directorId}</td>
                                <td>
                                    <Button href={`createfilmimage/${film.id}`} variant="info" size="sm">
                                        Upload Images
                                    </Button>{" "}
                                    <Button href={`updatefilm/${film.id}`} variant="success" size="sm">
                                        Edit
                                    </Button>{" "}
                                    <Button
                                        onClick={() => deleteActor(film.id)}
                                        variant="danger"
                                        size="sm"
                                    >
                                        Delete
                                    </Button>{" "}
                                </td>
                            </tr>
                        ))}
                </tbody>
            </Table>
            <Button href='/createfilm'>
                <AiFillPlusCircle className='fs-4 text-wrap pb-1 pe-1'/>Create Film
            </Button>
        </div>
    )
}

export default ListFilm