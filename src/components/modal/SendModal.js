import React, { useRef, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';



const ModalWrapper = styled.div`
    position: fixed;
    display: flex;
    width: 56%;
    height: 33%;
    top: 25%;
    box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
    background: #fff;
    color: #000;
    border-radius: 0;
    bottom: 50px;
    justify-content: center;
    align-items: center;
    left: 300px;
    border: none;
    padding: 20px 20px 50px;
    
`;

const H3 = styled.h3`
    text-align: center;
    padding-top: 0;
    margin: 0;
    margin-top: 50px;
    margin-bottom: 70px;
    font-size: 24px;
    font-weight: normal;
    line-height: 1.2;
    letter-spacing: -0.72px;
    color: #222222;
`;

const InputBtn = styled.input`
    background-color: #3c4450!important;
    line-height: 1;
    border: none;
    font-family: inherit;
    padding: 18px 15px;
    margin: 50px auto 10px auto;
`;

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;

const SendModal = ({ modalOpen, setModalOpen }) => {
    const modalRef = useRef();


    const closeModal = e => {
        if (modalRef.current === e.target) {
            setModalOpen(false);
        }
    };

    const keyPress = useCallback(
        e => {
            if (e.key === 'Escape' && modalOpen) {
                setModalOpen(false);
                console.log('I pressed');
            }
        },
        [setModalOpen, modalOpen]
    );

    useEffect(
        () => {
            document.addEventListener('keydown', keyPress);
            return () => document.removeEventListener('keydown', keyPress);
        },
        [keyPress]
    );
    return (
        <>
            {modalOpen ? (
                <ModalWrapper modalOpen={modalOpen}>
                    <div>
                        <H3>신청완료되었습니다</H3>
                        <InputBtn type="button" value="확인" onClick={() => setModalOpen(prev => !prev)}/>
                    </div>

                    <CloseModalButton
                        aria-label='Close modal'
                        onClick={() => setModalOpen(prev => !prev)}
                    />
                </ModalWrapper>
            ) : null}
        </>
    )
}

export default SendModal