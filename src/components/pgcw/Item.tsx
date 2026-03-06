import { Card, Flex, Heading, Image, Box } from "@chakra-ui/react";

interface Props {
  title: string;
  body?: string;
  techIcons?: string[];
}

function CourseItem({ title, body, techIcons }: Props) {
  return (
    <Flex justify="center">
      <Card.Root size="sm" width="70%" position="relative" overflow="hidden">
        <Card.Header>
          <Heading size="md">{title}</Heading>
        </Card.Header>

        {body ? (
          <Card.Body color="fg.muted" paddingBottom="40px">
            {body}
          </Card.Body>
        ) : (
          <Card.Body color="fg.muted"></Card.Body>
        )}

        {techIcons && techIcons.length > 0 && (
          <Flex
            position="absolute"
            bottom="12px"
            right="12px"
            gap={2}
            align="center"
          >
            {techIcons.map((src, index) => (
              <Box
                key={index}
                p="4px"
                bg="whiteAlpha.100"
                backdropFilter="blur(4px)"
                borderRadius="md"
                border="1px solid"
                borderColor="whiteAlpha.200"
              >
                <Image
                  src={src}
                  boxSize="20px"
                  objectFit="contain"
                  alt="tech icon"
                />
              </Box>
            ))}
          </Flex>
        )}
      </Card.Root>
    </Flex>
  );
}

export default CourseItem;
