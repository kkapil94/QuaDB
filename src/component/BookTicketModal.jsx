import React, { useState } from "react";
import BookModal from "./BookModal";

export default function BookTicketModal({ movie }) {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return (
    <>
      <button
        className="bg-[#1F2544] text-xl text-stone-100 py-2 px-8 tracking-widest "
        onClick={() => setOpen(true)}
      >
        BookTicket
      </button>
      {open && <BookModal closeModal={close} movie={movie} />}
    </>
  );
}
