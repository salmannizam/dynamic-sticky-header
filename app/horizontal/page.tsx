"use client";

import React, { useState } from 'react';

const VerticalStickyTable = () => {
  const [stickyRows, setStickyRows] = useState([]);

  const handleRowClick = (rowIndex) => {
    if (stickyRows.includes(rowIndex)) {
      setStickyRows(stickyRows.filter(row => row !== rowIndex));
    } else {
      setStickyRows([...stickyRows, rowIndex]);
    }
  };

  const getStickyRowTop = (index) => {
    let top = 0;
    for (let i = 0; i < index; i++) {
      if (stickyRows.includes(i)) {
        top += document.querySelector(`tr:nth-of-type(${i + 2})`).offsetHeight; // +2 because of the header row
      }
    }
    return top;
  };

  return (
    <div className="table-wrapper-vertical">
      <table className="scrollable-table-vertical">
        <thead>
          <tr>
            {[...Array(5)].map((_, index) => (
              <th key={index}>Column {index + 1}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {[...Array(20)].map((_, rowIndex) => (
            <tr
              key={rowIndex}
              className={stickyRows.includes(rowIndex) ? 'sticky-row' : ''}
              onClick={() => handleRowClick(rowIndex)}
              style={{ '--sticky-row-top': `${getStickyRowTop(rowIndex)}px` }}
            >
              {[...Array(5)].map((_, colIndex) => (
                <td key={colIndex}>
                  Data {rowIndex + 1}-{colIndex + 1}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VerticalStickyTable;
