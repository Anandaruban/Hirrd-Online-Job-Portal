import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import AppLayout from "./layouts/AppLayout"
import LandingPage from "./Pages/LandingPage"
import OnboardingPage from "./Pages/OnboardingPage"
import JobListing from "./Pages/JobListing"
import MyJobs from "./Pages/MyJobs"
import JobPosting from "./Pages/JobPosting"
import SavedJobs from "./Pages/SavedJobs"
import JobPage from "./Pages/JobPage"
import { ThemeProvider } from "./components/ui/theme-provider";

const appRouter = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/onboarding",
        element: <OnboardingPage />,
      },
      {
        path: "/jobs",
        element: <JobListing />,
      },
      {
        path: "/job/:jobId",
        element: <JobPage />,
      },
      {
        path: "/post-job",
        element: <JobPosting />,
      },
      {
        path: "/saved-job",
        element: <SavedJobs />,
      },
      {
        path: "/my-jobs",
        element: <MyJobs />,
      },
    ]
  },
])

const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={appRouter} />
    </ThemeProvider>
  )
}

export default App