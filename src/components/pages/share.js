import React, { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";


import '../../App.css';
import {
    FacebookShareButton,
    EmailShareButton,
    FacebookMessengerShareButton,
    FacebookMessengerIcon,
  } from 'react-share';
import {
    FacebookIcon,
    EmailIcon,
    TwitterShareButton
,TwitterIcon
,LineShareButton
,LineIcon
  } from 'react-share';

// import { NaverBlogButton , KaKaoStoryButton ,KaKaoTalkButton  } from "react-social-kr";

export default function Share() {
    const [cur_url,setCurUrl] = useState("")
    const location = useLocation();
    useEffect(()=>{
        if(window && window.location && window.location.href ){
            const _cur_url = window.location.href;
            if (_cur_url.includes("localhost")){
                setCurUrl("https://www.naver.com")
            }else{
                setCurUrl(window.location.href)
            }
        }
    },[]);
    console.log(cur_url, 'is cur url')
    return (
        <>
            <div className="tpl-page-footer galProjectBg ftpd30">
                <div className="container" style={{display:"flex"}}>
                    <div className="row">
                        <div style={{marginRight: "36px" }}>
                            <FacebookShareButton quote="페이스북 공유하기" url={cur_url}>
                                <FacebookIcon size={48} round={true} borderRadius={24}/>
                            </FacebookShareButton> 
                           
                        </div>
                    </div>

                    <div className="row">
                        <div style={{marginRight: "36px" }}>
                            <FacebookMessengerShareButton  url={cur_url}>
                                <FacebookMessengerIcon size={48} round={true} borderRadius={24}/>
                            </FacebookMessengerShareButton> 
                           
                        </div>
                    </div>

                    <div className="row">
                        <div style={{marginRight: "36px" }}>
                            <EmailShareButton  url={cur_url}>
                                <EmailIcon size={48} round={true} borderRadius={24}/>
                            </EmailShareButton> 
                           
                        </div>
                    </div>

                    <div className="row">
                        <div style={{marginRight: "36px" }}>
                            <TwitterShareButton  url={cur_url}>
                                 <TwitterIcon size={48} round={true} borderRadius={24}></TwitterIcon>
                            </TwitterShareButton>
                        </div>
                    </div>
                    <div className="row">
                        <div style={{marginRight: "36px" }}>
                            <LineShareButton url={cur_url}>
                                <LineIcon size={48} round={true} borderRadius={24}></LineIcon>
                            </LineShareButton>
                        </div>
                    </div>
                    
                    
                </div>
            </div>
        </>
    );
}