import Writ from "./com/Writ";
import Cbox from "./com/Cbox";
import Mcbox from "./com/Mcbox";
import "./scss/App.scss";
import {BrowserRouter, Route, Switch} from 'react-router-dom';

function App() {
  return (
      <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/">
          <h2>모바일(width:768px 이하)로 접속해주세요</h2>
          <div id="CboxWrap">
            <Mcbox/>
            <div id="CboxArea">
              <Cbox/>                       
            </div>
            <Writ/>    
          </div>
          </Route>        
        </Switch>            
      </div>
      </BrowserRouter>
      
  );
}

export default App;