import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'
//import App from './App.jsx'

import 'react-toastify/dist/ReactToastify.css';
import Aos from 'aos';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import {router} from "./routes/router"

const queryClient = new QueryClient();

/*const router = createBrowserRouter([
  {
    path: "/",
    element: <div class="text-3xl font-bold underline">Hello World!</div>
  },
]);*/


Aos.init();
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>,
)

