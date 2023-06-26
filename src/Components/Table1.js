import Grain from './data/grain.json'
import Table2 from './Table2'
import ShowTable1 from './ShowTable1'
import React from 'react';
import { useEffect, useState } from 'react';

function Table1() {
  const [GrainData, setGrainData] = useState([]);
  useEffect(() => {
    setGrainData(Grain);
  }, []);

  function updateGrainData(updatedData) {
    setGrainData(updatedData);
  }

  const [date, setDate] = useState(null);
  const handleChangeData = (e) => {
    const dateParts = e.target.value.split('-');
    const formattedDate = `${dateParts[1]}-${dateParts[2]}-${dateParts[0]}`;
    setDate(formattedDate);
  };

  return (
    <div>
      <h2>Table1</h2>
      <ShowTable1 table={GrainData} updateTable={updateGrainData} />
      <input
        type="date"
        onChange={handleChangeData}
      />
      <p>Selected Date: {date}</p>
      <Table2 date={date} data={GrainData} />
    </div>
  );
}

export default Table1;
