import { Container, Row, Col } from "react-bootstrap"
import { NewsLetter } from "../components/NewsLetter"
import  logo  from "../assets/img/logo.svg"
import Icon1 from '../assets/img/nav-icon1.svg'
import Icon2 from '../assets/img/icons-github.svg'
import Icon3 from '../assets/img/nav-icon3.svg'

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-item-center">
                    <NewsLetter />
                    <Col sm={6}>
                        <img src={logo} alt="Logo" />
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/gabriel-oliveira-tomedi-6bab92190/" target="_blanck"><img src={Icon1} alt="Linkedin" /></a>
                            <a href="https://github.com/gabrieltomedi" target="_blanck"><img src={Icon2} alt="GitHub" /></a>
                            <a href="#"><img src={Icon3} alt="" /></a>                            
                        </div>
                        <p>CopyRight 2023, All Right Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}