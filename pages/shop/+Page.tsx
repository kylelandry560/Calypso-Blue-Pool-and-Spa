import React from "react";
import { AppShell, Grid, Card, Image, Text, Badge, Button, Group } from '@mantine/core';
import { Navbar } from "./Navbar";

import type { Data } from "./+data"
import { useData } from "vike-react/useData";

export default function Page() {
  const products = useData<Data>();

  return (
    <>
      <p>Shop Page</p>
      <p> Mustafa was here </p>
      
      <AppShell.Navbar>
        <Navbar  />     
      </AppShell.Navbar>

      <Grid>
      {products.map(({ id, title, image, price, description}) => (
        <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
          <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Card.Section>
              <Image
                src={image}
                h={160}
                alt="Norway"
              />
            </Card.Section>
      
            <Group justify="space-between" mt="md" mb="xs">
              <Text fw={500}>{title}</Text>
              <Badge color="pink">On Sale</Badge>
            </Group>
      
            <Text size="sm" c="dimmed" lineClamp={2} >
              {description}
            </Text>
      
            <Button color="blue" fullWidth mt="md" radius="md">
              {price}
            </Button>
          </Card>
        </Grid.Col>
      ))}
      </Grid>
    </>
  );
}
