import {
  Text,
  Box,
  Center,
  VStack,
  UnorderedList,
  ListItem,
  HStack,
  Divider,
} from "@chakra-ui/react";

type TextBlockProps = {
  company?: string;
  role?: string;
  date?: string;
  location?: string;
  description?: JSX.Element[];
};

export function TextBlock({
  company = "Morgan Stanley",
  role = "Software Engineer Intern",
  date = "Jun 2023 - Aug 2023",
  location = "New York, NY",
  description,
}: TextBlockProps) {
  
  const defaultDescription = [
    <ListItem key="1">Lorem ipsum dolor sit amet</ListItem>,
    <ListItem key="2">Consectetur adipiscing elit</ListItem>,
    <ListItem key="3">Integer molestie lorem at massa</ListItem>,
    <ListItem key="4">Facilisis in pretium nisl aliquet</ListItem>,
  ];

  return (
    <VStack fontSize="20px" fontWeight="semibold" align="start" mb='50px' mt='50px' ms='30px'>
      <Text >{date}</Text>
      <HStack>
        <Text color='#9A5CCB' opacity='0.7'>{company}</Text>
        <Center height="40px">
          <Divider
            orientation="vertical"
            sx={{ borderWidth: 1, borderColor: "blue.500" }}
          />
        </Center>
        <Text>{role}</Text>
        <Center height="40px">
          <Divider
            orientation="vertical"
            sx={{ borderWidth: 1, borderColor: "#9A5CCB" }}
          />
        </Center>
        <Text>{location}</Text>
      </HStack>

      <UnorderedList fontWeight="medium" fontStyle="italic">
        {description || defaultDescription}
      </UnorderedList>

      <Divider sx={{ borderWidth: 1, borderColor: "#9A5CCB" }} />
    </VStack>
  );
}
