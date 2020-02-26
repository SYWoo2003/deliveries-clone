import React, { Component } from 'react';
import { createGlobalStyle } from "styled-components";
// import styled from 'styled-components';

import TitleComponent from './components/TitleComponent';
import Addbtn from './components/Addbtn';
import Modal from './components/Modal/Modal';



const GlobalStyles = createGlobalStyle`
    @import url(//fonts.googleapis.com/earlyaccess/notosanskr.css);
    body{
      font-family: 'Noto Sans KR', sans-serif;
      margin:0;
      padding:0;
      font-size:30px;
      background-color:#FFCC00;
  }
  `;



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
    }
  }



  openModal = () => {
    this.setState({ isModalOpen: true });
  }

  closeModal = () => {
    this.setState({ isModalOpen: false });
  }




  render() {
    return (
      <div className="App" >
        <GlobalStyles />
        <TitleComponent />

        <Addbtn onClick={this.openModal} />
        <Modal isOpen={this.state.isModalOpen} close={this.closeModal} />
      </div >
    );
  }
}
export default App;


