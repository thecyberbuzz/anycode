import * as React from 'react'
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import ReactDOM from 'react-dom/client'
import App from './App'
import Upload from './components/Upload'
import './index.css'

const rootElement= document.getElementById('root')!;
const root= ReactDOM.createRoot(rootElement)

root.render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route index element={<App />}/>
          <Route path="upload" element={<Upload />} />
        </Route>
      </Routes>
    </BrowserRouter>
);