import {
  Flex,
  Image,
  useBreakpointValue,
  Heading,
  Text,
} from "@chakra-ui/react";
import { APP_MAX_WIDTH } from "../../constants";

interface IBannerProps {
  backButtonEnabled?: boolean;
}

export default function Banner({}: IBannerProps) {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex
      w="100%"
      maxW={APP_MAX_WIDTH}
      minH={[140, 335]}
      mx="auto"
      px={[8, 16, 24, 24, 36]}
      py={[8, 0]}
      justify={isWideVersion ? "space-between" : "flex-start"}
      align="center"
      backgroundImage={'url("/assets/banner_background.png")'}
    >
      <Flex direction="column" maxW={"520px"}>
        <Heading
          as="h2"
          fontSize={["xl", "2xl", "3xl", "4xl"]}
          lineHeight={1.5}
          fontWeight="medium"
          layerStyle="lightHeadingsAndText"
        >
          5 Continentes, infinitas possibilidades.
        </Heading>
        <Text layerStyle="lightInfo" mt={6} ml={2}>
          Chegou a hora de tirar do papel a viagem que você sempre sonhou.
        </Text>
      </Flex>
      {isWideVersion && (
        <Image
          src="/assets/airplane.png"
          alt="avião"
          h={270}
          w={"auto"}
          alignSelf="flex-end"
          mb="-4"
          transform="rotate(3deg)"
        />
      )}
    </Flex>
  );
}
