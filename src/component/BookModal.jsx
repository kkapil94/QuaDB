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
      <div className="fixed h-[80vh] xs:max-md:w-10/12 z-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/12 bg-stone-100 xs:max-md:p-2 p-8 rounded-2xl">
        <div className="flex justify-between xs:max-md:pt-1  pt-4">
          <span className="text-2xl text-[#1F2544]">Book Ticket</span>
          <button onClick={closeModal}>
            <img
              className="h-8 xs:max-md:h-6 hover:scale-110 transition-all duration-150 ease-in-out"
              src="/img/close.png"
              alt=""
            />
          </button>
        </div>
        <div className="xs:max-md:mt-4 mt-6">
          <h1 className="text-center xs:max-md:text-2xl text-4xl">
            {movie?.name}
          </h1>
          <form className="xs:max-md:mt-4 mt-8 flex flex-col xs:max-md:gap-4 gap-8">
            <div className="flex items-center justify-between">
              <label className="xs:max-md:text-xl text-2xl" htmlFor="ticketNum">
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
              <span className="xs:max-md:text-xl text-2xl">
                Price Per Ticket
              </span>
              <span className="xs:max-md:text-xl text-2xl">₹330</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="xs:max-md:text-xl text-2xl">Total Price</span>
              <span className="xs:max-md:text-xl text-2xl">
                ₹{330 * ticketNum}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="xs:max-md:text-xl text-2xl">Date</span>
              <input required type="date" max="2024-02-10" min="2024-02-01" />
            </div>
            <button
              className="bg-[#1F2544] xs:max-md:mt-4 text-xl text-stone-100 py-2 px-8 tracking-widest "
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
