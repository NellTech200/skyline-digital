import React from 'react';
import './footer.css';

export default function Footer() {
  return (
    <footer id='footer'>
        <div className='footer-top'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-3 col-md-6'>
                        <div className='footer-info'>
                            <h3>Skyline Digital</h3>
                            <p>
                                Douala Bonamoussadi <br />
                                Douala 05
                                <br />
                                <br />
                                <strong>Phone:</strong> +237 682 680 270
                                <br />
                                <strong>Email:</strong> skylinedigital96@gmail.com
                                <br />
                            </p>

                            <div className='social-links mt-3'>
                                <a href="#" className='twitter'>
                                    <i className='bi bi-twitter-x'></i>
                                </a>
                                <a href="#" className='facebook'>
                                    <i className='bi bi-facebook'></i>
                                </a>
                                <a href="#" className='instagram'>
                                    <i className='bi bi-instagram'></i>
                                </a>
                                <a href="#" className='youtube'>
                                    <i className='bi bi-youtube'></i>
                                </a>
                                <a href="#" className='reddit'>
                                    <i className='bi bi-reddit'></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className='col-lg-2 col-md-6 footer-links'>
                        <h4>Useful links</h4>
                        <ul>
                            <li>
                                <i className='bx bx-chevron-right'></i>
                                <a href="#">Home</a>
                            </li>
                            <li>
                                <i className='bx bx-chevron-right'></i>{''}
                                <a href="#">About us</a>
                            </li>
                            <li>
                                <i className='bx bx-chevron-right'></i>
                                <a href="#">Menu</a>
                            </li>
                            <li>
                                <i className='bx bx-chevron-right'></i>
                                <a href="#">Events</a>
                            </li>
                            <li>
                                <i className='bx bx-chevron-right'></i>{''}
                                <a href="#">Gallery</a>
                            </li>
                        </ul>
                    </div>

                    <div className='col-lg-3 col-md-6 footer-links'>
                        <h4>Our Services</h4>
                        <ul>
                            <li>
                                <i className='bx bx-chevron-right'></i>{''}
                                <a href="#">Functions</a>
                            </li>
                            <li>
                                <i className='bx bx-chevron-right'></i>{''}
                                <a href="#">something here</a>
                            </li>
                            <li>
                                <i className='bx bx-chevron-right'></i> <a href="#">Events</a>   
                            </li>
                            <li>
                                <i className='bx bx-chevron-right'></i>{''}
                                <a href="#">Private chefs</a>
                            </li>
                            <li>
                                <i className='bx bx-chevron-right'></i>{''}
                                <a href="#">Seminars</a>
                            </li>
                        </ul>
                    </div>

                    <div className='col-lg-4 col-md-6 footer-newsletter'>
                        <h4>Our Newsletter</h4>
                        <p>
                            We will be providing upcomming events from here in the nearest future
                        </p>
                        <form action="" method='post'>
                            <input type="email" name='email' />
                            <input type="submit" value='Subsribe' />
                        </form>
                    </div>
                </div>
            </div>
        </div>

        <div className='container'>
            <div className='copyright'>
                &copy; Copyright{''}
                <strong>
                    <span>Skyline Digital</span>
                </strong>
                .All Rights Reserved
            </div>
            <div className='credits'>
                Designed by <a href="">Nell Tony</a>
            </div>
        </div>
    </footer>
  );
}
