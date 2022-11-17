import React, { useState, useRef, useEffect } from "react";
import "../../App.css";
import "../pages/AboutUs.css";
import { Link as RouterLink } from "react-scroll";
import list_new from "../../images/fa-01-list-new.png";
import prev_new from "../../images/fa-01-prev-new.png";
import prev_active_new from "../../images/fa-01-prev-active-new.png";
import next_new from "../../images/fa-01-next-new.png";
import next_active_new from "../../images/fa-01-next-active-new.png";
import introduction from "../../images/introduction.jpg";
import version from "../../images/version.jpg";
import Comments from "../../components/pages/Comments";
import Pagination from "../../components/pages/Pagination";
import { useLocation } from "react-router-dom";
const TOTAL_SLIDES = 3; // 전체 슬라이드 개수(총3개. 배열로 계산)
export default function AboutUs() {
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
                      <span className="fsize60 ffamilly">
                        SG코리아 회사소개
                      </span>
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
                    src={introduction}
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
          className="userEL11369168 el_2 element aos-animate"
          data-id="11369168"
          data-el="el_2"
          data-pos="3"
          data-name="userEL11369168"
          data-msny="false"
          data-type="image"
          data-type2=""
          data-mode=""
          data-width="1920"
          data-overlap="1"
          data-ppos="3"
          data-posby=""
        >
          <div className="container">
            <div className="row" data-matrix-loop="true" data-matrix-column="1">
              <div className="col-xs-12 col-sm-12 col-md-12 item">
                <div className="img-wrap">
                  <img
                    src={version}
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
