import { graphql } from "gatsby"
import Layout from "../components/layout"
import * as sections from "../components/sections"
import Fallback from "../components/fallback"

export default function About(props: any) {
  const { aboutPage } = props.data

  return (
    <Layout {...aboutPage}>
      {aboutPage.blocks.map((block: any) => {
        const { id, blocktype, ...componentProps } = block
        // @ts-expect-error TS(7053): Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
        const Component = sections[blocktype] || Fallback
        return <Component key={id} {...componentProps} />
      })}
    </Layout>
  )
}

export const query = graphql`
  {
    aboutPage {
      id
      title
      description
      image {
        id
        url
      }
      blocks: content {
        id
        blocktype
        ...AboutHeroContent
        ...AboutStatListContent
        ...HomepageProductListContent
        ...AboutLeadershipContent
        ...HomepageBenefitListContent
        ...AboutLogoListContent
        ...HomepageCtaContent
      }
    }
  }
`
