import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { store } from './redux/store/store.ts'
import App from './App.tsx'
import './_main.module.scss'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:4000'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <DndProvider backend={HTML5Backend}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </DndProvider>
  </Provider>
)
