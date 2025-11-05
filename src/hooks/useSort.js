import { useContext } from "react";

import { SortContext } from "../context/SortContext";

export const useSort = () => useContext(SortContext);
