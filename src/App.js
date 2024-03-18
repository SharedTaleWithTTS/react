import React from "react";
// import { JumbotronContainer } from "./container/jumbotron";
// import HeaderContainer from "./container/header";
// import { FooterContainer } from "./container/footer";
import BrowsePage from "./pages/BrowsePage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";

import TestPage from "./pages/TestPage";
import TalePage from "./pages/TalePage";

import * as ROUTES from "./routes/routes";
import { Route, Routes } from "react-router-dom";
import { IsUserRedirect, ProtectedRoute } from "./helpers/routes";
import { useAuthListener } from "./hooks";
// import IsUserRedirect  from './helpers/routes';



export default function App() {
  const { user } = useAuthListener();

  return (
      <Routes>
        <Route path={ROUTES.BROWSE} element={<BrowsePage /> } />
        <Route path={ROUTES.HOME} element={<HomePage />} />
        <Route path={ROUTES.LOG_IN}  element={<LoginPage />} />
        <Route path={ROUTES.SIGN_UP}  element={<SignupPage />} />
        <Route path="/test" element={<TestPage />} />
        <Route path="/test/test01page" element={<TalePage />} /> 
     
 

      </Routes> 
  );
}
//       <Route path="/test/test01page" element={<TalePage />} /> 
// 이게 없으면 그냥 빈 화면만 나옴(global-styles 는 적용됨)


// <Routes>
// <Route path={ROUTES.BROWSE} element={<ProtectedRoute user={user}> <BrowsePage /></ProtectedRoute>} />
// <Route path={ROUTES.HOME} element={<IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE}> <HomePage /></IsUserRedirect>} />
// <Route path={ROUTES.LOG_IN}  element={<IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE}> <LoginPage /></IsUserRedirect>} />
// <Route path={ROUTES.SIGN_UP}  element={<IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE}> <SignupPage /></IsUserRedirect>} />
// </Routes>