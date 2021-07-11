import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  layerStyles: {
    darkHeadingsAndText: {
      color: "#47585B",
    },
    darkInfo: {
      color: "#999999",
    },
    lightHeadingsAndText: {
      color: "#F5F8FA",
    },
    lightInfo: {
      color: "##DADADA",
    },
  },
  textStyles: {
    cardTitle: {
      fontWeight: 600,
      fontFamily: "Barlow",
      fontSize: "5",
    },
    cardText: {
      fontWeight: 500,
      fontFamily: "Barlow",
      fontSize: "4",
    },
    h2: {
      fontSize: ["1rem", "2.25rem"],
      lineHeight: ["1.875rem", "3.375rem"],
    },
  },
  colors: {
    yellow: {
      500: "#FFBA08",
    },
  },
  fonts: {
    heading: "Poppins",
    body: "Poppins",
  },
  styles: {
    global: {
      body: {
        bg: "#F6F8FA",
      },
    },
  },
});
