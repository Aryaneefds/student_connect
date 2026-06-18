import React, { createContext, useState } from 'react';

export const CollegeContext = createContext();

export const CollegeProvider = ({ children }) => {
  const [selectedCollege, setSelectedCollege] = useState(null);

  return (
    <CollegeContext.Provider value={{ selectedCollege, setSelectedCollege }}>
      {children}
    </CollegeContext.Provider>
  );
};
