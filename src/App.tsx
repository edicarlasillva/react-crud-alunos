import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Router";

import GlobalStyles from "./styles/global"

export function App() {
  return (
    <>
      <GlobalStyles />
      <RouterProvider router={router} />
    </>
  )
}


