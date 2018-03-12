import React from 'react'
import { P } from '../styled-components/Typography/headers';
import { Footer as StyledFooter } from '../styled-components/Divs';
import { Container, Row, Col } from 'reactstrap';

const Footer = () =>
  <StyledFooter>
    <Container>
      <Row>
        <Col sm={12}>
          <P invert>© 2017. <b>Populous World.</b> All Rights Reserved</P>
        </Col>
      </Row>
    </Container>
  </StyledFooter>;

export default Footer
