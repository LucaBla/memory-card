import React, {useState} from 'react';
import './App.css';
import CardContainer from './components/CardContainer';
import HelpButton from './components/HelpButton';
import Modal from './components/Modal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);


  return (
    <div className="App">
      {isModalOpen &&
      <Modal setIsModalOpen={setIsModalOpen}></Modal>
      }
      <div className='test-wrapper'>
        <CardContainer ></CardContainer>
      </div>
      <HelpButton setIsModalOpen={setIsModalOpen}></HelpButton>
    </div>
  );
}

export default App;
