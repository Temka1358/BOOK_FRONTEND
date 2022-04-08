import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import AddModal from './components/AddModal';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [addModalVisible, setAddModalVisible] = useState(false)
  
function handleAddSubmit(event){
  event.preventDefault();
  if (event.keyCode === 13){
    console.log(event.target.value)
  }
}

  return (
    <div className="App">
      <p>Hello world</p>
      <Button onClick={()=> setAddModalVisible(true)}>Add book</Button>
      <AddModal visible={addModalVisible} onCreate={handleAddSubmit} onCancel={()=> setAddModalVisible(false)}/>
    </div>
  );
}

export default App;
