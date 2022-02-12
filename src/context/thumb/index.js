import React, { createContext, useState } from "react";

const DEFAULT_VALUE = {
    state: {
        thumb: 0
    },
    setState: () => { },
};

const ThumbContext = createContext(DEFAULT_VALUE);

const ThumbContextProvider = ({ children }) => {
    const [state, setState] = useState(DEFAULT_VALUE.state);

    return (
        <ThumbContext.Provider value={{ state, setState }}>
            {children}
        </ThumbContext.Provider>
    );
}
export { ThumbContextProvider };
export default ThumbContext;