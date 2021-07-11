import { Flex, Heading, Text } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { IContinent } from "../../types";

interface IContinentSliderProps {
  onSelect: (continent: IContinent) => void;
  continents: IContinent[];
}

export default function ContinentSlider({
  onSelect,
  continents,
}: IContinentSliderProps) {
  return (
    <Flex
      direction="column"
      width={["100%", "100%", "80vw"]}
      maxW={"1240px"}
      marginX="auto"
    >
      <Swiper
        style={{ width: "100%" }}
        spaceBetween={0}
        navigation={true}
        pagination={true}
        slidesPerView={1}
      >
        {continents.map((continent) => (
          <SwiperSlide key={continent.name} style={{}}>
            <Flex
              bgImage={`url("${continent.imageUrl}")`}
              bgRepeat="no-repeat"
              bgSize="cover"
              direction="column"
              alignItems="center"
              justify="center"
              minH={["250px", "450px"]}
              position="relative"
              layerStyle="lightHeadingsAndText"
            >
              <Flex
                position="absolute"
                left="0"
                top="0"
                w="100%"
                h="100%"
                bg="black"
                opacity="0.3"
                zIndex="1"
              />

              <Heading
                cursor="pointer"
                onClick={() => onSelect(continent)}
                fontWeight="bold"
                fontSize={["lg", "4xl"]}
                lineHeight="1.5"
                zIndex="2"
              >
                {continent.name}
              </Heading>
              <Text fontWeight="bold" fontSize={["md", "lg"]} zIndex="2">
                {continent.info}
              </Text>
            </Flex>
          </SwiperSlide>
        ))}
      </Swiper>
    </Flex>
  );
}
