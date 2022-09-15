import { Link as GatsbyLink } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import isAbsoluteURL from "is-absolute-url"

import * as styles from "./ui.css"

export const cx = (...args: any[]) => args.filter(Boolean).join(" ")

export function Base({
  as: Component = "div",
  cx: _cx = [],
  className,
  ...props
}: any) {
  return <Component className={cx(..._cx, className)} {...props} />
}

export function Container({ width = "normal", ...props }) {
  // @ts-expect-error TS(7053): Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
  return <Base cx={[styles.containers[width]]} {...props} />
}

export function Flex({
  variant,
  gap = 3,
  gutter,
  wrap,
  responsive,
  marginY,
  alignItems,
  cx: _cx = [],
  ...props
}: any) {
  return (
    <Base
      cx={[
        styles.flex,
        // @ts-expect-error TS(7053): Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
        variant && styles.flexVariants[variant],
        responsive && styles.flexVariants.responsive,
        wrap && styles.flexVariants.wrap,
        // @ts-expect-error TS(7053): Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
        gutter && styles.gutter[gutter],
        // @ts-expect-error TS(7053): Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
        gutter ? styles.flexGap[0] : styles.flexGap[gap],
        // @ts-expect-error TS(7053): Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
        marginY && styles.marginY[marginY],
        // @ts-expect-error TS(7053): Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
        alignItems && styles.flexVariants[alignItems],
        ..._cx,
      ]}
      {...props}
    />
  )
}

export function Box({
  width = "full",
  background,
  padding,
  paddingY,
  radius,
  center = false,
  order,
  cx: _cx = [],
  ...props
}: any) {
  return (
    <Base
      cx={[
        // @ts-expect-error TS(7053): Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
        styles.widths[width],
        // @ts-expect-error TS(7053): Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
        background && styles.backgrounds[background],
        // @ts-expect-error TS(7053): Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
        padding && styles.padding[padding],
        // @ts-expect-error TS(7053): Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
        paddingY && styles.paddingY[paddingY],
        // @ts-expect-error TS(7053): Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
        radius && styles.radii[radius],
        center && styles.box.center,
        // @ts-expect-error TS(7053): Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
        order && styles.order[order],
        ..._cx,
      ]}
      {...props}
    />
  )
}

export function FlexList(props: any) {
  return <Flex as="ul" cx={[styles.list]} {...props} />
}

export function List(props: any) {
  return <Base as="ul" cx={[styles.list]} {...props} />
}

export function Space({ size = "auto", ...props }) {
  // @ts-expect-error TS(7053): Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
  return <Base cx={[styles.margin[size]]} {...props} />
}

export function Nudge({ left, right, top, bottom, ...props }: any) {
  return (
    <Base
      cx={[
        // @ts-expect-error TS(7053): Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
        left && styles.marginLeft[-left],
        // @ts-expect-error TS(7053): Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
        right && styles.marginRight[-right],
        // @ts-expect-error TS(7053): Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
        top && styles.marginTop[-top],
        // @ts-expect-error TS(7053): Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
        bottom && styles.marginBottom[-bottom],
      ]}
      {...props}
    />
  )
}

export function Section(props: any) {
  return <Box as="section" className={styles.section} {...props} />
}

export function Text({
  variant = "body",
  center = false,
  bold = false,
  ...props
}) {
  return (
    <Base
      cx={[
        // @ts-expect-error TS(7053): Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
        styles.text[variant],
        center && styles.text.center,
        bold && styles.text.bold,
      ]}
      {...props}
    />
  )
}

export function SuperHeading({ ...props }) {
  return <Text as="h1" variant="superHeading" {...props} />
}

export function Heading({ ...props }) {
  return <Text as="h2" variant="heading" {...props} />
}

export function Subhead({ ...props }) {
  return <Text as="h3" variant="subhead" {...props} />
}

export function Kicker({ ...props }) {
  return <Text variant="kicker" {...props} />
}

export function Link({ to, href, ...props }: any) {
  const url = href || to || ""
  if (isAbsoluteURL(url)) {
    return (
      // eslint-disable-next-line jsx-a11y/anchor-has-content
      <a href={url} className={styles.link} {...props} />
    )
  }
  return <GatsbyLink to={url} className={styles.link} {...props} />
}

export function NavLink({ ...props }) {
  return <Base as={Link} cx={[styles.navlink]} {...props} />
}

export function NavButtonLink({ ...props }) {
  return <Base as="button" cx={[styles.navButtonlink]} {...props} />
}

export function Button({ variant = "primary", ...props }) {
  // @ts-expect-error TS(7053): Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
  return <Base as={Link} cx={[styles.buttons[variant]]} {...props} />
}

export function ButtonList({ links = [], reversed = false, ...props }) {
  const getVariant = (i: any) => {
    if (reversed) {
      return i === 0 ? "reversed" : "linkReversed"
    }
    return i === 0 ? "primary" : "link"
  }
  return (
    <FlexList marginY={4} {...props}>
      {links &&
        links.map((link, i) => (
          <li key={(link as any).id}>
            <Button href={(link as any).href} variant={getVariant(i)}>
              {(link as any).text}
            </Button>
          </li>
        ))}
    </FlexList>
  )
}

export function CTALink(props: any) {
  return <Base as={Link} cx={[styles.ctaLink]} {...props} />
}

export function LinkList({ links = [], ...props }) {
  return (
    <FlexList {...props}>
      {links &&
        links.map((link, i) => (
          <li key={(link as any).id}>
            <CTALink href={(link as any).href}>{(link as any).text}</CTALink>
          </li>
        ))}
    </FlexList>
  )
}

export function Blockquote(props: any) {
  return <Base as="blockquote" cx={[styles.blockquote]} {...props} />
}

export function Avatar({ alt, image }: any) {
  return (
    // @ts-expect-error TS(2322): Type 'IGatsbyImageData | undefined' is not assigna... Remove this comment to see the full error message
    <GatsbyImage alt={alt} image={getImage(image)} className={styles.avatar} />
  )
}

export function Logo({ alt, image, size = "small" }: any) {
  return (
    <GatsbyImage
      alt={alt}
      // @ts-expect-error TS(2322): Type 'IGatsbyImageData | undefined' is not assigna... Remove this comment to see the full error message
      image={getImage(image)}
      // @ts-expect-error TS(7053): Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
      className={styles.logos[size]}
    />
  )
}

export function Icon({ alt, image, size = "medium" }: any) {
  return (
    <GatsbyImage
      alt={alt}
      // @ts-expect-error TS(2322): Type 'IGatsbyImageData | undefined' is not assigna... Remove this comment to see the full error message
      image={getImage(image)}
      // @ts-expect-error TS(7053): Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
      className={styles.icons[size]}
    />
  )
}

export function IconLink(props: any) {
  return <NavLink cx={[styles.iconLink]} {...props} />
}

export function InteractiveIcon(props: any) {
  return <Base as="button" cx={[styles.interactiveIcon]} {...props} />
}

export function VisuallyHidden(props: any) {
  return <Base as="span" cx={[styles.visuallyHidden]} {...props} />
}

export function BlockLink(props: any) {
  return <Link className={styles.blockLink} {...props} />
}
