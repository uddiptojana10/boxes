import { useEffect, useState } from "react";
import Modal from "./Modal";
import Button from "./Button";

type Props = {
  open: boolean;
  initialName: string;
  onSave: (name: string) => void;
  onClose: () => void;
};

export default function RenamePlayerModal({
  open,
  initialName,
  onSave,
  onClose,
}: Props) {
  const [name, setName] = useState(initialName);

  useEffect(() => {
    setName(initialName);
  }, [initialName, open]);

  function handleSave() {
    onSave(name.trim());
  }

  return (
    <Modal
      open={open}
      title={initialName ? "Rename Player" : "Add Player"}
      onClose={onClose}
    >
      <div className="modal-form">

        <input
          autoFocus
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Player name"
          className="modal-input"
        />

        <div className="modal-actions">

          <Button onClick={onClose}>
            Cancel
          </Button>

          <Button
            className="btn-primary"
            onClick={handleSave}
          >
            Save
          </Button>

        </div>

      </div>
    </Modal>
  );
}
