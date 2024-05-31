import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import { Button, Container, Row, Col, Image, Card } from "react-bootstrap";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
        console.log(filter);
      }

      return () => {
        componentMounted = false;
      };
    };

    getProducts();
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
      </>
    );
  };

  const filterProduct = (cat) => {
    const updatedList = data.filter((x) => x.category === cat);
    setFilter(updatedList);
  }

  const ShowProducts = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center mb-5 pb-5">
          <Button variant="outline-dark" className="me-2" onClick={() => setFilter(data)}>All</Button>
          <Button variant="outline-dark" className="me-2" onClick={() => filterProduct("men's clothing")}>
            Men's Clothing
          </Button>
          <Button variant="outline-dark" className="me-2" onClick={() => filterProduct("women's clothing")}>
            Women's Clothing
          </Button>
          <Button variant="outline-dark" className="me-2" onClick={() => filterProduct("jewelery")}>
            Jewelery
          </Button>
          <Button variant="outline-dark" className="me-2" onClick={() => filterProduct("electronics")}>
            Electronic
          </Button>
        </div>
        <Container fluid>
          <Row>
            {filter.map((product) => (
              <Col md={4} className="mb-4">
                <Card className="h-100 text-center p-4" key={product.id}>
                  <Card.Img src={product.image} className="card-img-top" alt={product.title} height="250px" />
                  <Card.Body>
                    <Card.Title className="mb-0">{product.title.substring(0, 12)}</Card.Title>
                    <Card.Text className="lead fw-bold">${product.price}</Card.Text>
                    <Link to={`/e-commerce-app/products/${product.id}`} className="btn btn-outline-dark">
                      Buy Now
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </>
    );
  };

  return (
    <Container className="my-5 py-5">
      <Row>
        <Col>
          <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
          <hr />
        </Col>
      </Row>
      <Row>
        <Col xs>{loading ? <Loading /> : <ShowProducts />}</Col>
      </Row>
    </Container>
  );
};

export default Products;
