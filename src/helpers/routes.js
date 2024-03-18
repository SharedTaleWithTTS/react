import React from 'react';
import { Navigate } from 'react-router-dom';




export function IsUserRedirect({ user, loggedInPath, children }) {
  return user ? <Navigate to={loggedInPath} /> : children;
}

export function ProtectedRoute({ user, children }) {
  return user ? children : <Navigate to="login" />;
}



// // 리액터 라우터 v6되면서 redirect 못쓰고 navigate로 대체함
// // 잘 안될 수 있음.
// export function IsUserRedirect({ user, loggedInPath, children, ...rest }) {
//   return (
//     <Route
//       {...rest}
//       element={!user ? children : <Navigate to={loggedInPath} replace />} // user가 없으면 children을 렌더링하고, 있으면 loggedInPath로 이동합니다.
//     />
//   );
// }

// export function ProtectedRoute({ user, children, ...rest }) {
//   return (
//     <Route
//       {...rest}
//       element={user ? children : <Navigate to="/signin" replace />} // user가 있으면 children을 렌더링하고, 없으면 /signin으로 이동합니다.
//     />
//   );
// }





// 원래 코드 v5
/*
export function IsUserRedirect({ user, loggedInPath, children, ...rest }) {
  return (
    <Route
      {...rest}
      render={() => {
        if (!user) {
          return children;
        }

        if (user) {
          return (
            <Redirect
              to={{
                pathname: loggedInPath,
              }}
            />
          );
        }

        return null;
      }}
    />
  );
}

export function ProtectedRoute({ user, children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) => {
        if (user) {
          return children;
        }

        if (!user) {
          return (
            <Redirect
              to={{
                pathname: 'signin',
                state: { from: location },
              }}
            />
          );
        }

        return null;
      }}
    />
  );
}

*/