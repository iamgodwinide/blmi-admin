import React, { useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Messages from './pages/Messages';
import NewMessage from './pages/NewMessage';
import Series from './pages/Series';
import NewSeries from './pages/NewSeries';
import { useDispatch } from "react-redux";
import init from './config/init';

import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';
import Devotionals from './pages/Devotionals';
import NewDeovtional from './pages/NewDevotional';
import EditMessage from './pages/EditMessage';

function App() {

  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change


  const updateState = () => {
    init(dispatch);
    setInterval(() => {
      init(dispatch)
    }, 10000)
  }

  useEffect(() => {
    updateState();
  }, [])

  return (
    <Routes>
      <Route exact path="/" element={<Dashboard />} />
      <Route exact path="/messages" element={<Messages />} />
      <Route exact path="/series" element={<Series />} />
      <Route exact path="/messages/new-message" element={<NewMessage />} />
      <Route exact path="/series/new-series" element={<NewSeries />} />
      <Route exact path="/devotionals" element={<Devotionals />} />
      <Route exact path="/devotionals/new-devotional" element={<NewDeovtional />} />
      <Route exact path="/messages/edit/:msgid" element={<EditMessage />} />
    </Routes>
  );
}

export default App;
