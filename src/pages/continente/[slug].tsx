import { Flex, Text, Stack, Heading } from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps } from "next";
import Header from "../../components/Header";
import ContinentBanner from "../../components/ContinentBanner";
import CounterCard from "../../components/CounterCard";
import api from "../../services/api";
import { ICityData, IContinent } from "../../types";
import { APP_MAX_WIDTH } from "../../constants";
import CityCard from "../../components/CityCard";

interface IContinentData extends IContinent {
  bannerUrl: string;
  description: string;
  countries: number;
  languages: number;
  citiesOnTop100: ICityData[];
}
interface IContinentProps {
  continent: IContinentData;
}

export default function Continent({ continent }: IContinentProps) {
  return (
    <Flex direction="column">
      <Header backButtonEnabled={true} />
      <ContinentBanner
        name={continent.name}
        bannerImageUrl={continent.bannerUrl}
      />
      <Flex
        maxW={APP_MAX_WIDTH}
        mx="auto"
        mt={[6, 6, 6, 20]}
        px={[4, 8, 16]}
        direction="column"
      >
        <Stack
          direction={{ base: "column", lg: "row" }}
          align={{ base: "stretch", lg: "center" }}
          mx="auto"
          spacing={[8, 8, 8, 20]}
        >
          <Flex flex="1" layerStyle="darkHeadingsAndText">
            <Text fontSize={["sm", "md", "lg"]}>{continent.description}</Text>
          </Flex>
          <Flex flex="1" justify="space-between">
            <CounterCard count={continent.countries} text="países" />
            <CounterCard count={continent.languages} text="línguas" />
            <CounterCard
              count={continent.citiesOnTop100.length}
              text="cidades 100+"
              info="A quantidade de cidades no continente que estão entre as 100+ visitadas no mundo."
            />
          </Flex>
        </Stack>
        <Flex my={20} direction="column">
          <Heading
            fontWeight="medium"
            fontSize={["lg", "2xl"]}
            mb={[8, 12, 20]}
          >
            Cidades +100
          </Heading>
          <Flex
            wrap="wrap"
            justify={{ base: "center", lg: "flex-start" }}
            align="center"
          >
            {continent.citiesOnTop100.map((city, index) => (
              <Flex key={index} mx={5} my={4}>
                <CityCard cityData={city} />
              </Flex>
            ))}
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

export const getStaticPaths: GetStaticPaths = async (req) => {
  const { data: continents } = await api.get<IContinent[]>("/continents");
  return {
    paths: continents.map((continent) => ({
      params: { slug: continent.slug },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (req) => {
  const { slug } = req.params || {};
  try {
    const { data: continent } = await api.get<IContinentData>(
      `continents/${slug}`
    );
    return {
      props: {
        continent,
      },
    };
  } catch (error) {
    if (error.response.status === 404) {
      return {
        notFound: true,
      };
    }
    throw error;
  }
};
