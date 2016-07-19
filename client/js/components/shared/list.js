import _ from 'lodash';
import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';

function section(header, body,headerWidth, bodyWidth, stripe) {
    return (
        <Row  style={{bgColor: stripe ? '#f5f5f5' : '#ffffff' }}>
            <Col lg={headerWidth}>
                {header}:
            </Col>
            <Col lg={bodyWidth}>
                {body}
            </Col>
        </Row>);
}

const List = ({values, headerWidth, bodyWidth, showBlank, striped}) => {
    //for striping
    var i=0;

    return (
        <Grid>
        {_.map(
            values,
            (val, header) =>
                (val || showBlank) &&
                section(
                    header,
                    val,
                    headerWidth,
                    bodyWidth, striped && (i++ % 2)))}
        </Grid>
    );
};

export default List;

