import { useEffect, useState, useMemo } from "react";
import { X } from "lucide-react";

import { useFilters } from "@features/filters/useFilters.js";

import FiltersSection from "./FiltersSection.jsx";
import FiltersControls from "./FiltersControls.jsx";
import PriceControls from "./PriceControls.jsx";

import UrbanService from "@service/UrbanService";

function FiltersPanel() {
  const { filters, setFilters, setFiltersOpen, resetFilters } = useFilters();

  const [products, setProducts] = useState([]);
  const [localFilters, setLocalFilters] = useState(filters);

  const { getAllProducts } = UrbanService();

  useEffect(() => {
    getAllProducts()
      .then((data) => {
          setProducts(data);
      })
      .catch((e) => console.error("Не вдалося завантажити товари для фільтрів", e));
  }, []);

  useEffect(() => {
    setLocalFilters(filters);
  }, [filters]);

  const brands = useMemo(() => {
      if (!products.length) return [];
      return [...new Set(products.map((p) => p.brand))];
  }, [products]);

  const categories = useMemo(() => {
      if (!products.length) return [];
      return [...new Set(products.map((p) => p.category))];
  }, [products]);

  const { minPrice, maxPrice } = useMemo(() => {
    if (!products?.length) return { minPrice: 0, maxPrice: 0 };

    const prices = products.map((p) => p.price);
    return {
      minPrice: Math.min(...prices),
      maxPrice: Math.max(...prices),
    };
  }, [products]);

  const activeFilters = useMemo(() => {
    const active = [];

    if (localFilters.priceFrom) {
      active.push({
        type: "price",
        key: "priceFrom",
        label: `Від: ${localFilters.priceFrom} грн`,
      });
    }

    if (localFilters.priceTo) {
      active.push({
        type: "price",
        key: "priceTo",
        label: `До: ${localFilters.priceTo} грн`,
      });
    }

    if (localFilters.brands) {
      Object.keys(localFilters.brands).forEach((brand) => {
        active.push({ type: "list", group: "brands", label: brand });
      });
    }

    if (localFilters.categories) {
      Object.keys(localFilters.categories).forEach((cat) => {
        active.push({ type: "list", group: "categories", label: cat });
      });
    }

    return active;
  }, [localFilters]);

  const removeFilter = (item) => {
    setLocalFilters((prev) => {
      const newState = { ...prev };

      if (item.type === "price") {
        newState[item.key] = "";
      } else if (item.type === "list") {
        const group = { ...newState[item.group] };
        delete group[item.label];
        newState[item.group] = group;
      }

      return newState;
    });
  };

  const handlePriceChange = (key, value) => {
    setLocalFilters((prev) => ({ ...prev, [key]: value }));
  };

  const handleCheckboxChange = (filterKey, name, isChecked) => {
    setLocalFilters((prev) => {
      const updatedFilterGroup = { ...(prev[filterKey] || {}) };

      if (isChecked) {
        updatedFilterGroup[name] = true;
      } else {
        delete updatedFilterGroup[name];
      }

      return { ...prev, [filterKey]: updatedFilterGroup };
    });
  };

  const applyFilters = () => {
    setFilters(localFilters);
    setFiltersOpen(false);
  };

  return (
    <>
      <div
        onClick={() => setFiltersOpen(false)}
        className="fixed inset-0 bg-black/50 backdrop-blur-xs z-90"
      />
      <div className="fixed top-0 left-0 z-100 w-80 h-screen bg-primary flex flex-col">
        <button
          onClick={() => setFiltersOpen(false)}
          className="mb-px px-10 py-3 w-full bg-accent text-lg text-white/90 leading-8 tracking-widest uppercase"
        >
          Закрити
        </button>

        <div className="pb-2 flex-1 overflow-y-auto">
          {activeFilters.length > 0 && (
            <FiltersSection
              title="Обрані фільтри"
              sectionKey="selected-filters"
              defaultOpen={false}
            >
              <div className="mt-2 grid gap-5">
                <span className="text-base font-medium text-gray-500">
                  Обрано: {activeFilters.length}
                </span>
                <div className="flex flex-wrap gap-3">
                  {activeFilters.map((item, idx) => (
                    <button
                      onClick={() => removeFilter(item)}
                      key={idx}
                      className="flex items-center gap-1 pl-3 pr-2 py-1 bg-secondary text-sm rounded-full"
                    >
                      <span>{item.label}</span>
                      <X size={14} className="text-gray-500" />
                    </button>
                  ))}
                </div>

                <button
                  onClick={() => {resetFilters(); setFiltersOpen(false)}}
                  className="px-10 py-3 w-full bg-accent text-sm text-white/90 tracking-widest uppercase shadow-[0_5px_30px_rgba(0,0,0,0.4)]"
                >
                  Очистити фільтри
                </button>
              </div>
            </FiltersSection>
          )}

          <FiltersSection title="Ціна" sectionKey="price">
            <PriceControls
              priceFrom={localFilters.priceFrom}
              priceTo={localFilters.priceTo}
              onPriceFromChange={(val) => handlePriceChange("priceFrom", val)}
              onPriceToChange={(val) => handlePriceChange("priceTo", val)}
              minPlaceholder={minPrice}
              maxPlaceholder={maxPrice}
            />
          </FiltersSection>

          <FiltersSection title="Виробник" sectionKey="brands">
            <FiltersControls
              filterNames={brands}
              selectedValues={localFilters.brands}
              onChange={(name, checked) =>
                handleCheckboxChange("brands", name, checked)
              }
            />
          </FiltersSection>

          <FiltersSection title="Категорія" sectionKey="categories">
            <FiltersControls
              selected={localFilters.categories}
              filterNames={categories}
              selectedValues={localFilters.categories}
              onChange={(name, checked) =>
                handleCheckboxChange("categories", name, checked)
              }
            />
          </FiltersSection>
        </div>

        <button
          onClick={() => applyFilters()}
          className="shrink-0 px-10 py-5 w-full h-20 bg-white text-lg text-accent uppercase shadow-[0_-10px_30px_rgba(0,0,0,0.4)] z-10"
        >
          Застосувати
        </button>
      </div>
    </>
  );
}

export default FiltersPanel;
