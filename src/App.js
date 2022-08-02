import "./App.css";
import "./styles.scss";
import Counter from "./views/sample/counter";
import FetchSample from "./views/sample/fetch-sample";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./views/header/header";
import Footer from "./views/footer/footer";
import Slideshow from "./views/carousel/carousel";
import Validation from "./views/validation/validation";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className='App'>
      <Header/>
      <Router>
      <Route exact path='/' component={Counter}></Route>
        <Route exact path='/counter' component={Counter}></Route>
        <Route exact path='/fetch' component={FetchSample}></Route>
        <Route exact path='/carousel' component={Slideshow}></Route>
        <Route exact path='/validation' component={Validation}></Route>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
