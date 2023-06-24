import Grain from './data/grain.json'
import Table2 from './Table2'
import React from 'react';
import { useEffect, useState } from 'react';

function App() {
  const [GrainData, setGrainData] = useState([]);
  useEffect(() => {
    setGrainData(Grain);
  }, []);
  const [date, setDate] = useState(null);
  const handleChange = (e) => {
    setDate(e.target.value);
  };
  return (
    <div>
        <h2>Table1</h2>
        <table>
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
                {GrainData.map((item) =>
                    <tr>
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
        </table>
        <input
            type="date"
            onChange={handleChange}
        />
        <p>Selected Date: {date}</p>
        <Table2 date={date}/>
    </div>
  );
}

export default App;
