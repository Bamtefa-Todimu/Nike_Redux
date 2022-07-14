import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore'

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import ShoeDesc from './components/ShoeDesc';
import Auth from './components/Auth';
import './App.css';

  const store = configureStore();

 
function App() {

  return (
    <Provider store= {store}>

    <div className="App">
       <Header/>
       <Router>
        <Routes>
          <Route exact path= "/" element={<Main/>}/>
          <Route exact path= "/t/:id" element={<ShoeDesc/>}/>
          <Route exact path= "/member/profile/login" element={<Auth/>}/>
        </Routes>
       </Router>
       {/* <Main/> */}
       <Footer/>
    </div>
    </Provider>
  );
}

export default App;
