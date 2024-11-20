"use client"
// Table.js

// Table.js

import React, { useState } from 'react';

const Table = () => {
  const [stickyColumns, setStickyColumns] = useState([]);

  const handleColumnClick = (columnIndex) => {
    if (stickyColumns.includes(columnIndex)) {
      // Remove column if already selected
      setStickyColumns(stickyColumns.filter(col => col !== columnIndex));
    } else {
      // Add column if not selected
      setStickyColumns([...stickyColumns, columnIndex]);
    }
  };

  // Calculate the left position for each sticky column
  const getStickyColumnLeft = (index) => {
    let left = 0;
    for (let i = 0; i < index; i++) {
      if (stickyColumns.includes(i)) {
        left += document.querySelector(`th:nth-of-type(${i + 1})`).offsetWidth;
      }
    }
    return left;
  };

  return (
    <div className="table-wrapper">
      <table className="scrollable-table">
        <thead>
          <tr>
            {[...Array(20)].map((_, index) => (
              <th
                key={index}
                className={stickyColumns.includes(index) ? 'sticky' : ''}
                onClick={() => handleColumnClick(index)}
                style={{ '--sticky-column-left': `${getStickyColumnLeft(index)}px` }}
              >
                Column {index + 1}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {[...Array(100)].map((_, rowIndex) => (
            <tr key={rowIndex}>
              {[...Array(20)].map((_, colIndex) => (
                <td 
                  key={colIndex} 
                  className={stickyColumns.includes(colIndex) ? 'sticky' : ''}
                  style={{ '--sticky-column-left': `${getStickyColumnLeft(colIndex)}px` }}
                >
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

export default Table;
