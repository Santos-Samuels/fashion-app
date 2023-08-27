import { ProductFilterParams } from "@src/shared/interfaces/Product";
import { useQuery } from "@tanstack/react-query";
import { useMemo, useState } from "react";
import { ProductList, ScreenContainer } from "../components";
import { ProductServices } from "../shared/services";

const ProductsScreen = () => {
  const [filters, setFilters] = useState<ProductFilterParams>();

  const { isLoading, data } = useQuery({
    queryKey: ["products"],
    queryFn: ProductServices.list.bind(null, {}),
  });

  const filterProducts = () => {
    if (!filters) return;

    return data?.data.filter((product) => {
      const titleMatch = product.title
        .toLowerCase()
        .includes(filters.title.toLocaleLowerCase() || "");

      const categoryMatch = filters.category.includes(product.category);

      if (filters.category.includes("all")) return titleMatch;

      return titleMatch && categoryMatch;
    });
  };

  const filteredProducts = useMemo(() => filterProducts() || [], [filters]);

  return (
    <ScreenContainer
      justifyContent={isLoading ? "justify-center" : "justify-start"}
    >
      <ProductList
        products={filters ? filteredProducts : data?.data}
        isLoading={isLoading}
        filters={filters}
        setFilters={(filter?: ProductFilterParams) => setFilters(filter)}
      />
    </ScreenContainer>
  );
};

export default ProductsScreen;
