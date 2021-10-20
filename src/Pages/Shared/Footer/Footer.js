import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faAddressBook,
  faAddressCard,
  faAmbulance,
  faBlog,
  faEnvelope,
  faFax,
  faHome,
  faInfo,
  faLink,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="mt-5 footer">
      <div className="">
        <div className="row">
          <div className="col-md-4">
            <div className="second-part">
              <h1>Social Links</h1>
              <p className="mt-4">
                <span className="m-2 fs-4 text-primary bg-light px-3 py-2 rounded-3">
                  <FontAwesomeIcon icon={faFacebookF} />
                </span>
                <span className="m-2 fs-4 text-danger bg-light px-3 py-2 rounded-3">
                  <FontAwesomeIcon icon={faYoutube} />
                </span>
                <span className="m-2 fs-4 text-info bg-light px-3 py-2 rounded-3">
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </span>
                <span className="m-2 fs-4 text-warning bg-light px-3 py-2 rounded-3">
                  <FontAwesomeIcon icon={faInstagram} />
                </span>
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="third-part">
              <h1>Useful Links</h1>

              <p className="mt-4">
              <p>
                <FontAwesomeIcon icon={faHome} className="text-success me-2" />
                Home
              </p>
                <FontAwesomeIcon icon={faAddressBook} className="text-success me-2" />
                About us
              </p>

              <p>
                <FontAwesomeIcon icon={faInfo} className="text-success me-2" />
                Contact Us
              </p>
              
              <p>
                <FontAwesomeIcon icon={faBlog} className="text-success me-2" />
                Blogs
              </p>
              <p>
                <FontAwesomeIcon icon={faAmbulance} className="text-success me-2" />
                Emergency
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="fourth-part">
              <h1>Contact Us</h1>
              <small className="mt-5">
                <FontAwesomeIcon
                  icon={faAddressCard}
                  className="text-info me-2 fs-5"
                />
                Office: 2 North Mugda Dhaka
              </small>
              <br />
              <small className="mt-3">
                <FontAwesomeIcon
                  icon={faPhone}
                  className="text-info me-2 fs-5"
                />
                Phone: (08) 8827 852365
              </small>
              <br />
              <small className="mt-3">
                <FontAwesomeIcon
                  icon={faFax}
                  className="text-danger me-2 fs-5"
                />
                Fax: 08) 08 2896 1524
              </small>
              <br />
              <small className="mt-3">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="text-primary me-2 fs-5"
                />
                Mail: support.hr.renax.com
              </small>
            </div>
          </div>
        </div>
        <hr />
        <div className="button text-center">
          <small>© 2021 Renax. All Rights Reserved.</small>
        </div>
      </div>
    </div>
  );
};

export default Footer;
