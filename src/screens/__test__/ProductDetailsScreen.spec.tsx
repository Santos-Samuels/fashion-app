import { Product } from "@src/shared/interfaces/Product";
import { ProductServices } from "@src/shared/services";
import { AxiosResponse } from "axios";
import { product } from "../../../test/product.mock";

describe("ProductsScreen", () => {
  let spyFn: jest.SpyInstance;

  beforeAll(() => {
    spyFn = jest
      .spyOn(ProductServices, "getById")
      .mockResolvedValue({ data: product } as AxiosResponse<Product, any>);
  });

  it("should return all products intro API response", async () => {
    const { data } = await ProductServices.getById(1);

    expect(spyFn).toBeCalledTimes(1);
    expect(data).toEqual(product);
  });
});
