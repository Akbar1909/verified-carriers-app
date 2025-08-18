import Modal from "@/components/Modal";
import React from "react";

interface CalculatingModalProps {
  onClose: () => void;
  isOpen:boolean;
}

const CalculatingModal = ({ onClose, isOpen }: CalculatingModalProps) => {
  return (
    <Modal isOpen={isOpen} size='sm'  showCloseButton={false} onClose={onClose}>
      <div className="flex items-center flex-col">
        <h3 className="text-d-md-semibold">Calculating</h3>

        <img
          
          src="gifs/calculating.gif"
          alt="Calculating"
        />
      </div>
    </Modal>
  );
};

export default CalculatingModal;
