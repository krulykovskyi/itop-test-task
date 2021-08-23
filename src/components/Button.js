import React from 'react';

export function Button ({ btnName, onClick, onDblClick}) {
  return (
    <button
      className="button"
      onClick={onClick}
      onDblClick={onDblClick}
    >
      {btnName}
    </button>
  );
}
