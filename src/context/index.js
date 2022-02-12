import React from "react";

import { ThumbContextProvider } from "./thumb";

const GlobalContext = ({ children }) => {
    return <ThumbContextProvider>{children}</ThumbContextProvider>
}

export default GlobalContext;