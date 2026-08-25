import { Col, Form, Row } from "react-bootstrap"
const Register = () => {
  return (
    <div>
      <Form>
        <fieldset>
          <Row>
            <Col>
              <Form.Group>
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Fist Name" required />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" required placeholder="Enter last name" />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" required placeholder="Enter Email" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Phone No</Form.Label>
                <Form.Control type="tel" required placeholder="+91" />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Group>
                <Form.Label>DOB</Form.Label>
                <Form.Control type="date" required />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Gender</Form.Label> <br />
                <Form.Check name="gender" inline type="radio" value="Male" />  <span>Male</span>
                <Form.Check name="gender" inline type="radio" value="Female" /> <span>Female</span>
                <Form.Check name="gender" inline type="radio" value="Others" /> <span>Others</span>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group>
                <Form.Label>Address</Form.Label>
                <Form.Control required type="text" placeholder="Enter address" />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <button type="submit" className="btn btn-primary">SignUp</button>
          </Row>
          <Row>
            <button type="reset" className="btn btn-warning">Cancel</button>
          </Row>
        </fieldset>
      </Form>
    </div>
  )
}

export default Register
