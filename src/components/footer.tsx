import { graphql, useStaticQuery } from "gatsby"
import {
  Twitter,
  Twitch,
  Instagram,
  Facebook,
  Youtube,
  GitHub,
} from "react-feather"
import {
  Container,
  Flex,
  FlexList,
  Box,
  Space,
  NavLink,
  Text,
  IconLink,
  VisuallyHidden,
} from "./ui"
import BrandLogo from "./brand-logo"

const socialMedia = {
  TWITTER: {
    url: "https://twitter.com",
    name: "Twitter",
    icon: <Twitter />,
  },
  INSTAGRAM: {
    url: "https://instagram.com",
    name: "Instagram",
    icon: <Instagram />,
  },
  FACEBOOK: {
    url: "https://facebook.com",
    name: "Facebook",
    icon: <Facebook />,
  },
  YOUTUBE: {
    url: "https://youtube.com",
    name: "YouTube",
    icon: <Youtube />,
  },
  GITHUB: {
    url: "https://github.com",
    name: "GitHub",
    icon: <GitHub />,
  },
  TWITCH: {
    url: "https://twitch.tv",
    name: "Twitch",
    icon: <Twitch />,
  },
}

const getSocialURL = ({ service, username }: any) => {
  // @ts-expect-error TS(7053): Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
  const domain = socialMedia[service]?.url
  if (!domain) return false
  return `${domain}/${username}`
}

const getSocialIcon = ({ service }: any) => {
  // @ts-expect-error TS(7053): Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
  return socialMedia[service]?.icon
}

const getSocialName = ({ service }: any) => {
  // @ts-expect-error TS(7053): Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
  return socialMedia[service]?.name
}

export default function Footer() {
  const data = useStaticQuery(graphql`
    query {
      layout {
        footer {
          id
          links {
            id
            href
            text
          }
          meta {
            id
            href
            text
          }
          copyright
          socialLinks {
            id
            service
            username
          }
        }
      }
    }
  `)

  const { links, meta, socialLinks, copyright } = data.layout.footer

  return (
    <Box as="footer" paddingY={4}>
      <Container>
        <Flex variant="start" responsive>
          <NavLink to="/">
            <VisuallyHidden>Home</VisuallyHidden>
            <BrandLogo />
          </NavLink>
          <Space />
          <FlexList>
            {socialLinks &&
              socialLinks.map((link: any) => {
                const url = getSocialURL(link)
                return (
                  url && (
                    <li key={link.id}>
                      <IconLink to={url}>
                        <VisuallyHidden>{getSocialName(link)}</VisuallyHidden>
                        {getSocialIcon(link)}
                      </IconLink>
                    </li>
                  )
                )
              })}
          </FlexList>
        </Flex>
        {/* @ts-expect-error TS(2322): Type 'number' is not assignable to type 'string'. */}
        <Space size={5} />
        <Flex variant="start" responsive>
          <FlexList variant="start" responsive>
            {links &&
              links.map((link: any) => (
                <li key={link.id}>
                  <NavLink to={link.href}>{link.text}</NavLink>
                </li>
              ))}
          </FlexList>
          <Space />
          <FlexList>
            {meta &&
              meta.map((link: any) => (
                <li key={link.id}>
                  <NavLink to={link.href}>
                    <Text variant="small">{link.text}</Text>
                  </NavLink>
                </li>
              ))}
          </FlexList>
          <Text variant="small">{copyright}</Text>
        </Flex>
      </Container>
      {/* @ts-expect-error TS(2322): Type 'number' is not assignable to type 'string'. */}
      <Space size={3} />
    </Box>
  )
}
