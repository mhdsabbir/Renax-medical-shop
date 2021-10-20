import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Pages/Shared/Header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './Pages/Shared/Footer/Footer';
import Home from './Pages/Home/Home/Home';
import Category from './Pages/Home/Category/Category';
import Login from './Pages/Login/Login/Login';
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import Product from './Pages/Home/Product/Product';
import Contact from './Pages/Contact/Contact';
import Services from './Pages/Home/Services/Services';
import NotFound from './Pages/NotFound/NotFound';
import SignUp from './Pages/Login/SignUp/SignUp';
function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="category">
              <Category></Category>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <PrivateRoute path="/product/:pdId">
              <Product></Product>
            </PrivateRoute>
            <PrivateRoute path="/services">
              <Services></Services>
            </PrivateRoute>
            <Route path="/signup">
              <SignUp></SignUp>
            </Route>
            

            <Route path="*">
              <NotFound></NotFound>
            </Route>
            

          
          </Switch>
          <Footer></Footer>
        </Router>
        </AuthProvider>
    </div>
  );
}

export default App;
