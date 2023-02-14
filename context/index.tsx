import { ModalTypes } from "@/types";
import { createContext, useContext, useState } from "react";

const ModalContext = createContext({} as ModalTypes);

const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [isCreateAgreementOpen, setIsCreateAgreementOpen] = useState(false);
  const [isSignAgreementOpen, setIsSignAgreementOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleCreateAgreement = () => setIsCreateAgreementOpen((prev) => !prev);
  const toggleSignAgreement = () => setIsSignAgreementOpen((prev) => !prev);
  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);

  return (
    <ModalContext.Provider
      value={{
        isCreateAgreementOpen,
        isSignAgreementOpen,
        toggleCreateAgreement,
        toggleSignAgreement,
        isSidebarOpen,
        toggleSidebar,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);

export default ModalProvider;
