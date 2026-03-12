"use client"

import { FaWhatsapp } from "react-icons/fa"

export default function WhatsappButton() {

  const phone = "919876543210"
  const message = "Hello! I want to know more about your services."

  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button"
      style={{
        position: "fixed",
        bottom: "24px",
        right: "24px",
        zIndex: 9999,
      }}
    >
      <FaWhatsapp size={28} />
    </a>
  )
}
