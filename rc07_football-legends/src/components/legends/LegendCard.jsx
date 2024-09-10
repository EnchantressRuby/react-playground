import React from 'react'

const LegendCard = ({legend}) => {
    return (
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
    )
}

export default LegendCard