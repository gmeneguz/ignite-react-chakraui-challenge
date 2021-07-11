import { Button, Flex, Image } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { APP_MAX_WIDTH } from "../../constants";

interface IHeaderProps {
  backButtonEnabled?: boolean;
}

export default function Header({ backButtonEnabled }: IHeaderProps) {
  const router = useRouter();
  return (
    <Flex
      as="header"
      w="100%"
      maxW={APP_MAX_WIDTH}
      h={[50, 100]}
      mx="auto"
      px="4"
      justify="center"
      align="center"
      position="relative"
    >
      {backButtonEnabled && (
        <Button
          background="none"
          position="absolute"
          left={[4, 8, 12]}
          my="auto"
          onClick={() => router.replace("/")}
        >
          <Image src="/assets/back.png" alt="voltar" />
        </Button>
      )}
      <Image src="/assets/logo.png" alt="logo" h={[6, 12]} w={"auto"} />
    </Flex>
  );
}
