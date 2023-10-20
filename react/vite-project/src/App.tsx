import { Route, Routes } from 'react-router-dom'
import './App.css'
import { MenuDefault } from './shared/ui/menus/MenuDefault'
import { ListGamePage } from './pages/ListGamePage'
import { ListPeoplePage } from './pages/ListPeoplePage'
import { AuthenticateProviderContext } from './features/authentication/models/AuthenticateProviderContext'

function App() {
  return (
    <>
      <AuthenticateProviderContext>
        <MenuDefault></MenuDefault>

        <Routes>
          <Route path="/games" element={<ListGamePage></ListGamePage>}></Route>
          <Route path="/people" element={<ListPeoplePage></ListPeoplePage>}></Route>
        </Routes>
      </AuthenticateProviderContext>
      {/* <ListGamePage></ListGamePage> */}
      {/* <ListPeoplePage></ListPeoplePage> */}
    </>
  )
}

export default App
