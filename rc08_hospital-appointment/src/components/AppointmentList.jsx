import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const AppointmentList = ({appoinments}) => {
    return (
        <Container className="p-2">
            <h3 className="display-6 mb-2" style={{ color: "rgb(166,18,189)" }}>
                Appointment List
            </h3>
            {appoinments.map(({id,patient,consulted,doctor,day})=>(
                <div>
                    <Row>
                        <Col>
                        <h4>{patient}</h4>
                        <h5>{doctor}</h5>
                        </Col>
                        <Col>
                        <h5>Date: {new Date(day).toLocaleDareString("cz")}</h5>
                        <h4>Time: {new Date(day).toLocaleDateString("cz")}</h4>
                        </Col>
                        <Col>
                        
                        </Col>

                    </Row>
                </div>
            ))};
        </Container>
    );
};

export default AppointmentList;