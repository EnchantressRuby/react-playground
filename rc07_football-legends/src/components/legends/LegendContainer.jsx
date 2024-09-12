import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from 'react-bootstrap/Card';
import { data } from "../../helpers/data";
import { useState } from "react";
import LegendCard from "./LegendCard";

const LegendContainer = () => {
    const [show, setShow] = useState(true)
    return (
        <Container>
            <Row>

                {/* {data.map((legend) => (
                    <Col xs={10} sm={8} md={6} lg={4} xl={3}>
                        <Card>
                            {
                                show ? <Card.Img onClick={() => setShow(false)} variant="top" src={legend.img} /> :
                                    <>
                                        <Card.Body onClick={() => setShow(true)}>
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
                                    </>
                            }
                        </Card>
                    </Col>
                ))} */}

                {data.map((legend) => (
                    <LegendCard key={legend.id} legend={legend} />
                ))}

                {/* {data.map((legend) => (
                    <LegendCard key={legend.id} {...legend} /> {name,img,statistics,official_career}
                ))} */}
                {/* {data.map((legend) => (
                    <LegendCard key={legend.id} name={legend.name} img={legend.img} statistics={legend.statistics} official_career={legend.official_career} /> {name,img,statistics,official_career}
                ))} */}

            </Row>
        </Container>
    )
}

export default LegendContainer