import logo from './logo.svg';
import './App.css';


import SignUp from './componenets/SignUp';
import LogIn from './componenets/LogIn';
import Onboarding from './componenets/Onboarding';
import Message from './componenets/Message';
import { Provider } from 'react-redux';
import store from './utils/store';

import {RouterProvider, createBrowserRouter} from 'react-router-dom'



function App() {
  //creating routes for every page
  const appRouter= createBrowserRouter([
    {
      path:"/", element:<Onboarding/>
    },
    {
      path:"/signup", element:<SignUp/>
    },
    {
      path:"/login", element:<LogIn/>
    },
    {
      path:"/message", element:<Message/> 
    }
  ])
  return (
    <Provider store={store}>
    <RouterProvider router={appRouter}/>
    </Provider>
  );
}

export default App;
