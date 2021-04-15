import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { createContext, useState } from 'react';
import NoMatch from './components/NoMatch/NoMatch/NoMatch';
import Login from './components/Login/Login/Login';
import Home from './components/Home/Home/Home';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import Apply from './components/Dashboard/Apply/Apply';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import AddPrograms from './components/Dashboard/AddPrograms/AddPrograms';
import OrderList from './components/Dashboard/OrderList/OrderList';
import AddReview from './components/Dashboard/AddReview/AddReview';
import AppliedProgram from './components/Dashboard/AppliedProgram/AppliedProgram';
import MakeTeacher from './components/Dashboard/MakeTeacher/MakeTeacher';
import OurAllProgram from './components/Dashboard/OurAllProgram/OurAllProgram';
 


export const userContext = createContext();

function App() {

  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <userContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <PrivateRoute path="/dashboard">
              <Dashboard />
            </PrivateRoute>
            <PrivateRoute path="/addProgram">
              <AddPrograms />
            </PrivateRoute>
            <PrivateRoute path="/ourAllProgram">
              <OurAllProgram />
            </PrivateRoute>
            <PrivateRoute path="/makeTeacher">
              <MakeTeacher />
            </PrivateRoute>
            <PrivateRoute path="/orderList">
              <OrderList />
            </PrivateRoute>
            <PrivateRoute exact path="/appliedProgram">
              <AppliedProgram />
            </PrivateRoute>
            <PrivateRoute path="/review">
              <AddReview />
            </PrivateRoute>
            <PrivateRoute path="/apply/:id">
              <Apply />
            </PrivateRoute>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="*">
              <NoMatch />
            </Route>
          </Switch>
        </Router>
    </userContext.Provider>
  );
}

export default App;
