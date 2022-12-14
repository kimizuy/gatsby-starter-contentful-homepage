import { graphql, PageProps } from "gatsby"
import Layout from "../components/layout"
import { Container, Box, Heading } from "../components/ui"

type Props = PageProps<Queries.PageContentQuery>

export default function Page(props: Props) {
  const { page } = props.data

  return (
    <Layout {...page}>
      <Box paddingY={5}>
        <Container width="narrow">
          <Heading as="h1">{page?.title}</Heading>
          <div
            dangerouslySetInnerHTML={{
              __html: page?.html || "",
            }}
          />
        </Container>
      </Box>
    </Layout>
  )
}

export const query = graphql`
  query PageContent($id: String!) {
    page(id: { eq: $id }) {
      id
      title
      slug
      description
      image {
        id
        url
      }
      html
    }
  }
`
