import React, { useState } from 'react';

const Dropdown_interns = ({ options, newChannel, setNewChannel, channel_members }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleCheckboxChange = (id) => {
    const isSelected = newChannel.channel_members_interns.includes(id);
    if (!isSelected) {
      setNewChannel({
        ...newChannel,
        channel_members_interns: [...newChannel.channel_members_interns, id],
      });
    } else {
      setNewChannel({
        ...newChannel,
        channel_members_interns: newChannel.channel_members_interns.filter((memberId) => memberId !== id),
      });
    }
  };

  return (
    <div className="relative inline-block text-left w-full">
      <div>
        <span className="rounded-md shadow-sm">
          <button
            type="button"
            onClick={handleToggleDropdown}
            className="inline-flex justify-center w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
            id="options-interns-menu"
            aria-expanded={isOpen ? "true" : "false"}
            aria-haspopup="true"
          >
            {channel_members}
          </button>
        </span>
      </div>

      {isOpen && (
        <div
          className="origin-top-right absolute right-0 mt-2 z-50 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-interns-menu"
        >
          <div className="py-1" role="none">
            {options?.map((option) => (
              <label
                key={option.id}
                className="flex items-center justify-between px-4 py-2 text-sm"
              >
                <span>{option.name}</span>
                <input
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  checked={newChannel.channel_members_interns.includes(option.id)}
                  onChange={() => handleCheckboxChange(option.id)}
                />
              </label>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown_interns;
