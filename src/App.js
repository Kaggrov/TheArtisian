import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import Login from './Login';
import { auth } from './firebase';
import { useEffect } from 'react';
import { useStateValue } from './StateProvider';
import Payment from './Payment';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Orders from './Orders';

const promise = loadStripe("Public Key");

function App() {

  const [{},dispatch] = useStateValue();
  // console.log(promise)
  useEffect(()=> {
    auth.onAuthStateChanged(authUser => {
      console.log('The User is >>>',authUser);

      if(authUser){ //the user logged in / was logged in

          dispatch({
            type:'SET_USER',
            user:authUser
          })
      }
      else{ //The user is logged out
        dispatch({
          type:'SET_USER',
          user:null
        })

      }

    })
  },[])
  return (
    <Router>
      
      <div className="App">
        
        <Routes>
        <Route path="/orders" element={<><Header /><Orders /></>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/checkout" element={<><Header /><Checkout/></>}/>
          
          <Route path="/payment" element ={ <><Elements stripe={promise} element={[<Payment />]}><Header /><Payment /></Elements></>}/>
          
          <Route path="/" element={<><Header /><Home /></>}/>
          
        </Routes>
      </div>
      
    </Router>
  );
}

export default App;
