import { useState } from 'react';
import { Routes, Route } from 'react-router-dom'
import B from './components/B';
import Error from './components/Error';
import Greeting from './components/Greeting';
import SiteSettings from './components/SiteSettings';
import { backgrounds } from './data';
import { useTranslation } from "react-i18next";



function App() {
  const { t, i18n } = useTranslation();
  const [bg, setBg] = useState(backgrounds)
  console.log(bg)
  return (
    <div className="">
      <Routes>
        <Route path='/' element={<Greeting bg={bg} />} />
        <Route path='/a' element={<SiteSettings t={t} i18n={i18n} bg={bg} />} />
        <Route path='/b' element={<B />} />
        <Route path='*' element={<Error bg={bg} />} />
      </Routes>
    </div>
  );
}

export default App;
