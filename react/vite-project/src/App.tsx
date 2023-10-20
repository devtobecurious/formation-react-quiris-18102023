import { Route, Routes } from 'react-router-dom'
import './App.css'
import { MenuDefault } from './shared/ui/menus/MenuDefault'
import { ListGamePage } from './pages/ListGamePage'
import { ListPeoplePage } from './pages/ListPeoplePage'

function App() {
  return (
    <>
      <MenuDefault></MenuDefault>

      <Routes>
        <Route path="/games" element={<ListGamePage></ListGamePage>}></Route>
        <Route path="/people" element={<ListPeoplePage></ListPeoplePage>}></Route>
      </Routes>
      {/* <ListGamePage></ListGamePage> */}
      {/* <ListPeoplePage></ListPeoplePage> */}
    </>
  )
}

export default App
