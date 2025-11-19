import { useContext } from "react";

import { FiltersContext } from "./FiltersContext";

export const useFilters = () => useContext(FiltersContext);
