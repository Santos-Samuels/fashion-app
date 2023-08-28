import {
  CategoriesWithIconList,
  ScreenContainer,
  ShopBanner,
} from "@src/components";
import { Image } from "react-native";

const HomeScreen = () => {
  return (
    <ScreenContainer>
      <ShopBanner />

      <Image
        className="self-center rounded-xl w-full"
        source={{
          uri: "https://img.freepik.com/vetores-gratis/fundo-plano-de-venda-de-outono_23-2149112727.jpg?w=740&t=st=1693249427~exp=1693250027~hmac=99ebe8e3d0fc90ce430e07d42ce8f2413eabb9064e75c2ca4077ab9c54146cfc",
        }}
        style={{ height: 200 }}
        resizeMode="cover"
      />

      <CategoriesWithIconList />
    </ScreenContainer>
  );
};

export default HomeScreen;
