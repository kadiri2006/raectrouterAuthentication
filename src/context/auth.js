import { createContext, useContext } from "react";

let Auth = createContext(null);

let usingAuth = () => useContext(Auth);

export { Auth, usingAuth };
