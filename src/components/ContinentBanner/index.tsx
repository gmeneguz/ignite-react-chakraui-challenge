import {
  Flex,
  Image,
  useBreakpointValue,
  Heading,
  Text,
} from "@chakra-ui/react";
import { APP_MAX_WIDTH } from "../../constants";

interface IContinentBannerProps {
  bannerImageUrl: string;
  name: string;
}

export default function ContinentBanner({
  bannerImageUrl,
  name,
}: IContinentBannerProps) {
  return (
    <Flex
      w="100%"
      maxW={APP_MAX_WIDTH}
      h={["150px", "500px"]}
      mx="auto"
      justify={["center", "flex-start"]}
      px={[0, 35]}
      py={[0, 15]}
      align={["center", "flex-end"]}
      backgroundImage={`url("${bannerImageUrl}")`}
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
      position="relative"
      backgroundPosition="center center"
    >
      <Flex
        zIndex="1"
        bg="black"
        opacity="0.3"
        position="absolute"
        top={0}
        right={0}
        w="100%"
        h="100%"
      />
      <Heading
        as="h2"
        fontSize={["3xl", "4xl", "5xl"]}
        lineHeight={1.5}
        fontWeight="semibold"
        layerStyle="lightHeadingsAndText"
        zIndex="2"
      >
        {name}
      </Heading>
    </Flex>
  );
}
