import { GatsbyImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import {
  Container,
  Flex,
  Box,
  Space,
  Heading,
  Text,
  Avatar,
} from "../components/ui"
import { avatar as avatarStyle } from "../components/ui.css"
import * as styles from "./blog-post.css"

export default function BlogPost(props: any) {
  return (
    <Layout {...props} description={props.excerpt}>
      <Container>
        <Box paddingY={5}>
          <Heading as="h1" center>
            {props.title}
          </Heading>
          {/* @ts-expect-error TS(2322): Type 'number' is not assignable to type 'string'. */}
          <Space size={4} />
          {props.author && (
            <Box center>
              <Flex>
                {props.author.avatar &&
                  (!!props.author.avatar.gatsbyImageData ? (
                    <Avatar
                      {...props.author.avatar}
                      image={props.author.avatar.gatsbyImageData}
                    />
                  ) : (
                    <img
                      src={props.author.avatar.url}
                      alt={props.author.name}
                      className={avatarStyle}
                    />
                  ))}
                <Text variant="bold">{props.author.name}</Text>
              </Flex>
            </Box>
          )}
          {/* @ts-expect-error TS(2322): Type 'number' is not assignable to type 'string'. */}
          <Space size={4} />
          <Text center>{props.date}</Text>
          {/* @ts-expect-error TS(2322): Type 'number' is not assignable to type 'string'. */}
          <Space size={4} />
          {props.image && (
            <GatsbyImage
              alt={props.image.alt}
              image={props.image.gatsbyImageData}
            />
          )}
          {/* @ts-expect-error TS(2322): Type 'number' is not assignable to type 'string'. */}
          <Space size={5} />
          <div
            className={styles.blogPost}
            dangerouslySetInnerHTML={{
              __html: props.html,
            }}
          />
        </Box>
      </Container>
    </Layout>
  )
}
