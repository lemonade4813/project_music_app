import {BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import CopyrightList from './components/CopyrightList';
import CompanyInfo from './components/CompanyInfo';
import Chart from './components/Chart';
import Prototypes from './components/Prototypes';
import Genre from './components/Genre';
import Modal from './components/Modal'


export default function Header() {
  /*const [modalOpen, setModalOpen] = useState(false);
  
  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };
  */

  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  const modalClose = () => {
    setModalOpen(!modalOpen)

}
  return (
      <Router>
      <header>
        <h1 className ="homepage">MUSIC FOR YOU</h1>
        <ul className ="loginReg">
          <li onClick={openModal}>로그인</li>
          { modalOpen && <Modal modalClose={modalClose}></Modal>}
          <li>회원가입</li>
        </ul>
        <nav>   
            <ul className="gnb">
              <li><Link to ="/chart">차트</Link></li>
              <li><Link to ="/newAlbum">최신앨범</Link></li>
              <li><Link to ="/genre">장르</Link></li>
              <li><Link to ="/myMusic">내 음악</Link></li>
              <li><Link to="/copyrightList">음악 저작물 정보</Link></li>
              <li><Link to="/companyInfo">회사소개</Link></li>
            </ul>
        </nav>
              <Routes>
                  <Route path ="/chart" element= {<Chart/>}></Route>
                  <Route path ="/newAlbum" element= {<Prototypes/>}></Route>
                  <Route path ="/genre" element={<Genre/>}></Route>
                  <Route path ="/myMusic"></Route>
                  <Route path ="/copyrightList" element= {<CopyrightList/>}> </Route>
                  <Route path ="/companyInfo"  element= {<CompanyInfo/>}></Route>
                  
              </Routes>
        </header>
      </Router>
    );
  }