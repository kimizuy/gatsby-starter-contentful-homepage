import { graphql } from "gatsby"
import { Container, Box, Kicker, Heading, Text } from "./ui"
import Feature from "./feature"

export default function FeatureList(props: any) {
  return (
    <Container width="fullbleed">
      <Box background="muted" radius="large">
        <Box center paddingY={5}>
          <Heading>
            {props.kicker && <Kicker>{props.kicker}</Kicker>}
            {props.heading}
          </Heading>
          {props.text && <Text>{props.text}</Text>}
        </Box>
        {props.content.map((feature: any, i: any) => (
          <Feature key={feature.id} {...feature} flip={Boolean(i % 2)} />
        ))}
      </Box>
    </Container>
  )
}

export const query = graphql`
  fragment HomepageFeatureListContent on HomepageFeatureList {
    id
    kicker
    heading
    text
    content {
      id
      ...HomepageFeatureContent
    }
  }
`
