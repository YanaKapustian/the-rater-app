import { useEffect, useState } from 'react';
import { HashRouter, Routes, Route } from "react-router-dom";
import Books from './pages/Books';
import { GlobalStyles } from "./components/styles/Global";
import {ThemeProvider} from 'styled-components'
import light from './themes/light';
import dark from './themes/dark';
import AddRecord from './pages/AddRecord';
import RecordPage from './pages/RecordPage';
import RecordChange from './pages/RecordChange';

function App() {
  let [theme, setTheme] = useState(light)

  useEffect(() => {
    const currentTheme = localStorage.getItem('current-theme')
    if (currentTheme) {
      let theme = JSON.parse(currentTheme)
      setTheme(theme.name === 'light' ? dark : light)
    }
  }, [])

  const onChangeTheme = () => {
    setTheme(theme.name === 'light' ? dark : light)
    localStorage.setItem('current-theme', JSON.stringify(theme))
  }

  return (
    <HashRouter basename='/'>
      <ThemeProvider theme={theme}>
      <GlobalStyles />
        <Routes>
          <Route path='/' element={<Books onChangeTheme={onChangeTheme}></Books>}></Route>
          <Route path='/addrecord' element={<AddRecord onChangeTheme={onChangeTheme}></AddRecord>}></Route>
          <Route path='/:id' element={<RecordPage onChangeTheme={onChangeTheme}></RecordPage>}></Route>
          <Route path='/:id/change' element={<RecordChange onChangeTheme={onChangeTheme}></RecordChange>}></Route>
        </Routes>
      </ThemeProvider>
      
    </HashRouter>
  );
}

export default App;
