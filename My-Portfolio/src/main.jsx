import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AboutMe from './pages/aboutMe.jsx'
import Portfolio from './pages/portfolio.jsx'
import Home from './pages/home.jsx'
import Contact from './pages/contact.jsx'
import ErrorPage from './pages/error.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'aboutMe',
        element: <AboutMe />,
      },
      {
        path: 'portfolio', 
        element: <Portfolio />,
      },
      {
        path: 'contact',
        element: <Contact />,
      }
    ]
  }
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
    );
