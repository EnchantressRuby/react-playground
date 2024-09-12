import React, { useState } from 'react'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from 'react-bootstrap/Card';

const LegendCard = ({ legend }) => {
    const [show, setShow] = useState(true);
    return (
        <Col xs={10} sm={8} md={6} lg={4} xl={3}>
            <Card onClick={() => setShow(!show)} role='button'> {/*taggle*/}
                {show ? (
                    <Card.Img
                        // onClick={() => setShow(false)}
                        variant="top"
                        title={legend.name}
                        src={legend.img} />
                ) : (
                    <>
                        <Card.Body
                        // onClick={() => setShow(true)}
                        >
                            <Card.Title>{legend.name}</Card.Title>
                            <Card.Text>
                                <ul className="m-auto w-100">
                                    {legend.statistics.map(item => <li className="list-unstyled h5 text-start">⚽{item}</li>)}
                                </ul>
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            Career Years: {legend.official_career}
                        </Card.Footer>
                    </>)
                }
            </Card>
        </Col>
    )
}

export default LegendCard
