import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import { About } from './components/About/About'
import { Contact } from './components/Contact/Contact'
import { Home } from './components/Home/Home'
import { Projects } from './components/Project/Projects'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
        index: true,
      },

      {
        path: '/projects',
        element: <Projects />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
    ],
  },
])
