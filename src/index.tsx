import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { App } from './app/App'

const root = document.getElementById('root')
const container = createRoot(root)

container.render(<App />)
