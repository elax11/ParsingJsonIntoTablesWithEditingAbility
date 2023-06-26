import React from 'react';
import ShowTable3 from './ShowTable3'
import { useEffect, useState } from 'react';

function Table3({ date, data }) {
  const groupedData = data.reduce((result, item) => {
    const key = `${item.RecordDate}-${item.CounterpartyId}-${item.CounterpartyName}-${item.ContactId}-${item.Product}-${item.Process}`;

    if (!result[key]) {
      result[key] = { ...item };
    } else {
      result[key].Amount += item.Amount;
      result[key].Wetness += item.Wetness;
      result[key].Garbage += item.Garbage;
      result[key].Count = (result[key].Count || 1) + 1;
    }
    return result;
  }, {});

  const groupedDataAvarage = Object.values(groupedData).map(item => {
    const key = `${item.RecordDate}-${item.CounterpartyId}-${item.CounterpartyName}-${item.ContactId}-${item.Product}-${item.Process}`;
    if (groupedData[key] && groupedData[key].Count >= 1) {
      return { ...item, Wetness: groupedData[key].Wetness / groupedData[key].Count, Garbage: groupedData[key].Garbage / groupedData[key].Count };
    }
    return { ...item };
  });

  return (
    <div>
      <p>Середньозважені показники</p>
      <ShowTable3 table={Object.values(groupedDataAvarage)} />
    </div>
  );
}

export default Table3;
