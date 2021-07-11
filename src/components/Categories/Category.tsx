import { Image, Flex, Heading, ListItem, Text } from "@chakra-ui/react";

interface ICategoryProps {
  imageUrl: string;
  label: string;
  asListItem?: boolean;
}

export default function Category({
  imageUrl,
  label,
  asListItem,
}: ICategoryProps) {
  if (asListItem) {
    return (
      <ListItem mx={8} my={3} color="orange.500">
        <Heading
          as="h5"
          layerStyle="darkHeadingsAndText"
          fontSize="md"
          fontWeight={600}
        >
          {label}
        </Heading>
      </ListItem>
    );
  }
  return (
    <Flex
      my={2}
      w={"160px"}
      height={"145px"}
      direction="column"
      alignItems="center"
    >
      <Image src={imageUrl} alt={label} />
      <Heading
        as="h5"
        mt={6}
        layerStyle="darkHeadingsAndText"
        fontSize="md"
        fontWeight={600}
      >
        {label}
      </Heading>
    </Flex>
  );
}
