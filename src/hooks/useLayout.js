import { useContext } from "react";

import { LayoutContext } from "../context/LayoutContext";

export const useLayout = () => useContext(LayoutContext);
