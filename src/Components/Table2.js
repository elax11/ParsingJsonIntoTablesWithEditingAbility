import Table3 from './Table3'
import ShowTable2 from './ShowTable2'
import React from 'react';
import { useEffect, useState } from 'react';

function Table2({ date, data }) {

  const filteredData = data.filter(item => item.RecordDate === date);
  const groupedData = filteredData.reduce((result, item) => {
    const key = `${item.RecordDate}-${item.CropYear}-${item.CounterpartyId}-${item.CounterpartyName}-${item.ContactId}-${item.Product}-${item.Process}-${item.Wetness}-${item.Garbage}-${item.Infection}`;
    if (!result[key]) {
      result[key] = { ...item };
    } else {
      result[key].Amount += item.Amount;
    }
    return result;
  }
    , {});

  const mergedRows = [];

  Object.keys(groupedData).forEach(key => {
    mergedRows.push(groupedData[key]);
  });

  data.forEach(item => {
    if (item.RecordDate !== date) {
      mergedRows.push(item);
    }
  });
  mergedRows.sort((a, b) => a.Id - b.Id);
  return (
    <div>
      <ShowTable2 table={mergedRows} />
      <Table3 date={date} data={Object.values(groupedData)} />
    </div>
  );
}

export default Table2;
