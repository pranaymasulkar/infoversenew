import dynamic from "next/dynamic";
import Link from 'next/link'
import {useRouter} from 'next/router';
import {useEffect, useState} from "react";
// import './navbar.css'
import {NavbarLogo} from '../../utils/allImgs'
import {Addshrink} from '../../utils'
// import Preloader from '../../components/Preloader'
// import data from '../../data/data-layouts/data-Head.json'
import { RiMenu4Fill } from "react-icons/ri";
import { Offcanvas, Button, NavDropdown, Nav } from "react-bootstrap";


const Preloader = dynamic(
  () => {
    return import('../../components/Preloader/Index');
  },
  { ssr: false }
);

function Header({Title}){
    const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    useEffect(() => {

        Addshrink()

    },[window.pageYOffset])

    const router = useRouter()


  return(
    <>
        <Preloader Title={Title} />
        <nav className="navbar navbar-expand-xs navbar-white fixed-top" id="banner">
            <div className="container">
                <Link href="/">
                    <a className="navbar-brand">
                        <img src={NavbarLogo.src} alt="logo" />
                    </a>
                </Link>

                <Button className="navbar-toggler menubtn px-0"  onClick={handleShow}>
                    <RiMenu4Fill/> Menu
                </Button>

                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav ms-auto">
                        {/* <li className="nav-item">
                            <Link href="/AiTechnology">
                                <a className="nav-link">
                                Ai
                                </a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/SpaceTechnology">
                                <a className="nav-link">
                                Space Tech
                                </a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/Clientel">
                                <a className="nav-link">
                                Clientel
                                </a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/Blockchain">
                                <a className="nav-link">
                                Blockchain
                                </a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/About">
                                <a className="nav-link">
                                About
                                </a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/Portfolio">
                                <a className="nav-link">
                                Portfolio
                                </a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/Contact">
                                <a className="nav-link">
                                Contact
                                </a>
                            </Link>
                        </li> */}
                        {/* <li className="nav-item" onClick={handleShow}>
                            <Button variant="primary" className="menubtn shadow-none p-0">
                                <a className="nav-link">
                                   <RiMenu4Fill/> Menu
                                </a>
                            </Button>
                        </li> */}
                        
                    </ul>
                </div>
            </div>
        </nav>


        <Offcanvas className="sidedrowers" show={show} onHide={handleClose} placement="end" name="end">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>
                    <Link href="/">
                        <a className="navbar-brand">
                            <img src={NavbarLogo.src} alt="logo" />
                        </a>
                    </Link>
                </Offcanvas.Title>
            </Offcanvas.Header>
            <hr className="sidedivider"/>
            <Offcanvas.Body>
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <Link href="/">
                            <a className="btn-sidenav" data-back="Home" data-front="Home"></a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/about">
                            <a className="btn-sidenav" data-back="About" data-front="About"></a>
                        </Link>
                    </li>
                    {/* <li className="nav-item">
                        <Link href="/products">
                            <a className="btn-sidenav" data-back="Products" data-front="Products"></a>
                        </Link>
                    </li> */}
                    <li className="nav-item">
                            <p className="btn-sidenav px-4 ms-1 color-gold mb-0">Services</p>
                        
                        <ul>
                            <li className="nav-item">
                            <Link href="/blockchain">
                                <a className="btn-sidenav" data-back="Blockchain" data-front="Blockchain"></a>
                            </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/aitechnology">
                                    <a className="btn-sidenav" data-back="Ai" data-front="Ai"></a>
                                </Link>
                            </li>
                            {/* <li className="nav-item">
                                <Link href="/spacetechnology">
                                    <a className="btn-sidenav" data-back="Space Tech" data-front="Space Tech"></a>
                                </Link>
                            </li> */}
                        </ul>
                    </li>
                    
                    {/* <li className="nav-item">
                        <Link href="/clientel">
                            <a className="btn-sidenav" data-back="Clientel" data-front="Clientel"></a>
                        </Link>
                    </li> */}
                    {/* <li className="nav-item">
                        <Link href="/">
                            <a className="btn-sidenav" data-back="Collaboration" data-front="Collaboration"></a>
                        </Link>
                    </li> */}
                    {/* <li className="nav-item">
                        <Link href="/portfolio">
                            <a className="btn-sidenav" data-back="Portfolio" data-front="Portfolio"></a>
                        </Link>
                    </li> */}
                    <li className="nav-item">
                        <Link href="/career">
                            <a className="btn-sidenav" data-back="Career" data-front="Career"></a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/contact">
                            <a className="btn-sidenav" data-back="Contact Us" data-front="Contact Us"></a>
                        </Link>
                    </li>
                </ul>
                
            </Offcanvas.Body>
        </Offcanvas>

        
    </>
  )
}

export default Header