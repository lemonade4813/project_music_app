import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import CopyrightList from './components/CopyrightList';
import CompanyInfo from './components/CompanyInfo';
import Chart from './components/Chart';
import Prototypes from './components/Prototypes';
export default function Header() {
    return (
      <Router>
      <header>
        <h1 className ="homepage">MUSIC FOR YOU</h1>
        <nav>   
            <ul className="gnb">
              <li><Link to ="/chart">차트</Link></li>
              <li><Link to ="/newAlbum">최신앨범</Link></li>
              <li><Link to ="/genre">장르</Link></li>
              <li><Link to ="/monthMusic">이달의 노래</Link></li>
              <li><Link to ="/myMusic">내 음악</Link></li>
              <li><Link to="/copyrightList">음악 저작물 목록</Link></li>
              <li><Link to="/companyInfo">회사소개</Link></li>
            </ul>
        </nav>
              <Routes>
                  <Route path ="/chart" element= {<Chart/>}></Route>
                  <Route path ="/newAlbum" element= {<Prototypes/>}></Route>
                  <Route path ="/genre"></Route>
                  <Route path ="/monthMusic"></Route>
                  <Route path ="/myMusic"></Route>
                  <Route path ="/copyrightList" element= {<CopyrightList/>}> </Route>
                  <Route path ="/companyInfo"  element= {<CompanyInfo/>}></Route>
              </Routes>
        </header>
      </Router>
    );
  }