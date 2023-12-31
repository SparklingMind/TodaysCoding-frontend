import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function SignUpErrorModal(props) {
  return (
    <Modal
      style={{
        display: "flex",
        justifyContent:"center"
      }}
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          회원가입 오류
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p style={{
            margin:"10px auto"
        }}>
          잠시 후 다시 시도해 주세요.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>확인</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default SignUpErrorModal


