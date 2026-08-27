import axios from "axios"
import { useState } from "react"
import { Col, Form, Row } from "react-bootstrap"
import { toast, ToastContainer } from "react-toastify"

const Products = () => {

  const [product, setProducts] = useState({
    Name: "",
    Price: "",
    Brand: "",
    Quantity: "",
    About: "",
    ImageSrc: ''
  })


  const handleChange = (e) => {
    setProducts({ ...product, [e.target.name]: e.target.value })
  }

  const handleAddProduct = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.post("http://localhost:5000/api/add-product", product)
      console.log(response);
      toast.success("add successfully")

    } catch (error) {
      console.log(error);
      toast.error("failed to add product")

    }
  }

  return (
    <div>
      <Form onSubmit={handleAddProduct}>
        <fieldset>
          <h1>Add Product</h1>
          <Row>
            <Col>
              <Form.Group>
                <Form.Label>Product Name </Form.Label>
                <Form.Control onChange={handleChange} value={product.Name} name="Name" placeholder="Enter Product Name" required />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Price </Form.Label>
                <Form.Control onChange={handleChange} value={product.Price} type="number" name="Price" placeholder="Enter Product Price" required />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group>
                <Form.Label>Image Src </Form.Label>
                <Form.Control onChange={handleChange} value={product.ImageSrc} type="url" name="ImageSrc" placeholder="Image Address" required />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Group>
                <Form.Label>Product Quantity </Form.Label>
                <Form.Control onChange={handleChange} value={product.Quantity} name="Quantity" placeholder="+1 " required />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Product Brand Name </Form.Label>
                <Form.Control onChange={handleChange} value={product.Brand} name="Brand" placeholder="Enter Product Brand Name" required />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group>
                <Form.Label>About </Form.Label>
                <Form.Control onChange={handleChange} value={product.About} type="text" name="About" placeholder="Description" required />
              </Form.Group>
            </Col>
          </Row>

          <Row className="p-5">
            <button type="submit" className="btn btn-primary my-4">Add Product</button>
            <button type="reset" className="btn btn-warning">Cancel</button>
          </Row>
        </fieldset>
        <ToastContainer />
      </Form>
    </div>
  )
}

export default Products
