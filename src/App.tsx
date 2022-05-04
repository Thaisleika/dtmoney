import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import Modal from "react-modal";
import { useState } from "react";
import { NewTransactionModal } from "./components/NewTransacionModal";
import { TransactionsContext } from "./TransactionsContext";

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
    <TransactionsContext.Provider value={[]}>
      <Header onOpenNewTransationModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <GlobalStyle />
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
    </TransactionsContext.Provider>
  );
}
