import { Component, lazy, Suspense } from 'react';
import './App.css'
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import LifecycleA from './components/LifecycleA';
import PortalDemo from './components/PortalDemo';
//import LazyLoad from './components/LazyLoad'
import RefsDemo from './components/RefsDemo'
//const LazyLoad = lazy(() => import('./components/LazyLoad'));

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <div>Another Component</div> */}
        {/* <LifecycleA /> */}
        {/* <RefsDemo /> */}
        {/* <PortalDemo /> */}
        {/* <FragmentDemo /> */}
        <ClickCounter />
        <HoverCounter />
        {/* <Suspense fallback={<div>Loading...</div>}>
        <LazyLoad />
      </Suspense> */}
      </div>
    ); 
  }
}

export default App;
