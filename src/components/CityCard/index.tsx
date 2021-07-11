import {
  Flex,
  Image,
  useBreakpointValue,
  Heading,
  Text,
} from "@chakra-ui/react";
import { ICityData } from "../../types";

interface ICityCardProps {
  cityData: ICityData;
}

export default function CityCard({ cityData }: ICityCardProps) {
  return (
    <Flex
      direction="column"
      width="256px"
      height="279px"
      bg="white"
      borderRadius="8px"
      borderColor="yellow.500"
      borderStyle="solid"
      borderWidth="1px"
      overflow="hidden"
    >
      <Image
        src={cityData.bannerImageUrl}
        alt={cityData.name}
        h="173px"
        w="100%"
      />
      <Flex flex="1">
        <Flex
          direction="column"
          flex="1"
          justify="center"
          h="100%"
          px={6}
          py={5}
        >
          <Heading
            as="h2"
            fontSize="lg"
            lineHeight={1.25}
            fontWeight="semibold"
            textStyle="cardTitle"
            layerStyle="darkHeadingsAndText"
            mb={2}
          >
            {cityData.name}
          </Heading>
          <Text fontSize="md" textStyle="cardText" layerStyle="darkInfo">
            {cityData.country}
          </Text>
        </Flex>
        <Flex align="center">
          <Image
            src={cityData.countryFlagUrl}
            alt={cityData.country}
            mx={6}
            h="32px"
            w="32px"
            borderRadius="16px"
          />
        </Flex>
      </Flex>
    </Flex>
  );
}
