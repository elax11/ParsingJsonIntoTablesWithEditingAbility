import React from 'react';

function App({ table }) {
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
            <td>{item.Amount}</td>
            <td>{item.Process}</td>
            <td>{item.Wetness}</td>
            <td>{item.Garbage}</td>
            <td>{item.Infection}</td>
          </tr>
        )}
      </tbody>
    </table>
  );
}

export default App;
