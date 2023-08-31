import { Product } from "@src/shared/interfaces/Product";
import { ProductServices } from "@src/shared/services";
import { AxiosResponse } from "axios";
import { products } from "../../../test/product.mock";

describe("ProductsScreen", () => {
  let spyFn: jest.SpyInstance;
  
  beforeAll(() => {
    spyFn = jest
      .spyOn(ProductServices, "list")
      .mockResolvedValue({ data: products } as AxiosResponse<Product[], any>);
  });

  it("should return all products intro API response", async () => {
    const { data } = await ProductServices.list({});

    expect(spyFn).toBeCalledTimes(1);
    expect(data).toHaveLength(2);
  });
});
