import React from "react";

const OverallStatSearchForm = ({ documentData }) => {
  return (
    <form>
      {Object.entries(documentData).map(([key, value]) => {
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
                    readOnly
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
                    readOnly
                  />
                </label>
              ))}
            </fieldset>
          );
        } else {
          return (
            <label key={key}>
              {key}:
              <input type="text" name={key} value={value} readOnly />
            </label>
          );
        }
      })}
    </form>
  );
};

export default OverallStatSearchForm;
