import { Flex, Divider } from "@chakra-ui/react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Categories from "../components/Categories";
import ContinentPicker from "../components/ContinentPicker";
import { IContinent } from "../types";
import { useRouter } from "next/router";
import { GetStaticPaths, GetStaticProps } from "next";
import api from "../services/api";

interface IHomeProps {
  continents: IContinent[];
}

export default function Home({ continents }: IHomeProps) {
  const router = useRouter();

  function navigateToContinentDetails(continent: IContinent) {
    router.push(`/continente/${continent.slug}`);
  }

  return (
    <Flex direction="column">
      <Header backButtonEnabled={false} />
      <Banner />
      <Categories mt={[8, 20]} />
      <Divider w={["60px", "90px"]} mx="auto" mt={[10, 20]} mb={[6, 12]} />
      <ContinentPicker
        continents={continents}
        onSelect={navigateToContinentDetails}
      />
    </Flex>
  );
}

// export const getStaticPaths: GetStaticPaths = async (req) => {
//   const { data: continents } = await api.get<IContinent[]>("/continents");
//   return {
//     paths: continents.map((continent) => ({
//       params: {},
//     })),
//     fallback: false,
//   };
// };

export const getStaticProps: GetStaticProps = async () => {
  const { data: continents } = await api.get<IContinent[]>(`continents`);
  return {
    props: {
      continents,
    },
  };
};
