"use client";

import { createContext, useContext, useState } from "react";

const LeadContext = createContext();

export function LeadProvider({ children }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [source, setSource] = useState("");

  const openModal = (sourcePage = "General CTA") => {
    setSource(sourcePage);
    setIsModalOpen(true);
  };
  const closeModal = () => setIsModalOpen(false);

  return (
    <LeadContext.Provider value={{ isModalOpen, openModal, closeModal, source }}>
      {children}
    </LeadContext.Provider>
  );
}

export function useLeadModal() {
  const context = useContext(LeadContext);
  if (!context) {
    throw new Error("useLeadModal must be used within a LeadProvider");
  }
  return context;
}
