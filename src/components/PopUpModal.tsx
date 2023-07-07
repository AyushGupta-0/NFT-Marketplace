import { FC } from "react";

interface PopUpModalProps {
  onClose: () => void;
}

const PopUpModal: FC<PopUpModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-40 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg max-w-3xl w-full">
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default PopUpModal;
