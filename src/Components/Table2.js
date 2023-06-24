import Grain from './data/grain.json'
import React from 'react';
import { useEffect, useState } from 'react';

function App(date) {
  console.log(date);
  return (
    <div>
        {date === null || date === undefined ? <p>1</p> : <p>2</p>}
    </div>
  );
}

export default App;
