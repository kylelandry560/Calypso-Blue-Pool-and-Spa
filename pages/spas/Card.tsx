// Card.tsx
import React from "react";
import { Button, Paper, Title, Text } from "@mantine/core";

interface CardProps {
  image: string;
  title: string;
  category: string;
}

function Card({ image, title, category }: CardProps) {
  return (
    <Paper
      shadow="md"
      p="xl"
      radius="md"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "200px",
        color: "white",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          bottom: "16px",
          left: "16px",
          right: "16px",
          background: "rgba(0, 0, 0, 0.5)",
          padding: "8px",
        }}
      >
        <Text style={{ marginBottom: "4px" }} size="xs">
          {category}
        </Text>
        <Title order={3} style={{ marginBottom: "8px" }}>
          {title}
        </Title>
        <Button
          variant="white"
          color="dark"
          onClick={() => {
            // Handle button click here
            alert(`Viewing more about: ${title}`);
          }}
        >
          View More
        </Button>
      </div>
    </Paper>
  );
}

export default Card;
