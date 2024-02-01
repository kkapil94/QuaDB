import React from "react";
import BookModal from "./BookModal";

export default function BookTicketModal() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return (
    <>
      <button onClick={() => setOpen(true)}>BookTicket</button>
      {open && <BookModal closeModal={close} />}
    </>
  );
}
