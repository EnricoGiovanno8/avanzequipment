import { Carousel, Image } from 'react-bootstrap';
import { Navbar } from '../../components/Navbar';
import { FaPhoneAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

import './Home.css';

const Home = () => {
    return (
        <main id="home" className="home">
            <Navbar />
            <section id="tagline" className="tagline">
                <div>
                    <h1 style={{ textAlign: 'center' }}>Constant Innovation To Stay Ahead</h1>
                </div>
            </section>
            <section id="about" className="about">
                <div className="about-item">
                    <h1 className="about-title">WHO WE ARE</h1>
                    <p className="about-description-highlight">
                        Avanz is a regional Access and Lifting specialist which provides integrated solutions for access and material handling.
                    </p>
                    <p className="about-description">We are part of AVANZ ASIA PTE LTD in Singapore.</p>
                    <p className="about-description">
                        We are versatile solution providers who think beyond equipment - we believe in optimized solutions and holistic service
                        excellence. With our years of industry knowledge and deep understanding of your business needs, we take pride in providing the
                        best tools to enhance productivity, and creating solutions for business performance.
                    </p>
                </div>
            </section>
            <section id="services" className="services">
                <div className="products">
                    <Carousel style={{ backgroundColor: 'white', borderRadius: '25px' }}>
                        <Carousel.Item>
                            <div className="carousel-image-container">
                                <Image className="carousel-image" src="./scissorlift.png" alt="scissorlift" />
                            </div>
                            <Carousel.Caption style={{ color: 'black' }}>
                                <h3 style={{ color: '#ffe69a' }}>Scissor Lift</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="carousel-image-container">
                                <Image className="carousel-image" src="./boomlift.jpeg" alt="boomlift" />
                            </div>
                            <Carousel.Caption style={{ color: 'black' }}>
                                <h3 style={{ color: '#ffe69a' }}>Boom Lift</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
                <div className="services-text-section">
                    <h1 className="services-title">Our Services</h1>
                    <p className="services-description-highlight">Aerial Work Platform</p>
                    <div className="services-item">
                        <ul>
                            <li>
                                <p className="services-description">New/used access and material handling equipment with spare parts support</p>
                            </li>
                            <li>
                                <p className="services-description">Equipment rental</p>
                            </li>
                            <li>
                                <p className="services-description">Maintenance and repair services</p>
                            </li>
                            <li>
                                <p className="services-description">On-site evaluation, survey, consultation and after-sales support</p>
                            </li>
                            <li>
                                <p className="services-description">Other one-stop services such as transportation and certification</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <section id="contacts" className="contacts">
                <div className="address-item">
                    <p className="address-text">
                        Jl. Nusantara Timur Blok D No.42, Sunter Sacna, Kel. Sunter Agung, Kec. Tanjung Priok, Kota Adm. Jakarta Utara, DKI Jakarta,
                        14350
                    </p>
                </div>
                <div className="icon-item">
                    <FaPhoneAlt className="icon" />
                    <p className="icon-text">
                        <a href="tel:+6281283833588">+6281283833588</a>
                    </p>
                </div>
                <div className="icon-item">
                    <MdEmail className="icon" />
                    <p className="icon-text">
                        <a href="mailto:avanzindonesia@gmail.com">avanzindonesia@gmail.com</a>
                    </p>
                </div>
            </section>
        </main>
    );
};

export default Home;
