import React from 'react';
import { Layout, Row, Col, Grid } from 'antd';
import Link from './Link';
import { helpUrls } from './HelpUrls';
const { Footer } = Layout;
const { useBreakpoint } = Grid;

const footerElements = [
  {
    description: 'New Internet Media',
    link: helpUrls.developerResources,
  },
  { description: 'CopyrightCoins (Waves)', link: helpUrls.discord },
  { description: 'Facebook', link: helpUrls.telegram },
  { description: 'Twitter', link: helpUrls.github },
  { description: 'NIM Nordic', link: helpUrls.projectSerum },
  { description: 'CopyrightCoins swap (ERC-20)', link: helpUrls.solanaBeach },
];

export const CustomFooter = () => {
  const smallScreen = !useBreakpoint().lg;

  return (
    <Footer
      style={{
        height: '45px',
        paddingBottom: 10,
        paddingTop: 10,
      }}
    >
      <Row align="middle" gutter={[16, 4]}>
        {!smallScreen && (
          <>
            <Col flex="auto" />
            {footerElements.map((elem, index) => {
              return (
                <Col key={index + ''}>
                  <Link external to={elem.link}>
                    {elem.description}
                  </Link>
                </Col>
              );
            })}
          </>
        )}
        <Col flex="auto">{/*  <DexProgramSelector />*/}</Col>
      </Row>
    </Footer>
  );
};
