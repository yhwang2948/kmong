import React, { useState } from 'react';
import '../../App.css';
import './Contact.css';
import SendModal from './../modal/SendModal';

import { sendMail } from '../mail/helper/Mail';

export default function Contact({ props }) {

  const selectList = ["선택하세요", "12시", "13시", "14시"];
  const [Selected, setSelected] = useState("");
  const [modalOpen, setModalOpen] = useState(false)

  const handleSelect = (e) => {
    setSelected(e.target.value);
  };


  const openModal = () => {
    setModalOpen(prev => !prev);
  }

    const [values, setValues] = useState({
      userEmail: "",
      message: "",
      status: false
    })
    const { userEmail, message, status } = values;
    const handleChange = name => event => {
      setValues({ ...values, [name]: event.target.value })
    }

    const handleSubmit = event => {
      event.preventDefault();
      console.log("values email", userEmail);
      console.log("values message", message);
      sendMail({ userEmail, message }).then(data => {
        if (data.err) {
          console.log("err ", data.err)
        } else {
          console.log("Success", data);
          setValues({ ...setValues, status: true });
        }
      }).catch(console.log("error in send email"))
    }

    return (
      <>
        <div id="/Contect" />
        <div className="userEL5516702 link-to-CONTACT el_6 element aos-animate style6702" data-id="5516702" data-el="el_6" data-pos="16" data-name="userEL5516702" data-msny="false" data-type="form" data-type2="form" data-mode="" data-width="0" data-overlap="0" data-bookmark="5516702">
          <div className="container">
            <div className="row">

              <div className="col-xs-12 col-sm-4 col-md-4">
                <h2 className="head_title" data-edit="true" data-selector=".head_title">
                  <div>
                    <span className="fsize50">
                      <strong><span className="cRgb123">ORDE​R</span></strong>
                    </span>
                  </div>
                </h2>
                <div className="subtitle" data-edit="true" data-selector=".subtitle">
                  <span className="fsize14">주문양식<br /><br /></span>
                </div>
                <div className="title-text" data-edit="true" data-selector=".title-text">
                  <div>
                    <span className="cRgb123">
                      <strong><span className="fsize15">TEL</span></strong>
                    </span>
                  </div>
                </div>
                <div data-edit="true" className="left">
                  <span className="fsize16">
                    <strong>T</strong> 051.925.0300 <br />
                    <strong>P</strong> 010.5529.0300
                  </span>
                </div>
                <div className="title-text" data-edit="true" data-selector=".title-text">
                  <div>
                    <span className="cRgb123">
                      <strong><span className="fsize15">E-Mail</span></strong>
                    </span>
                  </div>
                </div>
                <div data-edit="true" className="email-mgbt left">
                  <span className="fsize16">sgkorea32@naver.com</span>
                </div>
                <div className="title-text" data-edit="true" data-selector=".title-text">
                  <div>
                    <span className="cRgb123">
                      <strong><span className="fsize15">Address</span></strong>
                    </span>
                  </div>
                </div>
                <div data-edit="true" className="left">
                  <span className="fsize16">부산 강서구 유통단지 1로 41 <br />티플렉스 112동 217호</span>
                </div>
              </div>
              {/* onSubmit={sendEmail} */}
              <div className="col-xs-12 col-sm-8 col-md-8 col-sm-offset-0 right">
                <form className="form-inline" role="form" onSubmit={handleSubmit} >
                  <div className="form-group">
                    <h3 className="">이름</h3>
                    <input className="form-control" type="text" name="name" placeholder="" form-idx="1" form-seq="123319" form-name="이름" form-type="text" form-require="" form-check="" />
                  </div>

                  <div className="form-group">
                    <h3 className="">이메일</h3>
                    <input className="form-control" name="user_email" value={userEmail} type="email" onChange={handleChange("userEmail")} placeholder="" form-idx="2" form-seq="123320" form-name="이메일" form-type="email" form-require="" form-check="" />
                  </div>

                  <div className="form-group">
                    <h3 className="">휴대전화</h3>
                    <input className="form-control" name="phone_number" type="number" placeholder="" form-idx="3" form-seq="123321" form-name="휴대전화" form-type="text" form-require="" form-check="" />
                  </div>

                  <div className="form-group">
                    <h3 className="">주문요청시간</h3>

                    <select className="form-control" form-idx="4" form-seq="123322" form-name="주문요청시간" form-type="select" form-require="" form-val="12시`13시`14시" name="req_time" onChange={handleSelect} value={Selected}>
                      {selectList.map((item) => (
                        <option value={item} key={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group">
                    <h3 className="">픽업방법</h3>
                    <div form-idx="5" form-seq="123323" form-name="픽업방법" form-type="check" form-require="" form-val="직접방문`배달요청">
                      <label className="checkbox-inline">
                        <input type="checkbox" className="forms-item-check" name="Pickup" value="직접방문" />직접방문</label>
                      <label className="checkbox-inline">
                        <input type="checkbox" className="forms-item-check" name="check6" value="배달요청" />배달요청
                      </label>
                    </div>
                  </div>

                  <div className="form-group">
                    <h3 className="">요청사항</h3>
                    <textarea className="form-control" name="message" value={message} onChange={handleChange("message")} form-idx="6" form-seq="123324" form-name="요청사항" form-type="memo" form-require="" />
                  </div>

                  <div className="form-submit-wrap">
                    <span className="btn" data-selector=".btn" data-edit="true" data-form-submit="" data-background="true" data-title="버튼 배경">
                      {/* <input type="submit" id="order" className="fsize12" value="주문서 보내기"/> */}
                      <input type="submit" id="order" className="fsize12" value="주문서 보내기" onClick={openModal} />
                      <SendModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
                    </span>
                  </div>
                </form>
                {
                  status ? <duv><h1>message sent successfully</h1></duv> : <div></div>
                }
              </div>

            </div>
          </div>
        </div>
      </>
    )
  }
// }