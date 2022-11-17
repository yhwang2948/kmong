import React from 'react';
import '../../App.css';
import './Footer.css';
import 'boxicons' 
import { Link } from 'react-scroll';

export default function Footer() {
    return (
        <>
            <div className="footer-sgkorea32 el-footer element aos-animate" data-type="footer" data-el="el-footer" data-id="footer" data-name="footer-sgkorea32">
                <div className="container">
                    <div className="row">

                        <div className="col-md-12 col-sm-12 col-xs-12 cl-footer-site-element">
                            <p className="text cl-footer-company-info" data-edit="true" data-selector=".text">
                                <span className="fsize11">COPYRIGHT S.G KOREA &nbsp;© 2022. ALL RIGHTS RESERVED.</span>
                            </p>
                        </div>

                    </div>
                </div>
            </div>
            <Link to="/" className="goto-top" spy={true} smooth={true} >
            <box-icon name='chevron-up'></box-icon> 
            </Link>
           
        </>
    )
}