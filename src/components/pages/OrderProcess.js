import React from "react";
import "../../App.css";
import "../pages/Certification.css";
import Comments from "../../components/pages/Comments";
import Pagination from "../../components/pages/Pagination";
import purchase from "../../images/purchase.jpg";
import purchase2 from "../../images/purchase2.jpg";
import { useLocation } from "react-router-dom";
export default function OrderProcess() {
  const location = useLocation();
  return (
    <>
      <div className="dsgn-body  mode-render bdpt165">
        <div
          id="userEL9075_id"
          className="userEL11369075 el_0 element aos-animate"
          data-id="11369075"
          data-el="el_0"
          data-pos="1"
          data-name="userEL11369075"
          data-msny="false"
          data-type="project"
          data-type2=""
          data-mode=""
          data-width="0"
          data-overlap="0"
          data-ppos="1"
          data-posby=""
          data-bookmark="11369075"
        >
          <div className="container">
            <div className="row">
              <Pagination location={location} />

              <div className="col-xs-12 col-sm-12 col-md-12 text-center">
                <figcaption>
                  <h5
                    className="figure"
                    data-selector="h5.figure"
                    data-edit="true"
                    data-project-title=""
                  >
                    <div>
                      <span className="fsize60 ffamilly">SG코리아 인증서</span>
                    </div>
                  </h5>
                  <div data-edit="true" className="figure" />
                </figcaption>
              </div>
            </div>
          </div>
        </div>

        <div
          className="userEL11369161 el_1 element aos-animate"
          data-id="11369161"
          data-el="el_1"
          data-pos="2"
          data-name="userEL11369161"
          data-msny="false"
          data-type="image"
          data-type2=""
          data-mode=""
          data-width="1920"
          data-overlap="1"
          data-ppos="2"
          data-posby=""
        >
          <div className="container">
            <div className="row" data-matrix-loop="true" data-matrix-column="1">
              <div className="col-xs-12 col-sm-12 col-md-12 item">
                <div className="img-wrap">
                  <img
                    src={purchase}
                    className="img-responsive"
                    data-attach="true"
                    data-img-original="OFF"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="userEL11369161 el_1 element aos-animate"
          data-id="11369161"
          data-el="el_1"
          data-pos="2"
          data-name="userEL11369161"
          data-msny="false"
          data-type="image"
          data-type2=""
          data-mode=""
          data-width="1920"
          data-overlap="1"
          data-ppos="2"
          data-posby=""
        >
          <div className="container">
            <div className="row" data-matrix-loop="true" data-matrix-column="1">
              <div className="col-xs-12 col-sm-12 col-md-12 item">
                <div className="img-wrap">
                  <img
                    src={purchase2}
                    className="img-responsive"
                    data-attach="true"
                    data-img-original="OFF"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <Comments />
      </div>
    </>
  );
}
