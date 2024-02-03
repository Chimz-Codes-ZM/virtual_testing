import React, { useState } from 'react';

const Dropdown = ({ options, newChannel, setNewChannel, channel_members }) => {
  const [isOpenTalents, setIsOpenTalents] = useState(false);

  const handleToggleDropdown = () => {
    setIsOpenTalents(!isOpenTalents);
  };

  const handleCheckboxChange = (id) => {
    const isSelected = newChannel.channel_members_talents.includes(id);
    if (!isSelected) {
      setNewChannel({
        ...newChannel,
        channel_members_talents: [...newChannel.channel_members_talents, id],
      });
    } else {
      setNewChannel({
        ...newChannel,
        channel_members_talents: newChannel.channel_members_talents.filter((memberId) => memberId !== id),
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
            id="options-menu"
            aria-expanded={isOpenTalents ? "true" : "false"}
            aria-haspopup="true"
          >
            {channel_members}
          </button>
        </span>
      </div>

      {isOpenTalents && (
        <div
          className="origin-top-right absolute right-0 mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
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
                  checked={newChannel.channel_members_talents.includes(option.id)}
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

export default Dropdown;
