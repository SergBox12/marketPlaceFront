import './App.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import MainPage from './components/main-page/MainPage';
import Reg from './components/auth/reg/Reg';
import Login from './components/auth/login/Login';
import ErrorPage from './components/error404/ErrorPage';
import UserPage from './components/user-page/UserPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route path="/reg" component={Reg} />
            <Route path="/login" component={Login} />
            <Route path="/user" component={UserPage} />
            <Route path="/*" component={ErrorPage} />
          </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
