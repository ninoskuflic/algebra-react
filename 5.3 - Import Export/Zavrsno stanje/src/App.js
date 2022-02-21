import React from 'react';

import Person from './Person.js';
import { sum } from './util.js';
import { num1, num2 } from './util.js';

import Prs from './Person.js';
import { sum as zbroj } from './util.js';
import * as ALL from './util.js';

export default function App() {
  return (
    <div>
      <p>{Person.name}</p>
      <p>{sum(5, 3)}</p>
      <p>{sum(num1, num2)}</p>

      <h2>{Prs.name}</h2>
      <h2>{zbroj(6, 5)}</h2>
      <h2>{ALL.sum(ALL.num1, ALL.num2)}</h2>
    </div>
  );
}
