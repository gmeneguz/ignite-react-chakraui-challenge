import { Flex, Heading } from "@chakra-ui/react";
import ContinentSlider from "../ContinentSlider";
import { APP_MAX_WIDTH } from "../../constants";
import { IContinent } from "../../types";

interface IContinentPickerProps {
  onSelect: (continent: IContinent) => void;
  continents: IContinent[];
}

export default function ContinentPicker({
  onSelect,
  continents,
}: IContinentPickerProps) {
  return (
    <Flex
      direction="column"
      w="100%"
      maxW={APP_MAX_WIDTH}
      align="center"
      mx="auto"
      mb={[6, 10]}
    >
      <Flex
        direction="column"
        align="center"
        layerStyle="darkHeadingsAndText"
        textAlign="center"
        mb={[5, 10]}
      >
        <Heading
          as="h2"
          fontSize={["xl", "2xl", "3xl", "4xl"]}
          lineHeight={1.5}
          fontWeight="medium"
        >
          Vamos nessa?
        </Heading>
        <Heading
          as="h2"
          fontSize={["xl", "2xl", "3xl", "4xl"]}
          lineHeight={1.5}
          fontWeight="medium"
        >
          Então escolha seu continente
        </Heading>
      </Flex>
      <ContinentSlider continents={continents} onSelect={onSelect} />
    </Flex>
  );
}
