import React from 'react';
import Gallery from './components/gallery';
import Photos from './components/photos';
import { HashRouter, Route} from 'react-router-dom';

class App extends React.Component {

    render(){
        return ( // создание роутинга с переходом на другие страницы
            <HashRouter basename='/'>            
                <Route path='/gallery' component={Gallery} />
                <Route path='/album' component={Photos} />
            </HashRouter>
        )
   }
}

export default App;
