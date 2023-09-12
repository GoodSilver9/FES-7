import React from "react";
import "../CSS/Modal.css";

export default function Modal() {
  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h2>회원이 되신것을 환영합니다!</h2>
        <button>닫기</button>
      </div>
    </div>
  );
}
