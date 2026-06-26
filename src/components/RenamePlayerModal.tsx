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
      <div className="space-y-5">

        <input
          autoFocus
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Player name"
          className="w-full rounded-md border border-neutral-700 bg-neutral-800 px-3 py-2 outline-none focus:border-amber-400"
        />

        <div className="flex justify-end gap-3">

          <Button onClick={onClose}>
            Cancel
          </Button>

          <Button
            className="border-amber-500 bg-amber-600 hover:bg-amber-500"
            onClick={handleSave}
          >
            Save
          </Button>

        </div>

      </div>
    </Modal>
  );
}