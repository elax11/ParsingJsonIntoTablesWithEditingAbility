import React from 'react';

function App({ table, updateTable }) {
  function handleChangeAmount(event, handledItem) {
    const updatedData = table.map(item => {
      if (item.Id === handledItem.Id) {
        return { ...item, Amount: Number(event.target.value), Previous: `Amount=${item.Amount || "None"}` };
      }
      return item;
    });
    updateTable(updatedData);
  }
  function handleChangeWetness(event, handledItem) {
    const updatedData = table.map(item => {
      if (item.Id === handledItem.Id) {
        return { ...item, Wetness: Number(event.target.value), Previous: `Wetness=${item.Wetness || "None"}` };
      }
      return item;
    });
    updateTable(updatedData);
  }
  function handleChangeGarbage(event, handledItem) {
    const updatedData = table.map(item => {
      if (item.Id === handledItem.Id) {
        return { ...item, Garbage: Number(event.target.value), Previous: `Garbage=${item.Garbage || "None"}` };
      }
      return item;
    });
    updateTable(updatedData);
  }
  function handleChangeInfection(event, handledItem) {
    const updatedData = table.map(item => {
      if (item.Id === handledItem.Id) {
        return { ...item, Infection: event.target.value, Previous: `Infection=${item.Infection || "None"}` };
      }
      return item;
    });
    updateTable(updatedData);
  }
  function handleOnClick(handledItem) {
    const index = table.findIndex(item => item.Id === handledItem.Id);
    const updatedData = [...table];
    updatedData.splice(index, 1);
    updateTable(updatedData);
  }
  return (
    <table>
      <thead>
        <tr>
          <th>Номер запису</th>
          <th>Дата обліку</th>
          <th>Підрозділ Код</th>
          <th>Рік врожаю</th>
          <th>Контрагент</th>
          <th>Найманування</th>
          <th>Унікальний номер договору</th>
          <th>ТМЦ Код</th>
          <th>Ціна</th>
          <th>Кількість нетто</th>
          <th>Напрямок</th>
          <th>вологість</th>
          <th>сміття</th>
          <th>зараженість</th>
        </tr>
      </thead>
      <tbody>
        {table.map((item) =>
          <tr key={item.Id}>
            <td>{item.Id}</td>
            <td>{item.RecordDate}</td>
            <td>{item.BranchId}</td>
            <td>{item.CropYear}</td>
            <td>{item.CounterpartyId}</td>
            <td>{item.CounterpartyName}</td>
            <td>{item.ContactId}</td>
            <td>{item.Product}</td>
            <td>{item.Price}</td>
            <td><input type="string" placeholder={item.Amount} onBlur={(event) => handleChangeAmount(event, item)}></input></td>
            <td>{item.Process}</td>
            <td><input type="string" placeholder={item.Wetness} onBlur={(event) => handleChangeWetness(event, item)}></input></td>
            <td><input type="string" placeholder={item.Garbage} onBlur={(event) => handleChangeGarbage(event, item)}></input></td>
            <td><input type="string" placeholder={item.Infection} onBlur={(event) => handleChangeInfection(event, item)}></input></td>
            <td><button type="button" onClick={() => handleOnClick(item)}>Delete</button></td>
          </tr>
        )}
      </tbody>
    </table>
  );
}
export default App;
