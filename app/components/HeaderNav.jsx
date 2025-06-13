"use client";
// import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
// import { Link, useLocation } from "react-router-dom";
import { Logo, Menu, MenuClose } from "./SVG";

import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";

import useScrollDirection from "../hooks/useScrollDirection";
import useIsScrolled from "../hooks/useIsScrolled";
import LoaderLinks from "./LoaderLinks";
import Link from "next/link";

const HeaderNav = ({ headerData }) => {
  const [isHoveringSubmenu, setIsHoveringSubmenu] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const scrollDirection = useScrollDirection(100, isHoveringSubmenu);
  const isScrolled = useIsScrolled();
  // const location = useLocation();
  // const scrollDirection = useScrollDirection();
  // const handleMouseEnter = () => {
  //   document.body.classList.add("no-scroll");
  // };

  // const handleMouseLeave = () => {
  //   document.body.classList.remove("no-scroll");
  // };
  const pathname = usePathname(); //Gets current path (e.g., '/dashboard')
  // const searchParams = useSearchParams(); // Gets query params (URLSearchParams object)
  useEffect(
    function () {
      setIsMobileMenuOpen(false);
    },
    [pathname]
  );
  function handleToggle(index) {
    if (activeIndex === index) setActiveIndex(null);
    else {
      setActiveIndex(index);
    }
  }
  function handleMegaMenuToggle(e) {
    e.preventDefault();
    setShowMegaMenu((is) => !is);
  }
  function CloseMobileMenu(e) {
    e.stopPropagation();
    setActiveIndex(null);
    setIsMobileMenuOpen(false);
  }
  return (
    <div
      className={`menu-fixed-wrapper ${
        scrollDirection === "down" ? "hide" : "show"
      } ${isScrolled ? "scrolled" : ""}`}
      onMouseEnter={() => setIsHoveringSubmenu(true)}
      onMouseLeave={() => setIsHoveringSubmenu(isMobileMenuOpen)}
    >
      <div className="d-none d-lg-block">
        <nav>
          <div className="container-fluid header_nav d-flex align-items-center justify-content-between">
            <div className="logo">
              <LoaderLinks href="/">
                <Logo />
              </LoaderLinks>
            </div>

            <div className="navmenu_mid">
              <ul>
                <li>
                  <span>Services</span>
                  {/* onClick={handleMegaMenuToggle} */}
                  <div
                    // className={`sub-menu ${
                    //   scrollDirection === "down" ? "hide" : "show"
                    // }`}
                    // ${
                    //   showMegaMenu ? "sub-menu-open" : ""
                    // }
                    className={`sub-menu`}
                  >
                    <div className="container-fluid sub-menu-container scrollable-div">
                      <Tab.Container defaultActiveKey={0}>
                        <div className="row">
                          <div className="col-md-4 col-tabs">
                            {/* scrollable-div */}
                            <div className="">
                              <div className="sub-menu-title">
                                <p>Services</p>
                              </div>
                              <Nav variant="pills" className="flex-column">
                                <Nav.Item>
                                  <Nav.Link eventKey={0} as={"button"}>
                                    Digital Marketing Services <span></span>
                                  </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                  <Nav.Link eventKey={1} as={"button"}>
                                    Software Development <span></span>
                                  </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                  <Nav.Link eventKey={2} as={"button"}>
                                    Consulting <span></span>
                                  </Nav.Link>
                                </Nav.Item>
                              </Nav>
                            </div>
                            <div className="reviewed-on">
                              <p>We are Reviewed on</p>
                              <div className="platforms">
                                {headerData.header_review_sites.map(
                                  (row, k) => (
                                    <a
                                      href={row.review_site_link_header}
                                      target="_blank"
                                      key={k}
                                    >
                                      <img
                                        src={row.review_site_logo_header}
                                        alt={row.review_site_name_header}
                                      />
                                    </a>
                                  )
                                )}
                              </div>
                            </div>
                          </div>
                          {/* scrollable-div */}
                          <div className="col-md-8 col-tabs-data">
                            <Tab.Content>
                              <Tab.Pane eventKey={0}>
                                <div className="row">
                                  <div className="col">
                                    <div className="sub-menu-title">
                                      <p>Digital Marketing Services</p>
                                      <LoaderLinks href="/services">
                                        Explore More <span></span>
                                      </LoaderLinks>
                                    </div>
                                  </div>
                                </div>
                                <div className="row row-cols-2 row-cols-lg-3">
                                  <div className="col">
                                    <div className="title">
                                      <p>
                                        <LoaderLinks href="/services-level-two">
                                          SEO Services
                                        </LoaderLinks>
                                      </p>
                                    </div>
                                    <ul className="sub-links">
                                      <li>
                                        <LoaderLinks href="/services-level-three">
                                          Local SEO
                                        </LoaderLinks>
                                      </li>
                                      <li>
                                        <LoaderLinks href="/services-level-three">
                                          Generative Engine Optimization
                                        </LoaderLinks>
                                      </li>
                                      <li>
                                        <LoaderLinks href="/services-level-three">
                                          eCommerce SEO
                                        </LoaderLinks>
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="col">
                                    <div className="title">
                                      <p>
                                        <LoaderLinks href="/services-level-two">
                                          Paid Media Management
                                        </LoaderLinks>
                                      </p>
                                    </div>
                                    <ul className="sub-links">
                                      <li>
                                        <LoaderLinks href="/services-level-three">
                                          Google/Bing Ads
                                        </LoaderLinks>
                                      </li>
                                      <li>
                                        <LoaderLinks href="/services-level-three">
                                          Social Ads
                                        </LoaderLinks>
                                      </li>
                                      <li>
                                        <LoaderLinks href="/services-level-three">
                                          Amazon Strategic Account Management
                                        </LoaderLinks>
                                      </li>
                                      <li>
                                        <LoaderLinks href="/services-level-three">
                                          Amazon Ad Management
                                        </LoaderLinks>
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="col">
                                    <div className="title">
                                      <p>
                                        <LoaderLinks href="/services-level-two">
                                          Social Media
                                        </LoaderLinks>
                                      </p>
                                    </div>
                                    <ul className="sub-links">
                                      <li>
                                        <LoaderLinks href="/services-level-three">
                                          Social Media Optimization
                                        </LoaderLinks>
                                      </li>
                                      <li>
                                        <LoaderLinks href="/services-level-three">
                                          Meta
                                        </LoaderLinks>
                                      </li>
                                      <li>
                                        <LoaderLinks href="/services-level-three">
                                          Tiktok
                                        </LoaderLinks>
                                      </li>
                                      <li>
                                        <LoaderLinks href="/services-level-three">
                                          LinkedIn
                                        </LoaderLinks>
                                      </li>
                                      <li>
                                        <LoaderLinks href="/services-level-three">
                                          Twitter
                                        </LoaderLinks>
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="col">
                                    <div className="title">
                                      <p>
                                        <LoaderLinks href="/services-level-two">
                                          Branding & Content
                                        </LoaderLinks>
                                      </p>
                                    </div>
                                    <ul className="sub-links">
                                      <li>
                                        <LoaderLinks href="/services-level-three">
                                          Content Strategy
                                        </LoaderLinks>
                                      </li>
                                      <li>
                                        <LoaderLinks href="/services-level-three">
                                          Digital PR
                                        </LoaderLinks>
                                      </li>
                                      <li>
                                        <LoaderLinks href="/services-level-three">
                                          Online Reputation Management
                                        </LoaderLinks>
                                      </li>
                                      <li>
                                        <LoaderLinks href="/services-level-three">
                                          Email Marketing
                                        </LoaderLinks>
                                      </li>
                                      <li>
                                        <LoaderLinks href="/services-level-three">
                                          Guest Posting
                                        </LoaderLinks>
                                      </li>
                                      <li>
                                        <LoaderLinks href="/services-level-three">
                                          Influencer Marketing
                                        </LoaderLinks>
                                      </li>
                                      <li>
                                        <LoaderLinks href="/services-level-three">
                                          Infographics
                                        </LoaderLinks>
                                      </li>
                                      <li>
                                        <LoaderLinks href="/services-level-three">
                                          Whitepaper
                                        </LoaderLinks>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </Tab.Pane>
                              <Tab.Pane eventKey={1}>
                                <div className="row">
                                  <div className="col">
                                    <div className="sub-menu-title">
                                      <p>Software Development</p>
                                      <LoaderLinks href="/services">
                                        Explore More <span></span>
                                      </LoaderLinks>
                                    </div>
                                  </div>
                                </div>
                                <div className="row row-cols-2 row-cols-lg-3">
                                  <div className="col">
                                    <div className="title">
                                      <p>
                                        <LoaderLinks href="/services-level-two">
                                          Development
                                        </LoaderLinks>
                                      </p>
                                    </div>
                                    <ul className="sub-links">
                                      <li>
                                        <LoaderLinks href="/services-level-three">
                                          Digital Experience Development
                                        </LoaderLinks>
                                      </li>
                                      <li>
                                        <LoaderLinks href="/services-level-three">
                                          Ecommerce Development
                                        </LoaderLinks>
                                      </li>
                                      <li>
                                        <LoaderLinks href="/services-level-three">
                                          Website Development
                                        </LoaderLinks>
                                      </li>
                                      <li>
                                        <LoaderLinks href="/services-level-three">
                                          Mobile App Development
                                        </LoaderLinks>
                                      </li>
                                      <li>
                                        <LoaderLinks href="/services-level-three">
                                          Web Infrastructure & Maintenance
                                        </LoaderLinks>
                                      </li>
                                      <li>
                                        <LoaderLinks href="/services-level-three">
                                          Content Management Systems
                                        </LoaderLinks>
                                      </li>
                                      <li>
                                        <LoaderLinks href="/services-level-three">
                                          AI & GPT Integration
                                        </LoaderLinks>
                                      </li>
                                      <li>
                                        <LoaderLinks href="/services-level-three">
                                          ADA Compliance Services
                                        </LoaderLinks>
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="col">
                                    <div className="title">
                                      <p>
                                        <LoaderLinks href="/services-level-two">
                                          Software Solutions
                                        </LoaderLinks>
                                      </p>
                                    </div>
                                    <ul className="sub-links">
                                      <li>
                                        <LoaderLinks href="/services-level-three">
                                          Artificial Intelligence
                                        </LoaderLinks>
                                      </li>
                                      <li>
                                        <LoaderLinks href="/services-level-three">
                                          AR / VR
                                        </LoaderLinks>
                                      </li>
                                      <li>
                                        <LoaderLinks href="/services-level-three">
                                          Autodesk
                                        </LoaderLinks>
                                      </li>
                                      <li>
                                        <LoaderLinks href="/services-level-three">
                                          Biometrics
                                        </LoaderLinks>
                                      </li>
                                      <li>
                                        <LoaderLinks href="/services-level-three">
                                          Business Intelligence & Analytics
                                        </LoaderLinks>
                                      </li>
                                      <li>
                                        <LoaderLinks href="/services-level-three">
                                          Cloud
                                        </LoaderLinks>
                                      </li>
                                      <li>
                                        <LoaderLinks href="/services-level-three">
                                          CRM
                                        </LoaderLinks>
                                      </li>
                                      <li>
                                        <LoaderLinks href="/services-level-three">
                                          Database
                                        </LoaderLinks>
                                      </li>
                                      <li>
                                        <LoaderLinks href="/services-level-three">
                                          Document Management
                                        </LoaderLinks>
                                      </li>
                                      <li>
                                        <LoaderLinks href="/services-level-three">
                                          Embedded Software
                                        </LoaderLinks>
                                      </li>
                                      <li>
                                        <LoaderLinks href="/services-level-three">
                                          ERP
                                        </LoaderLinks>
                                      </li>
                                      <li>
                                        <LoaderLinks href="/services-level-three">
                                          IT Service Management
                                        </LoaderLinks>
                                      </li>
                                      <li>
                                        <LoaderLinks href="/services-level-three">
                                          Kiosk
                                        </LoaderLinks>
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="col">
                                    <div className="title">
                                      <p>
                                        <LoaderLinks href="/services-level-two">
                                          Design
                                        </LoaderLinks>
                                      </p>
                                    </div>
                                    <ul className="sub-links">
                                      <li>
                                        <LoaderLinks href="/services-level-three">
                                          Website Design
                                        </LoaderLinks>
                                      </li>
                                      <li>
                                        <LoaderLinks href="/services-level-three">
                                          Social Media Design
                                        </LoaderLinks>
                                      </li>
                                      <li>
                                        <LoaderLinks href="/services-level-three">
                                          Ecommerce Website Design
                                        </LoaderLinks>
                                      </li>
                                      <li>
                                        <LoaderLinks href="/services-level-three">
                                          Email Marketing Testing & Design
                                        </LoaderLinks>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </Tab.Pane>
                              <Tab.Pane eventKey={2}>
                                <div className="row">
                                  <div className="col">
                                    <div className="sub-menu-title">
                                      <p>Consulting</p>
                                      <LoaderLinks href="/services">
                                        Explore More <span></span>
                                      </LoaderLinks>
                                    </div>
                                  </div>
                                </div>
                                <div className="row row-cols-2 row-cols-lg-3">
                                  <div className="col">
                                    <div className="title">
                                      <p>
                                        <LoaderLinks href="/services-level-two">
                                          Digital Product Strategy
                                        </LoaderLinks>
                                      </p>
                                    </div>
                                  </div>
                                  <div className="col">
                                    <div className="title">
                                      <p>
                                        <LoaderLinks href="/services-level-two">
                                          Feasibility Analysis & Study
                                        </LoaderLinks>
                                      </p>
                                    </div>
                                  </div>
                                  <div className="col">
                                    <div className="title">
                                      <p>
                                        <LoaderLinks href="/services-level-two">
                                          Business Development Consulting
                                        </LoaderLinks>
                                      </p>
                                    </div>
                                  </div>
                                  <div className="col">
                                    <div className="title">
                                      <p>
                                        <LoaderLinks href="/services-level-two">
                                          Digital Transformation Consulting
                                        </LoaderLinks>
                                      </p>
                                    </div>
                                  </div>
                                  <div className="col">
                                    <div className="title">
                                      <p>
                                        <LoaderLinks href="/services-level-two">
                                          Change Management Consulting
                                        </LoaderLinks>
                                      </p>
                                    </div>
                                  </div>
                                  <div className="col">
                                    <div className="title">
                                      <p>
                                        <LoaderLinks href="/services-level-two">
                                          Executive Coaching
                                        </LoaderLinks>
                                      </p>
                                    </div>
                                  </div>
                                  <div className="col">
                                    <div className="title">
                                      <p>
                                        <LoaderLinks href="/services-level-two">
                                          Staff Training & Development
                                        </LoaderLinks>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </Tab.Pane>
                            </Tab.Content>
                          </div>
                        </div>
                      </Tab.Container>
                    </div>
                  </div>
                </li>
                <li>
                  <LoaderLinks href="/about">About Us</LoaderLinks>
                  <div
                    // className={`sub-menu ${
                    //   scrollDirection === "down" ? "hide" : "show"
                    // }`}
                    className="sub-menu sm"
                  >
                    {/* <div className="container-fluid sub-menu-container scrollable-div"></div> */}

                    <ul>
                      <li>
                        <LoaderLinks href="/portfolio">Portfolio</LoaderLinks>
                      </li>
                      <li>
                        <LoaderLinks href="/seo-detail">SEO Detail</LoaderLinks>
                      </li>
                      <li>
                        <LoaderLinks href="/web-detail">Web Detail</LoaderLinks>
                      </li>
                      <li>
                        <LoaderLinks href="/blog">Blog</LoaderLinks>
                      </li>
                      {/* <li>
                        <LoaderLinks href="/about">
                          Learn About GWebPro Marketing Inc.
                        </LoaderLinks>
                      </li> */}
                    </ul>
                  </div>
                </li>
                <li>
                  <LoaderLinks href="/contact">Contact</LoaderLinks>
                </li>
              </ul>
            </div>

            <div className="navmenu_end">
              <ul>
                {/* <li>
                  <LoaderLinks href="/contact">Get a Quote</LoaderLinks>
                </li> */}
                <li>
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSfyIGXnukYa9Cybk3NeHk4gC4F44U5o66GUMi9umkkaFi2V2w/viewform"
                    target="_blank"
                    rel="nofollow"
                  >
                    Request For Proposal
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <div
        className={`d-block d-lg-none ${isMobileMenuOpen ? "isOpen" : ""} ${
          scrollDirection === "down" ? "hide" : "show"
        } ${isScrolled ? "scrolled" : ""}`}
        onMouseEnter={() => setIsHoveringSubmenu(true)}
        onMouseLeave={() => setIsHoveringSubmenu(isMobileMenuOpen)}
      >
        <nav>
          <div className="container-fluid header_nav d-flex align-items-center justify-content-between">
            <div className="logo">
              <Link href="/" onClick={CloseMobileMenu}>
                <Logo />
              </Link>
            </div>
            <div
              className={`toggle d-lg-none ${isMobileMenuOpen ? "isOpen" : ""}`}
              onClick={() => setIsMobileMenuOpen((is) => !is)}
            >
              <button>{isMobileMenuOpen ? <MenuClose /> : <Menu />}</button>
            </div>
            <div
              className={`mobile-menu  ${
                isMobileMenuOpen ? "d-block" : "d-none"
              }`}
            >
              <div className="mobile-menu-block scrollable-div">
                <div className="accordion accordion_type_header_menu">
                  <div
                    className={`accordion_item ${
                      activeIndex === 0 ? "active" : ""
                    }`}
                  >
                    <div
                      className="accordion_title"
                      onClick={() => handleToggle(0)}
                      style={{ cursor: "pointer" }}
                    >
                      <div>Services</div>
                      <span></span>
                    </div>
                    <div className={`collapsible`}>
                      <div className="hidden">
                        <div className="accordion_content">
                          <div className="accordion">
                            <div className="accordion_item active">
                              <div className="accordion_title">
                                <Link
                                  href="/services"
                                  onClick={CloseMobileMenu}
                                >
                                  Digital Marketing Services
                                </Link>
                              </div>
                              <div className="collapsible">
                                <div className="hidden">
                                  <div className="accordion_content">
                                    {/* row-cols-md-2 */}
                                    <div className="row  gy-3">
                                      <div className="col"></div>
                                      <div className="col"></div>
                                      <div className="col"></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="accordion_item active">
                              <div className="accordion_title">
                                <Link
                                  href="/services"
                                  onClick={CloseMobileMenu}
                                >
                                  Software Development
                                </Link>
                              </div>
                              <div className="collapsible">
                                <div className="hidden">
                                  <div className="accordion_content">
                                    {/* row-cols-md-2 */}
                                    <div className="row  gy-3">
                                      <div className="col">
                                        <div className="title">
                                          <p>
                                            <Link
                                              href="/services-level-two"
                                              onClick={CloseMobileMenu}
                                            >
                                              Development
                                            </Link>
                                          </p>
                                        </div>
                                        <ul className="sub-links">
                                          <li>
                                            <Link
                                              href="/services-level-three"
                                              onClick={CloseMobileMenu}
                                            >
                                              Digital Experience Development
                                            </Link>
                                          </li>
                                          <li>
                                            <Link
                                              href="/services-level-three"
                                              onClick={CloseMobileMenu}
                                            >
                                              Ecommerce Development
                                            </Link>
                                          </li>
                                          <li>
                                            <Link
                                              href="/services-level-three"
                                              onClick={CloseMobileMenu}
                                            >
                                              Website Development
                                            </Link>
                                          </li>
                                          <li>
                                            <Link
                                              href="/services-level-three"
                                              onClick={CloseMobileMenu}
                                            >
                                              Mobile App Development
                                            </Link>
                                          </li>
                                          <li>
                                            <Link
                                              href="/services-level-three"
                                              onClick={CloseMobileMenu}
                                            >
                                              Web Infrastructure & Maintenance
                                            </Link>
                                          </li>
                                          <li>
                                            <Link
                                              href="/services-level-three"
                                              onClick={CloseMobileMenu}
                                            >
                                              Content Management Systems
                                            </Link>
                                          </li>
                                          <li>
                                            <Link
                                              href="/services-level-three"
                                              onClick={CloseMobileMenu}
                                            >
                                              AI & GPT Integration
                                            </Link>
                                          </li>
                                          <li>
                                            <Link
                                              href="/services-level-three"
                                              onClick={CloseMobileMenu}
                                            >
                                              ADA Compliance Services
                                            </Link>
                                          </li>
                                        </ul>
                                      </div>
                                      <div className="col">
                                        <div className="title">
                                          <p>
                                            <Link
                                              href="/services-level-two"
                                              onClick={CloseMobileMenu}
                                            >
                                              Software Solutions
                                            </Link>
                                          </p>
                                        </div>
                                        <ul className="sub-links">
                                          <li>
                                            <Link
                                              href="/services-level-three"
                                              onClick={CloseMobileMenu}
                                            >
                                              Artificial Intelligence
                                            </Link>
                                          </li>
                                          <li>
                                            <Link
                                              href="/services-level-three"
                                              onClick={CloseMobileMenu}
                                            >
                                              AR / VR
                                            </Link>
                                          </li>
                                          <li>
                                            <Link
                                              href="/services-level-three"
                                              onClick={CloseMobileMenu}
                                            >
                                              Autodesk
                                            </Link>
                                          </li>
                                          <li>
                                            <Link
                                              href="/services-level-three"
                                              onClick={CloseMobileMenu}
                                            >
                                              Biometrics
                                            </Link>
                                          </li>
                                          <li>
                                            <Link
                                              href="/services-level-three"
                                              onClick={CloseMobileMenu}
                                            >
                                              Business Intelligence & Analytics
                                            </Link>
                                          </li>
                                          <li>
                                            <Link
                                              href="/services-level-three"
                                              onClick={CloseMobileMenu}
                                            >
                                              Cloud
                                            </Link>
                                          </li>
                                          <li>
                                            <Link
                                              href="/services-level-three"
                                              onClick={CloseMobileMenu}
                                            >
                                              CRM
                                            </Link>
                                          </li>
                                          <li>
                                            <Link
                                              href="/services-level-three"
                                              onClick={CloseMobileMenu}
                                            >
                                              Database
                                            </Link>
                                          </li>
                                          <li>
                                            <Link
                                              href="/services-level-three"
                                              onClick={CloseMobileMenu}
                                            >
                                              Document Management
                                            </Link>
                                          </li>
                                          <li>
                                            <Link
                                              href="/services-level-three"
                                              onClick={CloseMobileMenu}
                                            >
                                              Embedded Software
                                            </Link>
                                          </li>
                                          <li>
                                            <Link
                                              href="/services-level-three"
                                              onClick={CloseMobileMenu}
                                            >
                                              ERP
                                            </Link>
                                          </li>
                                          <li>
                                            <Link
                                              href="/services-level-three"
                                              onClick={CloseMobileMenu}
                                            >
                                              IT Service Management
                                            </Link>
                                          </li>
                                          <li>
                                            <Link
                                              href="/services-level-three"
                                              onClick={CloseMobileMenu}
                                            >
                                              Kiosk
                                            </Link>
                                          </li>
                                        </ul>
                                      </div>
                                      <div className="col">
                                        <div className="title">
                                          <p>
                                            <Link
                                              href="/services-level-two"
                                              onClick={CloseMobileMenu}
                                            >
                                              Design
                                            </Link>
                                          </p>
                                        </div>
                                        <ul className="sub-links">
                                          <li>
                                            <Link
                                              href="/services-level-three"
                                              onClick={CloseMobileMenu}
                                            >
                                              Website Design
                                            </Link>
                                          </li>
                                          <li>
                                            <Link
                                              href="/services-level-three"
                                              onClick={CloseMobileMenu}
                                            >
                                              Social Media Design
                                            </Link>
                                          </li>
                                          <li>
                                            <Link
                                              href="/services-level-three"
                                              onClick={CloseMobileMenu}
                                            >
                                              Ecommerce Website Design
                                            </Link>
                                          </li>
                                          <li>
                                            <Link
                                              href="/services-level-three"
                                              onClick={CloseMobileMenu}
                                            >
                                              Email Marketing Testing & Design
                                            </Link>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="accordion_item active">
                              <div className="accordion_title">
                                <Link
                                  href="/services"
                                  onClick={CloseMobileMenu}
                                >
                                  Consulting
                                </Link>
                              </div>
                              <div className="collapsible">
                                <div className="hidden">
                                  <div className="accordion_content">
                                    {/* row-cols-md-2 */}
                                    <div className="row gy-3">
                                      <div className="col"></div>
                                      <div className="col"></div>
                                      <div className="col"></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className={`accordion_item ${
                      activeIndex === 1 ? "active" : ""
                    }`}
                  >
                    <div
                      className="accordion_title"
                      onClick={() => handleToggle(1)}
                      style={{ cursor: "pointer" }}
                    >
                      <div>
                        <Link href="/about" onClick={CloseMobileMenu}>
                          About Us
                        </Link>
                      </div>
                      <span></span>
                    </div>
                    <div className={`collapsible`}>
                      <div className="hidden">
                        <div className="accordion_content">
                          <ul>
                            <li>
                              <Link href="/portfolio" onClick={CloseMobileMenu}>
                                Portfolio
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/seo-detail"
                                onClick={CloseMobileMenu}
                              >
                                SEO Detail
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/web-detail"
                                onClick={CloseMobileMenu}
                              >
                                Web Detail
                              </Link>
                            </li>
                            <li>
                              <Link href="/blog" onClick={CloseMobileMenu}>
                                Blog
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className={`accordion_item ${
                      activeIndex === 2 ? "active" : ""
                    }`}
                  >
                    <div
                      className="accordion_title"
                      onClick={() => handleToggle(2)}
                      style={{ cursor: "pointer" }}
                    >
                      <div>
                        <Link href="/contact" onClick={CloseMobileMenu}>
                          Contact
                        </Link>
                      </div>
                    </div>
                    {/* <div className={`collapsible`}>
                      <div className="hidden">
                        <div className="accordion_content">
                          <div></div>
                        </div>
                      </div>
                    </div> */}
                  </div>
                </div>
                <div className="navmenu_end">
                  <ul>
                    {/* <li>
                      <LoaderLinks href="/contact">Get a Quote</LoaderLinks>
                    </li> */}
                    <li>
                      <a
                        href="https://docs.google.com/forms/d/e/1FAIpQLSfyIGXnukYa9Cybk3NeHk4gC4F44U5o66GUMi9umkkaFi2V2w/viewform"
                        target="_blank"
                        rel="nofollow"
                        onClick={CloseMobileMenu}
                      >
                        Request For Proposal
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default HeaderNav;
