import axios from "axios";
import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";

const UpdateProducts = () => {

  const [products, setProducts] = useState([])

  const fetchProduct = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/products');
      console.log(response);

      setProducts(response.data.allProducts)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchProduct()
  }, [])





  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/delete-product/${id}`);

      toast.success("deleted");
      fetchProduct()

    } catch (error) {
      console.log(error);
      toast.error("failed to delete")

    }

  }


  return (
    <div>
      <h1 className="text-center m-5">Products</h1>


      <Row className="product-container p-5">
        {
          products.length > 0 ? (
            products.map((item) => (

              <div className="card m-2  d-flex flex-row justify-content-evenly w-100 align-items-center">
                <div className="">
                  <img src={item.ImageSrc} height={350} width={200} alt="" />
                </div>
                <div className="" style={{ width: "400px" }}>
                  <h1> {item.Name}</h1>
                  <h1>Brand: {item.Brand}</h1>
                  <h1> Price :{item.Price}</h1>
                  <p> {item.About}</p>

                  <button className="btn btn-danger mx-2" onClick={() => handleDelete(item._id)}>Delete</button>
                  <button className="btn btn-warning">Update</button>
                </div>
              </div>
            ))) : (
            <h2 className="text-center bg-warning p-5 rounded-5 ">Products Not Found</h2>
          )
        }
      </Row>
      <ToastContainer />
    </div>
  )
}

export default UpdateProducts
