import React, { useState } from 'react'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
const Add = ({addMovie}) => {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [posterURL, setPosterURL] = useState("");
    const [rating, setRating] = useState("");

    const ajout = (e) => {
      e.preventDefault();

      const newMovie = {
        title,
        description,
        posterURL,
        rating,
      };

      addMovie(newMovie);

      setTitle("");
      setDescription("");
      setPosterURL("");
      setRating("");
    };
        
  return (
    <div>
      <Form onSubmit={ajout} id="formulaire" className="text-center" >
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" value={title} placeholder="Movie's Title.." onChange={(e) => setTitle(e.target.value)} required/>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Description</Form.Label>
            <Form.Control type="text" value={description} placeholder="Movie's Description" onChange={(e) => setDescription(e.target.value)} required/>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>posterUrl</Form.Label>
            <Form.Control type="text" value={posterURL} placeholder="URL Movie Image" onChange={(e) => setPosterURL(e.target.value)} required/>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Rating</Form.Label>
            <Form.Control type="number" value={rating} placeholder="Movie's rating?" onChange={(e) => setRating(e.target.value)} required/>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label><br/><br/></Form.Label>
          <Button variant="primary" style={{width:"200px"}} type="sumbit">Add Movie</Button>{' '}
          </Form.Group>
        </Row>
      </Form>
    </div>
  )
}

export default Add
