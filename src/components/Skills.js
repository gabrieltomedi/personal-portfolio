import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import htmlLogo from "../assets/img/htmlLogo.svg";
import cssLogo from "../assets/img/CSS3.svg";
import jsLogo from "../assets/img/logo-javascript.svg";
import nodeLogo from "../assets/img/Node.js_logo.svg";
import reactLogo from "../assets/img/React-icon.svg";
import cSharp from "../assets/img/CSharpLogo.png";
import dotNetCore from "../assets/img/NET_Core_Logo.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {    
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
    };

    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>Skills</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <img src={htmlLogo} alt="Image" />
                                    <h5>HTML</h5>
                                </div>
                                <div className="item">
                                    <img src={cssLogo} alt="Image" />
                                    <h5>CSS</h5>
                                </div>
                                <div className="item">
                                    <img src={jsLogo} alt="Image" />
                                    <h5>JavaScript</h5>
                                </div>
                                <div className="item">
                                    <img src={nodeLogo} alt="Image" />
                                    <h5>Node JS</h5>
                                </div>
                                <div className="item">
                                    <img src={reactLogo} alt="Image" />
                                    <h5>React</h5>
                                </div>
                                <div className="item">
                                    <img src={cSharp} alt="Image" />
                                    <h5>C#</h5>
                                </div>
                                <div className="item">
                                    <img src={dotNetCore} alt="Image" />
                                    <h5>.Net Core MVC</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp} />
        </section>
    )
}