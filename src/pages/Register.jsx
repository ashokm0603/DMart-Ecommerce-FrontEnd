/* eslint-disable no-unused-vars */
import { useState } from "react"
import { Col, Form, Row } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import { toast, ToastContainer } from "react-toastify";

import axios  from 'axios';

const Register = () => {

  const navigate=useNavigate()
  const [registerDetails, setRegisterDetails] = useState(
    {
      firstName: "",
      lastName: "",
      email: "",
      phoneNo: "",
      Dob: "",
      gender: "",
      address: "",
      password: ""
    }
  )

  const handleRegister = async(e) => {
    try {
      e.preventDefault()

     const response= await axios.post("http://localhost:5000/api/register",registerDetails)

      console.log(response);
      toast.success("register successful")
      setRegisterDetails(
        {
          firstName: "",
          lastName: "",
          email: "",
          phoneNo: "",
          Dob: "",
          gender: "",
          address: "",
          password: ""
        }
      )


      setTimeout(()=>{
        navigate('/')
      },3000)

    } catch (error) {
      console.log(error);
      toast.error("failed to register")
    }
  }

  const handleChange = (e) => {
    setRegisterDetails({ ...registerDetails, [e.target.name]: e.target.value })
  }

  return (
    <div>
      <Form onSubmit={handleRegister}>
        <fieldset>
          <Row>
            <h1>Register</h1>
          </Row>
          <Row>
            <Col>
              <Form.Group>
                <Form.Label>First Name</Form.Label>
                <Form.Control onChange={handleChange} name="firstName" value={registerDetails.firstName} type="text" placeholder="Enter Fist Name" required />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Last Name</Form.Label>
                <Form.Control onChange={handleChange} name="lastName" value={registerDetails.lastName} type="text" required placeholder="Enter last name" />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control onChange={handleChange} name="email" value={registerDetails.email} type="email" required placeholder="Enter Email" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Phone No</Form.Label>
                <Form.Control onChange={handleChange} name="phoneNo" value={registerDetails.phoneNo} type="tel" required placeholder="+91" />
              </Form.Group>
            </Col>
          </Row>
          <Col>
            <Form.Group>
              <Form.Label>Create Password</Form.Label>
              <Form.Control type="password" onChange={handleChange} name="password" value={registerDetails.password} required placeholder="new password" />
            </Form.Group>
          </Col>
          <Row>

          </Row>

          <Row>
            <Col>
              <Form.Group>
                <Form.Label>DOB</Form.Label>
                <Form.Control onChange={handleChange} name="Dob" value={registerDetails.Dob} type="date" required />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Gender</Form.Label> <br />
                <Form.Check onChange={handleChange} name="gender" inline type="radio" value="Male" />  <span>Male</span>
                <Form.Check onChange={handleChange} name="gender" inline type="radio" value="Female" /> <span>Female</span>
                <Form.Check onChange={handleChange} name="gender" inline type="radio" value="Others" /> <span>Others</span>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group>
                <Form.Label>Address</Form.Label>
                <Form.Control onChange={handleChange} name="address" value={registerDetails.address} required type="text" placeholder="Enter address" />
              </Form.Group>
            </Col>
          </Row>
          <Row className="px-5 py-3">
            <button type="submit" className="btn btn-primary my-4">SignUp</button>
            <button type="reset" className="btn btn-warning">Cancel</button>
          </Row>
          <p>
            <span>If you have account already click here to <a href="/">Login</a></span>
          </p>
        </fieldset>

        <ToastContainer />
      </Form>
    </div>
  )
}

export default Register
