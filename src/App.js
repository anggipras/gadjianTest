import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header'
import SideMenu from './components/Sidemenu'
import DataCard from './pages/PersonnelCard'
import {connect} from 'react-redux'
import {getAllData, noReload} from './redux/actions'

function App(props) {
  useEffect(()=> {
    let theusers = JSON.parse(localStorage.getItem('userdata'))
    if(theusers) {
      props.noReload(theusers)
    } else {
      props.getAllData()
    }
  },[])

  return (
    <div className="thebody">
      <Header />
      <SideMenu />
      <DataCard />
    </div>
  );
}

export default connect(null,{getAllData, noReload}) (App);
