import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter,Routes, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from './App';
import Blog from './routes/Blog';
import Contacto from './routes/Contacto';
import Inicio from './routes/Inicio';
import NoEncontrada from './routes/NoEncontrada';
import SinglePost from './routes/SinglePost';

ReactDOM.render(
  
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} >
        <Route index element={<Inicio/>} />
      <Route path="blog" element={<Blog/>} />
      <Route path="blog/:id" element={<SinglePost/>} />
      <Route path="contacto" element={<Contacto/>} />

      <Route path="*" element={<NoEncontrada/>} />
      </Route>
    </Routes>
    
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

