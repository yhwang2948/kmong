import React from 'react';
import '../../App.css';
import '../pages/Comments.css';
import Share from '../../components/pages/share';



export default function Comments() {
  return (
    <>
    <Share />
      <div className="page-comments galProjectBg cmtStyle" data-id="3206376">
        <div className="container">
          <div className="comment-cnt">댓글<b>1</b></div>
          <div className="tpl-comment-form">
            <div className="comm-wrap">
              <div className="comm-body">
                <span className="comm-profile">
                  <svg viewBox="0 0 40 40" width="35" height="35">
                    <pattern id="comment-write-image wh40" patternUnits="userSpaceOnUse">
                    <image width="40px" height="40px" xmlnsXlink="//storage.googleapis.com/i.addblock.net/member/profile_default.jpg?_0617?_1655453901870" />
                    </pattern>
                    <circle cx="20" cy="20" r="20" fill="url(#comment-write-image)"/>
                  </svg>
                </span>
                <div className="comm-area">
                  <textarea className="form-control" id="comm-content" placeholder="댓글을 입력해주세요."></textarea>
                </div>
              </div>
              <div className="comm-footer">
                <div className="checkbox">
                  <label>
                    <input type="checkbox" className='comm-secret wh16'/>
                      {/* <span className="cl-icon">
                        <svg viewBox="0 0 16 16" className=''>
                          <path d="M13 0H3C1.3 0 0 1.3 0 3v10c0 1.7 1.3 3 3 3h10c1.7 0 3-1.3 3-3V3C16 1.3 14.7 0 13 0zM15 13c0 1.1-0.9 2-2 2H3c-1.1 0-2-0.9-2-2V3c0-1.1 0.9-2 2-2h10c1.1 0 2 0.9 2 2V13z"/>
                        </svg>
                        <svg viewBox="0 0 16 16" className="active wh16">
                          <path d="M13 0H3C1.34 0 0 1.34 0 3v10c0 1.66 1.34 3 3 3h10c1.66 0 3-1.34 3-3V3C16 1.34 14.66 0 13 0zM13.03 6.03l-5.5 5.5C7.38 11.68 7.19 11.75 7 11.75s-0.38-0.07-0.53-0.22l-3.5-3.5c-0.29-0.29-0.29-0.77 0-1.06s0.77-0.29 1.06 0L7 9.94l4.97-4.97c0.29-0.29 0.77-0.29 1.06 0S13.32 5.74 13.03 6.03z"/>
                        </svg>
                      </span> */}
                      비밀글
                  </label>
                </div>
                <div className="btn-box comment-submit">
                  <span className="btn btn-submit btn-round"> 등록</span>
                </div>
              </div>
            </div>
          </div>
          <ul className="comment-list">
            <li className="cm-row " id="217783">
              <div className="comm-wrap">
                <div className="comm-body">
                  <span className="comm-profile">
                    <svg viewBox="0 0 40 40" className='wh35'>
                      <pattern id="comment-list-image217783 wh40" patternUnits="userSpaceOnUse">
                        <image width="40" height="40" xmlnsXlink="//storage.googleapis.com/cr-resource/image/2a9120a2b115feb38eec9743905e5176/sgkorea32/2ded4c6c6c5e99bd99cfe84cacfa8349.png?_1655453901871"/>
                      </pattern>
                      <circle cx="20" cy="20" r="20" fill="url(#comment-list-image217783)"></circle>
                    </svg>
                  </span>
                  <div className="comm-area">
                    <span className="cm-name ">SG코리아 </span>
                    <span className="cm-time">2주 전</span>
                    <span className="cm-section">
                      <span className="cm-reply cm-controls scmcStyle" data-id="217783" data-name="SG코리아 " data-option="" data-myimage="//storage.googleapis.com/i.addblock.net/member/profile_default.jpg?_0617" >
                        <i className="fa fa-reply"></i> 답글
                      </span>
                      <span className="cm-update cm-controls scmcStyle disabled " data-id="217783">
                        <i className="fa fa-pencil"></i> 편집
                      </span>
                      <span className="cm-delete cm-controls scmcStyle disabled" data-id="217783">
                        <i className="fa fa-trash-o"></i> 삭제
                      </span>
                    </span>
                    <div className="cm-content" data-id="217783">
                      <span className="cm-textarea">
                        산업안전펜스 전문업체 sg코리아입니다. <br /> 문의사항이 있으시다면 언제든지 댓글 달아주세요!<br /> 전문적인 상담을 약속 드립니다.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}