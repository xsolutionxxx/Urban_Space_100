import { useContext } from "react";

import { SortContext } from "./SortContext";

export const useSort = () => useContext(SortContext);
