import React from "react";

const OverallStatEditForm = ({ documentData, onConfirm }) => {
  const [updatedData, setUpdatedData] = React.useState(documentData);

  const handleInputChange = (keyPath, value) => {
    const keys = keyPath.split(".");
    const updatedNestedData = { ...updatedData };
    let currentLevel = updatedNestedData;

    keys.slice(0, -1).forEach((key, index) => {
      if (Array.isArray(currentLevel[key])) {
        currentLevel = currentLevel[key];
      } else {
        currentLevel = currentLevel[key];
      }
    });

    if (Array.isArray(currentLevel)) {
      const index = Number(keys[keys.length - 2]);
      const itemKey = keys[keys.length - 1];
      currentLevel[index][itemKey] = value;
    } else {
      currentLevel[keys[keys.length - 1]] = value;
    }

    setUpdatedData(updatedNestedData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onConfirm(updatedData);
  };

  return (
    <form onSubmit={handleSubmit}>
      {Object.entries(updatedData).map(([key, value]) => {
        if (key === "_id") {
          return null;
        } else if (Array.isArray(value)) {
          return value.map((item, index) => (
            <fieldset key={`${key}-${index}`}>
              <legend>{`${key}[${index}]`}</legend>
              {Object.entries(item).map(([itemKey, itemValue]) => (
                <label key={`${key}-${index}-${itemKey}`}>
                  {itemKey}:
                  <input
                    type="text"
                    name={`${key}[${index}][${itemKey}]`}
                    value={itemValue}
                    onChange={(e) =>
                      handleInputChange(
                        `${key}.${index}.${itemKey}`,
                        e.target.value
                      )
                    }
                  />
                </label>
              ))}
            </fieldset>
          ));
        } else if (typeof value === "object" && value !== null) {
          return (
            <fieldset key={key}>
              <legend>{key}</legend>
              {Object.entries(value).map(([objectKey, objectValue]) => (
                <label key={`${key}-${objectKey}`}>
                  {objectKey}:
                  <input
                    type="text"
                    name={`${key}.${objectKey}`}
                    value={objectValue}
                    onChange={(e) =>
                      handleInputChange(`${key}.${objectKey}`, e.target.value)
                    }
                  />
                </label>
              ))}
            </fieldset>
          );
        } else {
          return (
            <label key={key}>
              {key}:
              <input
                type="text"
                name={key}
                value={value}
                onChange={(e) => handleInputChange(key, e.target.value)}
              />
            </label>
          );
        }
      })}
      <button type="submit">Confirm</button>
    </form>
  );
};

export default OverallStatEditForm;
