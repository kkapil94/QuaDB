import React, { useEffect, useState } from "react";

export default function BookModal({ closeModal, movie }) {
  const [ticketNum, setTicketNum] = useState(1);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);
  return (
    <div>
      <div
        onClick={closeModal}
        className="modal-wrapper fixed top-0 bottom-0 left-0 right-0 bg-black opacity-75"
      ></div>
      <div className="fixed h-[80vh] z-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/12 bg-stone-100 p-8 rounded-2xl">
        <div className="flex justify-between  pt-4">
          <span className="text-2xl text-[#1F2544]">Book Ticket</span>
          <button onClick={closeModal}>
            <img
              className="h-8 hover:scale-110 transition-all duration-150 ease-in-out"
              src="/img/close.png"
              alt=""
            />
          </button>
        </div>
        <div className="mt-6">
          <h1 className="text-center text-4xl">{movie?.name}</h1>
          <form className="mt-8 flex flex-col gap-8">
            <div className="flex items-center justify-between">
              <label className="text-2xl" htmlFor="ticketNum">
                No. of Tickets
              </label>
              <input
                className="w-16 text-2xl text-center"
                type="number"
                name="ticketNum"
                id="ticketNum"
                placeholder="1"
                onChange={(e) => setTicketNum(e.target.value)}
                min={1}
                required
                max={20}
              />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-2xl">Price Per Ticket</span>
              <span className="text-2xl">₹330</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-2xl">Total Price</span>
              <span className="text-2xl">₹{330 * ticketNum}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-2xl">Date</span>
              <input required type="date" max="2024-02-10" min="2024-02-01" />
            </div>
            <button
              className="bg-[#1F2544] text-xl text-stone-100 py-2 px-8 tracking-widest "
              onClick={() => setOpen(true)}
            >
              Confirm
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
