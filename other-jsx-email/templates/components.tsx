import { Body, Button, Container, Head, Heading, Hr, Html, Section, Tailwind } from "jsx-email";

import { klassed } from "@klass/react/mono";

const KlassedButton = klassed(Button, {
  base: "font-mono px-6 py-2 rounded-xl border-2 border-solid outline-none focus-visible:outline-2",
  variants: {
    color: {
      red: "bg-red-600 text-white text-lg border-red-700 focus-visible:outline-red-600",
      green: "bg-green-600 text-white text-lg border-green-700 focus-visible:outline-green-600",
      blue: "bg-blue-600 text-white text-lg border-blue-700 focus-visible:outline-blue-600",
    },
  },
  defaults: {
    color: "blue",
  },
});

const KlassedHeading = klassed(Heading, {
  variants: {
    center: {
      true: "text-center",
    },
    weight: {
      400: "font-normal",
      700: "font-bold",
    },
  },
  defaults: {
    weight: 400,
  },
});

export const templateName = "components";

export const Template = () => (
  <Html>
    <Tailwind>
      <Head />
      <Body className="font-sans">
        <Container className="bg-white mx-auto mb-12 p-6">
          <KlassedHeading center weight={700}>
            Components
          </KlassedHeading>
          <Hr />
          <Section className="p-3 text-center">
            <KlassedButton href="#" color="red" className="mx-1">
              red
            </KlassedButton>
            <KlassedButton href="#" color="green" className="mx-1">
              green
            </KlassedButton>
            <KlassedButton href="#" color="blue" className="mx-1">
              blue
            </KlassedButton>
          </Section>
        </Container>
      </Body>
    </Tailwind>
  </Html>
);
