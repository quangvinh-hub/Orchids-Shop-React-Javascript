import { useState } from "react";
import { Card } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";

function MyCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          style={{ height: "600px", objectFit: "cover", width: "100%" }}
          src="https://cdn.mos.cms.futurecdn.net/YsV4Lv4EqUPRK8cFrngVaL.jpg"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{ height: "600px", objectFit: "cover", width: "100%" }}
          src="https://www.sunset.com/wp-content/uploads/orchids-pc-dmitriy-sidor-getty-1200x600.jpg"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{ height: "600px", objectFit: "cover", width: "100%" }}
          src="https://www.thespruce.com/thmb/haWXpZNm061CO3yX5p6z2qKpnCw=/6257x0/filters:no_upscale():max_bytes(150000):strip_icc()/orchid-identification-1315976-hero-1b62f0a648c24f798a354bc04d3bca5e.jpg"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default MyCarousel;
