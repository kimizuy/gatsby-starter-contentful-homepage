import { graphql } from "gatsby"
import {
  Container,
  Section,
  FlexList,
  Box,
  Icon,
  Heading,
  Text,
  Space,
} from "./ui"

function Benefit(props: any) {
  return (
    <Box as="li" width="third" padding={4} paddingY={3}>
      {props.image && (
        <Icon
          alt={props.image.alt}
          image={props.image.gatsbyImageData}
          size="small"
        />
      )}
      {/* @ts-expect-error TS(2322): Type 'number' is not assignable to type 'string'. */}
      <Space size={2} />
      <Heading variant="subheadSmall">{props.heading}</Heading>
      <Text>{props.text}</Text>
    </Box>
  )
}

export default function BenefitList(props: any) {
  return (
    <Section>
      <Container>
        <Box center>
          {props.heading && <Heading>{props.heading}</Heading>}
          {props.text && <Text variant="lead">{props.text}</Text>}
        </Box>
        {/* @ts-expect-error TS(2322): Type 'number' is not assignable to type 'string'. */}
        <Space size={3} />
        <FlexList gutter={3} variant="start" responsive wrap>
          {props.content.map((benefit: any) => (
            <Benefit key={benefit.id} {...benefit} />
          ))}
        </FlexList>
      </Container>
    </Section>
  )
}

export const query = graphql`
  fragment HomepageBenefitListContent on HomepageBenefitList {
    id
    heading
    text
    content {
      id
      heading
      text
      image {
        id
        gatsbyImageData
        alt
      }
    }
  }
`
