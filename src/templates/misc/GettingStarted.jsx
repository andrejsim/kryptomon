import React from 'react';
import { Accordion, Segment, Container, Header } from 'semantic-ui-react';
import { times } from 'lodash';
// TODO: remove after testing
import faker from 'faker';

const panels = times(3, () => ({
  title: faker.lorem.sentence(),
  content: faker.lorem.paragraphs(),
}));

export default function GettingStarted() {
  return (
    <Segment style={{ padding: '8em 0em' }} vertical>
      <Container text style={{ height: 450 }}>
        <Header attached="top" as="h3">
          Getting Started
        </Header>
        <Segment attached>
          <Accordion panels={panels} exclusive={false} />
        </Segment>
      </Container>
    </Segment>
  );
}
