import {
  Flex,
  Heading,
  Icon,
  Text,
  Tooltip,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  Button,
} from "@chakra-ui/react";

import { AiOutlineInfoCircle } from "react-icons/ai";
interface ICounterCardProps {
  count: Number;
  text: string;
  info?: string;
}
export default function CounterCard({ count, text, info }: ICounterCardProps) {
  return (
    <Flex direction="column" align={{ base: "flex-start", lg: "center" }}>
      <Heading
        color={"yellow.500"}
        fontWeight="semibold"
        fontSize={["xl", "3xl"]}
        lineHeight="1.5"
      >
        {count}
      </Heading>
      <Flex align="center">
        <Text fontSize={["md", "lg", "xl"]}>{text}</Text>
        {info && (
          <Popover>
            <PopoverTrigger>
              <Button bg="none" p={1} h={4}>
                <Icon as={AiOutlineInfoCircle} color="gray.500" />
              </Button>
            </PopoverTrigger>

            <PopoverContent>
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverBody>{info}</PopoverBody>
            </PopoverContent>
          </Popover>
        )}
      </Flex>
    </Flex>
  );
}
