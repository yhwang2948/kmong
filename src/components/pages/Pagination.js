import React, { useState, useRef, useEffect } from "react";
import "../../App.css";
import "../pages/Pagination.css";
import { Link as RouterLink } from "react-scroll";

import { useNavigate } from "react-router-dom";
import list_new from "../../images/fa-01-list-new.png";
import prev_new from "../../images/fa-01-prev-new.png";
import prev_active_new from "../../images/fa-01-prev-active-new.png";
import next_new from "../../images/fa-01-next-new.png";
import next_active_new from "../../images/fa-01-next-active-new.png";

const TOTAL_SLIDES = 3; // 전체 슬라이드 개수(총3개. 배열로 계산)
const INDEX_TO_ROUTE_MAP = {
  aboutUs: 0,
  certification: 1,
  orderProcess: 2,
};
const ROUTE_TO_INDEX_MAP = {
  0: "aboutUs",
  1: "certification",
  2: "orderProcess",
};
export default function Pagination(props) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slideRef = useRef(null);

  const navigate = useNavigate();
  const { location } = props;

  // Next 버튼 클릭 시
  const NextSlide = (e) => {
    e.preventDefault();
        
    let currentPath =  location && location.pathname || "";
    let nextSlide = 0;
    if (currentPath.includes("aboutUs")) {
      nextSlide = 1;
    } else if (currentPath.includes("certification")) {
      nextSlide = 2;
    }
    const route = ROUTE_TO_INDEX_MAP[nextSlide];
    navigate(`/services/${route}`);
    setCurrentSlide(nextSlide);
  };
  // Prev 버튼 클릭 시
  const PrevSlide = (e) => {
    e.preventDefault(); 

    let nextSlide = 1;
    let currentPath = location && location.pathname || "";
    if (currentPath.includes("aboutUs")) {
      nextSlide = 2;
    } else if (currentPath.includes("certification")) {
      nextSlide = 0;
    }
    const route = ROUTE_TO_INDEX_MAP[nextSlide];
    navigate(`/services/${route}`);
    setCurrentSlide(nextSlide);
  };

  // useEffect(() => {
  //   slideRef.current.style.transition = 'all 0.5s ease-in-out';
  //   slideRef.current.style.transform = `translateX(-${currentSlide}00%)`;
  // }, [currentSlide]);

  return (
    <>
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
            <div className="col-xs-12 col-sm-12 col-md-12 page-btn-col">
              <p>{currentSlide + 1}번 째 사진</p>
              <RouterLink to="/" className="data-page-back">
                <img src={list_new} className="fa" /> LIST
              </RouterLink>
              <div className="btn-box">
                <span className="data-page-prev active" onClick={PrevSlide}>
                  <img src={prev_new} className="fa" />
                  <img src={prev_active_new} className="fa active" />
                  PREV
                </span>
                <span className="data-page-next active" onClick={NextSlide}>
                  NEXT
                  <img src={next_new} className="fa" />
                  <img src={next_active_new} className="fa active" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
