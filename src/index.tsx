import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { App } from './app/App'

const root = document.getElementById('root')
const container = createRoot(root)

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
])

container.render(<RouterProvider router={router} />)
