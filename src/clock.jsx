import "./App.css";
import {useEffect , useState} from "react";
import {Row, Col, Container} from "react-bootstrap"

function Clock({city, timeZone}){
  const [date , setDate] = useState(new Date())

  useEffect(() => {
    const timerId = setInterval(() => {
      setDate(new Date());
    } , 1000);
    return () => {
      clearInterval(timerId)
    };
  },[]);

  return (
    <Container>
      <Row className="align-tiems-center mb2">
        <Col xs={6} className="fw-bold">
          {city}
        </Col>
        <Col xs={6}>
          {date.toLocaleString("en-GB", {timeZone})}
        </Col>
      </Row>
    </Container>

  );
};

export default Clock;