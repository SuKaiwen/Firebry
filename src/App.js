import React, {useState} from 'react';

import Nav from './Components/Nav';
import Home from './Pages/Home';
import Grid from './Components/Grid';
import Modal from './Components/Modal';

import './Global.css';

function App() {

  const [modalImage, setModalImage] = useState(null);
  const [modalTitle, setModalTitle] = useState(null);

  return (
    <div>
      <Nav />
      <Home/>
      <Grid 
        	setModalImage = {setModalImage} 
          setModalTitle = {setModalTitle}
      />
      {modalImage &&
        <Modal 
          modalImage = {modalImage} 
          setModalImage = {setModalImage}
          modalTitle = {modalTitle}
          setModalTitle = {setModalTitle}
        />
      }
    </div>
  );
}

export default App;
