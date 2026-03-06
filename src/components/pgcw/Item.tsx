import { Card, Flex, Heading } from "@chakra-ui/react";

interface Props {
  title: string;
  body: string;
}

function CourseItem({ title, body }: Props) {
  return (
    <>
      <Flex justify="center">
        <Card.Root size="sm" width="70%">
          <Card.Header>
            <Heading size="md"> {title}</Heading>
          </Card.Header>
          <Card.Body color="fg.muted">{body}</Card.Body>
        </Card.Root>
      </Flex>
    </>
  );
}

export default CourseItem;
