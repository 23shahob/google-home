import React, { useState } from "react";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";

const AddingShortcut = () => {
  const [add, setAdd] = useState(false);
  const [shortcuts, setShortcuts] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [inputLabel, setInputLabel] = useState("");

  const addShortcut = () => {
    if (inputValue && inputLabel) {
      setShortcuts([...shortcuts, { label: inputLabel, url: inputValue }]);
      setInputValue("");
      setInputLabel("");
    }
    setAdd(false);
  };

  const removeShortcut = (index) => {
    const newShortcuts = shortcuts.filter((_, i) => i !== index);
    setShortcuts(newShortcuts);
  };

  return (
    <div className="relative flex flex-col">
      <div className="flex">
        {shortcuts.map((shortcut, index) => (
          <a
            key={index}
            href={shortcut.url}
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex h-[120px] w-[120px] cursor-pointer flex-col items-center justify-center rounded-lg hover:bg-neutral-600"
          >
            <div className="mb-4 flex h-14 w-14  items-center justify-center rounded-full bg-white">
              {/* <AddOutlinedIcon /> */}
            </div>
            <p className="text-sm font-semibold text-white">{shortcut.label}</p>
            <button
              onClick={() => removeShortcut(index)}
              className="absolute right-2 top-1 text-xl text-white"
            >
              ⁝
            </button>
          </a>
        ))}
        <div
          onClick={() => {
            setAdd(true);
          }}
          className="flex h-[120px] w-[120px] cursor-pointer flex-col items-center justify-center rounded-lg hover:bg-neutral-600"
        >
          <div className="mb-4 flex h-14 w-14  items-center justify-center rounded-full bg-white">
            <AddOutlinedIcon />
          </div>
          <p className="text-sm font-semibold text-white">Add shortcut</p>
        </div>
      </div>
      {add && (
        <div className="absolute">
          <div className="absolute h-[250px] w-[450px] translate-x-[-36%] translate-y-[-50%] rounded-lg bg-neutral-800 p-4">
            <p className="mb-3 font-medium text-white">Add shortcut</p>
            <div>
              <form className="mb-3 flex flex-col">
                <label className="mb-2 text-sm text-white" htmlFor="name">
                  Name
                </label>
                <input
                  onChange={(e) => setInputLabel(e.target.value)}
                  className="h-8 rounded-t-lg border-b bg-neutral-700 px-3 text-white outline-none visited:border-b-blue-400 hover:bg-neutral-600"
                  type="url"
                  value={inputLabel}
                />
              </form>
              <form className="mb-3 flex flex-col">
                <label className="mb-2 text-sm text-white" htmlFor="name">
                  URL
                </label>
                <input
                  onChange={(e) => setInputValue(e.target.value)}
                  value={inputValue}
                  className="h-8 rounded-t-lg border-b bg-neutral-700 px-3 text-white outline-none hover:bg-neutral-600"
                  type="text"
                />
              </form>
            </div>
            <div className="absolute bottom-4 right-4 flex gap-2">
              <button
                onClick={() => {
                  setAdd(false);
                }}
                className="rounded-3xl border border-blue-400 px-3 py-1 text-[12px] text-blue-300 hover:bg-neutral-700"
              >
                Cancel
              </button>
              <button
                onClick={addShortcut}
                className="rounded-3xl bg-neutral-700 px-3 py-1 text-[12px] text-white opacity-80"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddingShortcut;
