import React from 'react';
import randomstring from 'randomstring';

export default function App() {
  return <div>{randomstring.generate()}</div>;
}
