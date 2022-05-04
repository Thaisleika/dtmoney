import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import Modal from "react-modal";
import { useState } from "react";
import { NewTransactionModal } from "./components/NewTransacionModal";

Modal.setAppElement("#root");

export function App() {
  const [isNewTransactionModalOpen, setIsNewTrasactionOpen] = useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTrasactionOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTrasactionOpen(false);
  }

  return (
    <>
      <Header onOpenNewTransationModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <GlobalStyle />
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
    </>
  );
}
