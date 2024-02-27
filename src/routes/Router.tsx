import { 
  // RouterProvider, 
  createBrowserRouter 
} from "react-router-dom";
import { Student } from "../pages/Student";
import { AssessmentList } from "../pages/AssessmentList";
import { Login } from "../pages/Login";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Student />
  },
  {
    path: '/assessments',
    element: <AssessmentList />
  },
  {
    path: '/login',
    element: <Login />
  }
])

// function Routes() {
//   return <RouterProvider router={router} />
// }

// export default Routes