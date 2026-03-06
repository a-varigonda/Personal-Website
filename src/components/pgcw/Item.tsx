import { Card, Flex, Heading, Image, Box } from "@chakra-ui/react";
import { Tooltip } from "src/components/ui/tooltip";
import bs from "src/assets/icons/bs.webp";
import cs from "src/assets/icons/cs.webp";
import ht from "src/assets/icons/ht.webp";
import js from "src/assets/icons/js.webp";
import py from "src/assets/icons/py.webp";
import rt from "src/assets/icons/rt.webp";
import ts from "src/assets/icons/ts.webp";

interface Props {
  title: string;
  body?: string;
  techIcons?: string;
}

function CourseItem({ title, body, techIcons }: Props) {
  const iconMap: Record<string, string> = {
    React: rt,
    TypeScript: ts,
    HTML: ht,
    CSS: cs,
    JavaScript: js,
    Bootstrap: bs,
    Python: py,
  };

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

        {techIcons && (
          <Flex
            position="absolute"
            bottom="12px"
            right="12px"
            gap={2}
            align="center"
          >
            {techIcons.split(" ").map((name) => {
              const iconSrc = iconMap[name];

              if (!iconSrc) return null;

              return (
                <Tooltip
                  key={name}
                  content={name}
                  portalled
                  showArrow
                  positioning={{ placement: "top", offset: { mainAxis: 10 } }}
                >
                  <Box
                    key={name}
                    p="4px"
                    bg="whiteAlpha.100"
                    backdropFilter="blur(4px)"
                    borderRadius="md"
                    border="1px solid"
                    borderColor="whiteAlpha.200"
                  >
                    <Image
                      src={iconSrc}
                      boxSize="20px"
                      objectFit="contain"
                      alt={`${name} icon`}
                    />
                  </Box>
                </Tooltip>
              );
            })}
          </Flex>
        )}
      </Card.Root>
    </Flex>
  );
}

export default CourseItem;
