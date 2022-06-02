import React from "react";

export default React.createContext({
  network: "polygon",
  setNetwork: (value: string): void => {},
});
