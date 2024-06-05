import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import logo from "../../assets/circles.png";

const Footer = () => {
    return (
        // <MDBFooter color="unique-color-dark" className="font-medium pt-4 mt-4">
        //   <MDBContainer className="text-left text-md-left">
        //     <MDBRow className="text-left text-md-left mt-3 pb-3">
        //       <MDBCol md="3" lg="3" xl="4" className="mx-auto mt-3">
        //         <h6 className="text-uppercase mb-4 font-weight-bold">
        //           <img src={logo} alt="Book Store App" height="50px" />
        //           <strong>Book-IT</strong>
        //         </h6>
        //         <p>
        //           Book-IT is an online React web application where the customer can
        //           purchase books online. Through this book store the users can
        //           search for a book by its title and later can add to the shopping
        //           cart and finally purchase using credit card transaction.
        //         </p>
        //       </MDBCol>
        //       <hr className="w-100 clearfix d-md-none" />
        //       <MDBCol md="2" lg="2" xl="2" className="mx-auto mt-3">
        //         <h6 className="text-uppercase mb-4 font-weight-bold">
        //           <strong>Products</strong>
        //         </h6>
        //         <p>
        //           <a href="#">Book-IT</a>
        //         </p>
        //         <p>
        //           <a href="https://akshatjalan.github.io/akshat/">Portfolio</a>
        //         </p>
        //       </MDBCol>

        //       <hr className="w-100 clearfix d-md-none" />
        //       <MDBCol md="4" lg="3" xl="3" className="mx-auto mt-3">
        //         <h6 className="text-uppercase mb-4 font-weight-bold">
        //           <strong>Contact</strong>
        //         </h6>
        //         <p>
        //           <i className="fa fa-envelope mr-3" />{" "}
        //           &nbsp;xuanthangnguyen2002@gmail.com
        //         </p>
        //         <p>
        //           <a
        //             className="btn-floating btn-sm rgba-white-slight mx-1"
        //             href="https://www.linkedin.com/in/winhandsome/"
        //           >
        //             <i className="fab fa-linkedin-in" /> &nbsp;LinkedIn
        //           </a>
        //         </p>
        //       </MDBCol>
        //     </MDBRow>
        //     <hr />
        //     <MDBRow className="d-flex align-items-center">
        //       <MDBCol md="8" lg="8">
        //         <p className="text-left text-md-left grey-text">
        //           &copy; {new Date().getFullYear()} Made by
        //           <a href=""> Win Handsome </a>
        //         </p>
        //       </MDBCol>
        //       <MDBCol md="4" lg="4" className="ml-lg-0">
        //         <div className="text-left text-md-right">
        //           <ul className="list-unstyled list-inline">
        //             <li className="list-inline-item">
        //               <a
        //                 className="btn-floating btn-sm rgba-white-slight mx-1"
        //                 href="http://github.com/Akshatjalan"
        //               >
        //                 <i className="fab fa-github" />
        //               </a>
        //             </li>
        //             <li className="list-inline-item">
        //               <a
        //                 className="btn-floating btn-sm rgba-white-slight mx-1"
        //                 href="https://www.linkedin.com/in/akshat-jalan/"
        //               >
        //                 <i className="fab fa-linkedin-in" />
        //               </a>
        //             </li>
        //             <li className="list-inline-item">
        //               <a
        //                 className="btn-floating btn-sm rgba-white-slight mx-1"
        //                 href="https://www.instagram.com/akshatxjalan/"
        //               >
        //                 <i className="fab fa-instagram" />
        //               </a>
        //             </li>
        //           </ul>
        //         </div>
        //       </MDBCol>
        //     </MDBRow>
        //   </MDBContainer>
        // </MDBFooter>
        <footer className='bg-black text-white h-auto text-item-white pt-10 z-30 mt-10 mb-0'>
            <div className='w-auto'>
                <div className='h-auto w-auto flex flex-col md:flex-row gap-4 justify-around items-center md:items-start'>
                    <div className='flex flex-col text-left md:text-left'>
                        <div className='w-auto h-auto font-extrabold text-lg pb-6'>
                            <a
                                href={`/about`}
                                className='transition-all ease-in-out duration-200'
                            >
                                About
                            </a>
                        </div>
                        <div className='w-auto h-auto py-2 font-thin'>
                            <a
                                href={`/about`}
                                
                                className='transition-all ease-in-out duration-200'
                            >
                                Book store information
                            </a>
                        </div>
                        <div className='w-auto h-auto py-2'>
                            <a
                                href={`/term`}
                                
                                className='transition-all ease-in-out duration-200'
                            >
                                Shipping policies
                            </a>
                        </div>
                        <div className='w-auto h-auto py-2'>
                            <a
                                href={`/term`}
                                
                                className='transition-all ease-in-out duration-200'
                            >
                                Terms and conditions
                            </a>
                        </div>
                    </div>
                    {/* Contacts */}
                    <div className='flex flex-col text-left md:text-left'>
                        <div className='w-auto h-auto font-extrabold text-lg pb-6'>
                            Contact
                        </div>
                        <div className='w-auto h-auto py-2 font-thin'>
                            Email: thebookstore@gmail.com
                        </div>
                        <div className='w-auto h-auto py-2'>
                            Phone: 0123456789
                        </div>
                        <div className='w-auto h-auto py-2'>Social media:</div>
                        <div className='w-auto h-auto py-2 flex flex-row justify-center md:justify-start gap-2'>
                            <a
                                className='w-auto h-auto items-center'
                                href=''
                                target='_blank'
                            >
                                {" "}
                                {/* <FacebookOutlined
                                    style={{ fontSize: "1.4rem" }}
                                /> */}
                                Facebook
                            </a>
                            <a
                                className='w-auto h-auto items-center'
                                href=''
                                target='_blank'
                            >
                                {" "}
                                {/* <YoutubeOutlined
                                    style={{ fontSize: "1.4rem" }}
                                /> */}
                                Youtube
                            </a>
                            <a
                                className='w-auto h-auto items-center'
                                href=''
                                target='_blank'
                            >
                                {" "}
                                {/* <InstagramOutlined
                                    style={{ fontSize: "1.4rem" }}
                                /> */}
                                Instagram
                            </a>
                        </div>
                    </div>
                    {/* Actions */}
                    <div className='flex flex-col text-left md:text-left'>
                        <div className='w-auto h-auto font-extrabold text-lg pb-6'>
                            Action
                        </div>
                        <div className='w-auto h-auto py-2 font-thin'>
                            <a
                                href={`/profile`}
                                
                                className='transition-all ease-in-out duration-200'
                            >
                                Acount
                            </a>
                        </div>
                        <div className='w-auto h-auto py-2'>
                            <a
                                href={`/cart`}
                                
                                className='transition-all ease-in-out duration-200'
                            >
                                Cart
                            </a>
                        </div>
                        <div className='w-auto h-auto py-2'>
                            <a
                                href={`/myorder`}
                                
                                className='transition-all ease-in-out duration-200'
                            >
                                Order
                            </a>
                        </div>
                        <div className='w-auto h-auto py-2'>
                            <a
                                href={`/`}
                                
                                className='transition-all ease-in-out duration-200'
                            >
                                Feedback
                            </a>
                        </div>
                    </div>
                    {/* Receive information */}
                </div>
                <div className='h-auto w-auto font-extrabold text-3xl text-center font-serif py-8'>
                    THE BOOK STORE
                </div>
            </div>
        </footer>
    );
};

export default Footer;
