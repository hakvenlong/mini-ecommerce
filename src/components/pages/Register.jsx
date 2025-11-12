import React from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function Register() {
    const provinces = [
        "Phnom Penh",
        "Banteay Meanchey",
        "Battambang",
        "Kampong Cham",
        "Kampong Chhnang",
        "Kampong Speu",
        "Kampong Thom",
        "Kampot",
        "Kandal",
        "Kep",
        "Koh Kong",
        "Kratie",
        "Mondulkiri",
        "Oddar Meanchey",
        "Pailin",
        "Preah Vihear",
        "Prey Veng",
        "Pursat",
        "Ratanakiri",
        "Siem Reap",
        "Preah Sihanouk",
        "Stung Treng",
        "Svay Rieng",
        "Takeo",
        "Tboung Khmum"
    ];


    return (
        <div className="container my-5">
            <Form>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Fisrt Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter First Name" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Last Name"/>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Phone Numebr</Form.Label>
                        <Form.Control type="text" placeholder="Enter Number"/>
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Label>Password</Form.Label>
                    <Form.Control  type='password' minLength={8} placeholder="Enter Password" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type='password' minLength={8} placeholder="Enter Password Again" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Label>Address</Form.Label>
                    <Form.Control placeholder="1234 Main St" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridAddress2">
                    <Form.Label>Address 2</Form.Label>
                    <Form.Control placeholder="Apartment, studio, or floor" />
                </Form.Group>

                <Row className="mb-3 d-flex flex-wrap" >
                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>provinces</Form.Label>
                        <Form.Select defaultValue="">
                            <option value="">Choose...</option>
                            {provinces.map((province, index) => (
                                <option key={index} value={province}>
                                    {province}
                                </option>
                            ))}
                        </Form.Select>
                    </Form.Group>

                </Row>

                <Form.Group className="mb-3" id="formGridCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
}
export default Register
