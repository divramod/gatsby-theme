/** @jsx jsx */
import React                              from "react";
import { graphql, useStaticQuery, Link }  from "gatsby";
import { jsx, Box, Container }            from "theme-ui";

export type HeaderProps = {
  // empty
};

export const Header: React.FC<HeaderProps> = (props) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          links {
            label
            path
          }
        }
      }
    }
  `);

  const links = data.site.siteMetadata.links.map((link: any) =>
      `<a key="${link.label}" href="${link.path}">${link.label}</a>`
  ).join(' | ')

  return (
    <header>
      <Box bg="primary" color="background" paddingY={2}>
        <Container>
          <div dangerouslySetInnerHTML={ { __html: `<a key="title" href="/">${data.site.siteMetadata.title}</a> ${links}` }}></div>
        </Container>
      </Box>
    </header>
  );
};
export default Header;
