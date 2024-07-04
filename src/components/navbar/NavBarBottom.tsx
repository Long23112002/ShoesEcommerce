import "../../styles/navbar.css";
import { SearchOutlined } from "@ant-design/icons";
import { Button, Input } from "antd";
import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";

export default function NavBarBottom() {
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="container-fulid navbar-bottom">
      <div className="container">
        <div className="d-flex " style={{ justifyContent: "space-between" }}>
          <div>
            <a style={{ width: 59, height: 59, display: "inline-block" }}>
              <svg
                aria-hidden="true"
                className="swoosh-svg svg-style"
                focusable="false"
                viewBox="0 0 24 24"
                role="img"
                width="24px"
                height="24px"
                fill="none"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M21 8.719L7.836 14.303C6.74 14.768 5.818 15 5.075 15c-.836 0-1.445-.295-1.819-.884-.485-.76-.273-1.982.559-3.272.494-.754 1.122-1.446 1.734-2.108-.144.234-1.415 2.349-.025 3.345.275.2.666.298 1.147.298.386 0 .829-.063 1.316-.19L21 8.719z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
          <div
            className="d-flex justify-content-center none-nav-960"
            style={{ flex: 1, marginLeft: 150 }}
          >
            <ul className="d-flex align-items-center gap-4 list-unstyled mb-0">
              <li className="nav-item item-navbar">
                <a className="text-navbar-bottom mouse-hover" href="#">
                  New & Featured
                </a>
              </li>

              <li className="nav-item item-navbar">
                <a className="text-navbar-bottom mouse-hover" href="#">
                  Men
                </a>
              </li>

              <li className="nav-item item-navbar">
                <a className="text-navbar-bottom mouse-hover" href="#">
                  Women
                </a>
              </li>
              <li className="nav-item item-navbar">
                <a className="text-navbar-bottom mouse-hover" href="#">
                  Kids
                </a>
              </li>
              <li className="nav-item item-navbar">
                <a className="text-navbar-bottom mouse-hover" href="#">
                  Sale
                </a>
              </li>
              <li className="nav-item item-navbar">
                <a className="text-navbar-bottom mouse-hover" href="#">
                  Customise
                </a>
              </li>
            </ul>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div
              style={{ position: "relative" }}
              className="d-flex align-items-center search-container"
            >
              <Button
                style={{ position: "absolute", top: 0, zIndex: 100 }}
                className="button-search"
                shape="circle"
                icon={<SearchOutlined />}
              />
              <Input className="input-search" placeholder="Search" />
              <a className="hover-icon">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  viewBox="0 0 24 24"
                  role="img"
                  width="24px"
                  height="24px"
                  fill="none"
                >
                  <path
                    stroke="currentColor"
                    strokeWidth="1.5"
                    d="M16.794 3.75c1.324 0 2.568.516 3.504 1.451a4.96 4.96 0 010 7.008L12 20.508l-8.299-8.299a4.96 4.96 0 010-7.007A4.923 4.923 0 017.205 3.75c1.324 0 2.568.516 3.504 1.451l.76.76.531.531.53-.531.76-.76a4.926 4.926 0 013.504-1.451"
                  ></path>
                </svg>
              </a>
              <a className="hover-icon">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  viewBox="0 0 24 24"
                  role="img"
                  width="24px"
                  height="24px"
                  fill="none"
                >
                  <path
                    stroke="currentColor"
                    strokeWidth="1.5"
                    d="M8.25 8.25V6a2.25 2.25 0 012.25-2.25h3a2.25 2.25 0 110 4.5H3.75v8.25a3.75 3.75 0 003.75 3.75h9a3.75 3.75 0 003.75-3.75V8.25H17.5"
                  ></path>
                </svg>
              </a>

              <div className="block-960">
                <Button onClick={handleShow} className="me-2">
                  <FontAwesomeIcon icon={faList} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="end"
        className="custom-offcanvas"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}
