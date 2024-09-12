import { data } from "../../helpers/data";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { useState } from "react";
import LegendCard from "./LegendCard";
import Form from "react-bootstrap/Form";
const LegendContainer = () => {
    //const [show, setShow] = useState(true);
    // console.log(data);
    const [search, setSearch] = useState("");

    //   const handleChange = (e) => {
    // console.log("input:", e.target.value)
    //     setSearch(e.target.value);
    //console.log(search) //!setter method is async
    // if(e.target.value)
    //   };
    //console.log(search)

    //   const filteredData = data.filter(legend=> legend.name.toLowerCase().includes(search.trim().toLowerCase()))
    //   console.log(filteredData)
    return (
        <>
            <Form.Control
                type="search"
                // onChange={handleChange}
                // onChange={(e) => handleChange(e)}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search legends..."
                className="w-50 mx-auto my-2"
            />
            <Container className="p-3 rounded-4 card-container my-3">
                <Row className="justify-content-center g-3">
                    {/* {data.map((legend) => (
          <Col xs={10} sm={8} md={6} lg={4} xl={3}>
            <Card>
              {show ? (
                <Card.Img onClick={()=>setShow(false)} variant="top" src={legend.img} />
              ) : (
                <>
                  <Card.Body onClick={()=>setShow(true)}>
                    <Card.Title>{legend.name}</Card.Title>
                    <ul className="m-auto w-100">
                      {legend.statistics.map((item) => (
                        <li className="list-unstyled h5 text-start">
                          ⚽{item}
                        </li>
                      ))}
                    </ul>
                  </Card.Body>
                  <Card.Footer>
                    Career Years : {legend.official_career}
                  </Card.Footer>
                </>
              )}
            </Card>
          </Col>
        ))} */}
                    {/* {data.map((legend) => (
          <LegendCard key={legend.id} legend={legend} />
        ))} */}
                    {/* {filteredData.map((legend) => (
          <LegendCard key={legend.id} legend={legend} />
        ))} */}

                    {data.filter((legend) =>
                        legend.name.toLowerCase().includes(search.trim().toLowerCase())
                    ).map((legend) => (
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
        </>
    );
};

export default LegendContainer;
