import React, { useState } from 'react';

const DropdownProblemas = () => {
  const options = [
    { id: 1, label: 'Option 1' },
    { id: 2, label: 'Option 2' },
    { id: 3, label: 'Option 3' },
    // Agrega más opciones según sea necesario
  ];

  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleCheckboxChange = (id) => {
    if (selectedOptions.includes(id)) {
      // Si ya está seleccionado, quitarlo
      setSelectedOptions(selectedOptions.filter((optionId) => optionId !== id));
    } else {
      // Si no está seleccionado, agregarlo
      setSelectedOptions([...selectedOptions, id]);
    }
  };

  return (
    <div>
      <label>Select Options:</label>
      <select multiple={true} value={selectedOptions} onChange={() => {}}>
        {options.map((option) => (
          <option key={option.id} value={option.id}>
            {option.label}
          </option>
        ))}
      </select>
      <div>
        Selected Options:
        {selectedOptions.map((id) => (
          <div key={id}>
            <input
              type="checkbox"
              value={id}
              checked={selectedOptions.includes(id)}
              onChange={() => handleCheckboxChange(id)}
            />
            {options.find((option) => option.id === id).label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DropdownProblemas;
