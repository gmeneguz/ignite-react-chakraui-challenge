import {
  Box,
  Flex,
  FlexProps,
  UnorderedList,
  useBreakpointValue,
} from "@chakra-ui/react";
import Category from "./Category";

export default function Categories(props: FlexProps) {
  const isSmallScreen = useBreakpointValue<boolean>({
    base: true,
    sm: false,
  });
  return (
    <Flex
      {...props}
      width={"100%"}
      maxW="1240px"
      wrap="wrap"
      justify="space-around"
      mx="auto"
      as={isSmallScreen ? UnorderedList : "div"}
    >
      <Category
        imageUrl="/assets/cocktail.png"
        label="vida noturna"
        asListItem={isSmallScreen}
      />
      <Category
        imageUrl="/assets/surf.png"
        label="praia"
        asListItem={isSmallScreen}
      />
      <Category
        imageUrl="/assets/building.png"
        label="moderno"
        asListItem={isSmallScreen}
      />
      <Category
        imageUrl="/assets/museum.png"
        label="clássico"
        asListItem={isSmallScreen}
      />
      <Category
        imageUrl="/assets/earth.png"
        label="e mais..."
        asListItem={isSmallScreen}
      />
    </Flex>
  );
}
