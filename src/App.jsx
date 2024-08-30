import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import RootLayout from './pages/Root';
import Auth from './pages/Auth';
import AuthorsQuotes from './pages/AuthorsQuotes';
import QuoteContent from './pages/QuoteContent';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: 'quote/:quoteId',
        element: <QuoteContent />,
      },
      {
        path: 'auth',
        element: <Auth />
      },
      {
        path: 'author/:authorName',
        element: <AuthorsQuotes />
      }
    ]

  }
])
export default function App() {
  return <RouterProvider router={router} />
}
