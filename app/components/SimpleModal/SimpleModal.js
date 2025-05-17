"use client";

import "./SimpleModal.css";

function SimpleModal({ open, children, setOpen }) {
  return (
    <>
      {open && (
        <div className="modal">
          <div className="modal-wrapper">
            <div className="modal-content">
              {children}
              <span
                className="close close-modal"
                onClick={() => setOpen(false)}
              >
                <img src="/close.svg" alt="закрыть" />
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default SimpleModal;
