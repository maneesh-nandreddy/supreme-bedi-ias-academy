import { Home, Profile, SignIn, SignUp } from "@/pages";

export const routes = [
  {
    name: "home",
    path: "/home",
    element: <Home />,
  },
  // {
  //   name: "About",
  //   path: "/about",
  //   element: <About/>,
  // },
  {
    name: "Prelims and Mains",
    path: "/profile",
    element: <Home />,
  },
  {
    name: "Interview",
    path: "/sign-in",
    element: <Home />,
  },
  {
    name: "Test Series",
    path: "/sign-up",
    element: <Home />,
  },
  {
    name: "Study Material",
    href: "/home",
    target: "_blank",
    element: "",
  },
];

export default routes;
