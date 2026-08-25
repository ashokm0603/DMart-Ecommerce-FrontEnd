import axios from "axios";
import { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap"

const Home = () => {

    const [products, setProducts] = useState([])


    const fetchProducts = async () => {
        try {
            const res = await axios.get("https://dummyjson.com/products")
            console.log(res.data.products);
            setProducts(res.data.products)

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchProducts()
    })


    return (
        <div>
            <section>
                <Carousel>
                    <Carousel.Item>
                        <img src="https://thumbs.dreamstime.com/b/digital-shopping-cart-keyboard-e-commerce-icons-glowing-technology-background-digital-shopping-cart-keyboard-e-373822163.jpg" style={{ height: 500, width: "100vw" }} alt="" />
                        <Carousel.Caption>
                            <h1>Ecommerce Shopping </h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, beatae? Eligendi, deserunt! Accusamus, nesciunt? Expedita deleniti voluptates sint porro aperiam temporibus? Nihil magni labore commodi quas porro eligendi. Ea, eius.</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img src="https://graphicdesigneye.com/images/studio-shot-product-images.jpg" style={{ height: 500, width: "100vw" }} alt="" />
                        <Carousel.Caption>
                            <h1>Add Products Feature </h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, beatae? Eligendi, deserunt! Accusamus, nesciunt? Expedita deleniti voluptates sint porro aperiam temporibus? Nihil magni labore commodi quas porro eligendi. Ea, eius.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src="https://img.magnific.com/free-photo/black-friday-sales-sign-neon-light_23-2151833076.jpg?semt=ais_hybrid&w=740&q=80" style={{ height: 500, width: "100vw" }} alt="" />
                        <Carousel.Caption>
                            <h1>Add Products Feature </h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, beatae? Eligendi, deserunt! Accusamus, nesciunt? Expedita deleniti voluptates sint porro aperiam temporibus? Nihil magni labore commodi quas porro eligendi. Ea, eius.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </section>
        </div>
    )
}

export default Home
