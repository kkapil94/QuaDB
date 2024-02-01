import React from "react";

export default function BookModal() {
  return (
    <div>
      <div
        onClick={closeModal}
        className="modal-wrapper fixed top-0 bottom-0 left-0 right-0 bg-black opacity-75"
      >
        <div className="fixed z-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/12 bg-[#36485e] p-4 rounded-2xl">
          <div className="flex justify-between ">
            <span className="text-lg text-slate-400">Book Ticket</span>
            <button onClick={closeModal}>
              <img className="h-6" src="/img/cross.png" alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
