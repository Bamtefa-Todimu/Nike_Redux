import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import sp from './store/configureStore'
import { PersistGate } from 'redux-persist/integration/react'

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import ShoeDesc from './components/ShoeDesc';
import Auth from './components/Auth';
import './App.css';

 
const {store,persistor} = sp()
 
function App() {

  return (
    <Provider store= {store}>
      <PersistGate loading={null} persistor={persistor}>
    <div className="App">
       <Router>
       <Header/>
        <Routes>
          <Route exact path= "/" element={<Main/>}/>
          <Route exact path= "/t/:id" element={<ShoeDesc/>}/>
          <Route exact path= "/member/profile/login" element={<Auth/>}/>
        </Routes>
       {/* <Main/> */}
       <Footer/>
       </Router>
    </div>
    </PersistGate>
    </Provider>
  );
}

export default App;
