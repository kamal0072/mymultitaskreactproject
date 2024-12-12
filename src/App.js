import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import { 
    BrowserRouter as BRouter , 
    Routes, 
    Route 
} from 'react-router-dom'
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Post from './components/Post';
import Layout from './Layout';
function App() {
  return (
    <div>
        <BRouter>
            <Layout />
            <Routes>
                <Route path='/' element = { <Layout /> } />
                <Route path='/todo' element = {<Home />} />
                <Route path='/calculator' element = {<Contact />} />
                <Route path='/tipcalc' element = {<Post />} />
                <Route path='/about' element = {<About />} />
                {/* <Route path='*' element = {<h1>Page not Found......</h1>} /> */}
            </Routes>
        </BRouter>
    </div>
  );
};
export default App;