import { createContext, useEffect, useState } from "react";
import Alert from '@mui/material/Alert';
export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();

  useEffect(() => {
    const userToken = localStorage.getItem("user_token");
    const usersStorage = localStorage.getItem("users_bd");

    if (userToken && usersStorage) {
      const hasUser = JSON.parse(usersStorage)?.filter(
        (user) => user.email === JSON.parse(userToken).email
      );

      if (hasUser) setUser(hasUser[0]);
    }
  }, []);

  const signin = (email, password) => {
    const usersStorage = JSON.parse(localStorage.getItem("users_bd"));

    const hasUser = usersStorage?.filter((user) => user.email === email);

    if (hasUser?.length) {
      if (hasUser[0].email === email && hasUser[0].password === password) {
        const token = Math.random().toString(36).substring(2);
        localStorage.setItem("user_token", JSON.stringify({ email, token }));
        setUser({ email, password });
        return;
      } else {
        return(
          <div>
            <Alert severity="warning">E-mail ou senha incorretos</Alert>
          </div>
        );
      }
    } else {
      return(
        <div>
          <Alert severity="warning">Usuário não cadastrado</Alert>
        </div>
      );
    }
  };

  const signup = (email, password, name, cpf) => {
    const usersStorage = JSON.parse(localStorage.getItem("users_bd"));

    const hasUser = usersStorage?.filter((user) => user.email === email);

    if (hasUser?.length) {
      return (
        <div>
        <Alert severity="error">
          Já tem uma conta com esse email
        </Alert>
      </div>
      );
    }

    let newUser;

    if (usersStorage) {
      newUser = [...usersStorage, {email, password, name, cpf}];
    } else {
      newUser = [{ email, password, name, cpf, }];
    }

    localStorage.setItem("users_bd", JSON.stringify(newUser));

    return;
  };

  const signout = () => {
    setUser(null);
    localStorage.removeItem("user_token");
  };

  return (
    <AuthContext.Provider
      value={{ user, signed: !!user, signin, signup, signout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
