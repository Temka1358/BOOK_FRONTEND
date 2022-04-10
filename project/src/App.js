
import './App.css';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import {FormModal} from './components/FormModal';
import  BookTable  from './components/BookTable'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div className="App">
      <BookTable />
    </div>
  );
}

export default App;
