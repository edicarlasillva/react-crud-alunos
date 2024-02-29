import { 
  // RouterProvider, 
  createBrowserRouter 
} from "react-router-dom";
import { Student } from "../pages/Student";
import { AssessmentList } from "../pages/AssessmentList";
import { Login } from "../pages/Login";
import { AssessmentForm } from "../pages/AssessmentForm";

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
  },
  {
    path: '/assessment/:id/edit',
    element: <AssessmentForm />
  },
  {
    path: '/assessments/new',
    element: <AssessmentForm />
  }
])

// function Routes() {
//   return <RouterProvider router={router} />
// }

// export default Routes