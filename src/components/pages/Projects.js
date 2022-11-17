import React from 'react';
import '../../App.css';
import './Project.css'
import unnamed2 from '../../images/unnamed2.png';
import unnamed3 from '../../images/unnamed3.jpg';
import unnamed4 from '../../images/unnamed4.jpg';

export default function Projects() {
  return (
    <>
      <div id="/Projects" />
      <div className="userEL5490799 link-to-PROJECTS el_5 element aos-animate" data-width="600" data-id="5490799" data-el="el_5" data-pos="10" data-name="userEL5490799" data-msny="false" data-type="gallery" data-type2="" data-mode="project" data-overlap="0" data-category="OFF">
        <div className="container">
          <div className="row multi-columns-row" data-loop="true" data-view="6">

            <div className="col-xs-6 col-sm-4 col-md-4 grid gallery-item" data-index="0" data-seq="1565664">
              <a href="#" data-title="Aosaff 안전펜스">
                <figure>
                  <div className="img-wrapper">
                    <img src={unnamed2} className="img-responsive" />
                    <div className="over-box" data-selector=".over-box" data-background="true" data-title="rollover background" />
                    <div className="over-icon" />
                  </div>

                  <figcaption data-selector="figcaption" data-background="true" data-title="text background">
                    <h5 className="figure" data-selector="h5.figure" data-font="true" data-title="title font">Aosaff 안전펜스</h5>
                    <p className="figure" data-selector="p.figure" data-font="true" data-title="content font">고품질, 저렴한 가격, 쉽고 빠른 설치가 가능한 안전펜스</p>
                    <div className="figure price hide" data-selector=".figure.price" data-font="true" data-title="price font">
                      <span className="figure-krw">￦</span>
                      77,000
                    </div>
                    <div className="figure datetime hide">May 4,2020</div>
                    <div className="figure hashtag hide" />
                  </figcaption>
                </figure>
              </a>
            </div>

            <div className="col-xs-6 col-sm-4 col-md-4 grid gallery-item" data-index="1" data-seq="1565669">
              <a href="/index/view/1565669" data-title="MPM 안전가드">
                <figure>
                  <div className="img-wrapper">
                    <img src={unnamed3} className="img-responsive" />
                    <div className="over-box" />
                    <div className="over-icon" />
                  </div>

                  <figcaption>
                    <h5 className="figure">MPM 안전가드</h5>
                    <p className="figure">공간의 제약이 적으며 충격흡수에 강한 안전가드</p>
                    <div className="figure price hide">
                      <span className="figure-krw">￦</span>
                      77,000
                    </div>
                    <div className="figure datetime hide">May 4,2020</div>
                    <div className="figure hashtag hide"></div>
                  </figcaption>
                </figure>
              </a>
            </div>

            <div className="col-xs-6 col-sm-4 col-md-4 grid gallery-item" data-index="2" data-seq="1565671">
              <a href="/index/view/1565671" data-title="안전펜스 설치사진">
                <figure>
                  <div className="img-wrapper">
                    <img src={unnamed4} className="img-responsive" />
                    <div className="over-box" />
                    <div className="over-icon" />
                  </div>

                  <figcaption>
                    <h5 className="figure">안전펜스 설치사진</h5>
                    <p className="figure">Aosaff 설치 사진</p>
                    <div className="figure price hide">
                      <span className="figure-krw">￦</span>
                      77,000
                    </div>
                    <div className="figure datetime hide">May 4,2020</div>
                    <div className="figure hashtag hide" />
                  </figcaption>
                </figure>
              </a>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}