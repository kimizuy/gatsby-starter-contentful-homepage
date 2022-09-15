import { graphql } from "gatsby"
import { Space, Container, Section, FlexList, Text, Logo } from "./ui"

export function LogoItem(props: any) {
  if (!props.image) return null

  return (
    <Logo alt={props.alt} image={props.image.gatsbyImageData} size="medium" />
  )
}

export default function LogoList(props: any) {
  return (
    <Section paddingY={4}>
      <Container width="narrow">
        {props.text && (
          <Text center variant="lead">
            {props.text}
          </Text>
        )}
        {/* @ts-expect-error TS(2322): Type 'number' is not assignable to type 'string'. */}
        <Space size={4} />
        <FlexList gap={4} variant="center">
          {props.logos.map(
            (logo: any) =>
              logo && (
                <li key={logo.id}>
                  <LogoItem {...logo} />
                </li>
              )
          )}
        </FlexList>
      </Container>
    </Section>
  )
}

export const query = graphql`
  fragment HomepageLogoListContent on HomepageLogoList {
    id
    text
    logos {
      id
      alt
      image {
        id
        gatsbyImageData
        alt
      }
    }
  }
`
