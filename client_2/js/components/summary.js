import React from 'react';

import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

const Summary = ({data}) => (

    <BootstrapTable
        data={data}
        condensed={true}
        defaultSortName="port"
defaultSortOrder="asc"
        bordered={false}
        tableStyle={{border: 0, margin: 0}}
    >

        <TableHeaderColumn dataSort={true}
                           isKey={true}
                           dataField="port">
            Port
        </TableHeaderColumn>
        <TableHeaderColumn dataSort={true}
                           dataField="units">
            Units
        </TableHeaderColumn>
        <TableHeaderColumn dataSort={true}
                           dataField="teu">
            TEU
        </TableHeaderColumn>
        <TableHeaderColumn dataSort={true}
                           dataField="weight">Total Weight
        </TableHeaderColumn>
        <TableHeaderColumn dataSort={true}
                           dataField="rf">
            RF
        </TableHeaderColumn><TableHeaderColumn dataSort={true}
                                               dataField="dry">
        DRY
    </TableHeaderColumn>
        <TableHeaderColumn dataSort={true}
                           dataField="class">
            Class
        </TableHeaderColumn>
        <TableHeaderColumn dataSort={true}
                           dataField="vgmUnits">
            VGM
        </TableHeaderColumn>
        <TableHeaderColumn dataSort={true}
                           dataField="full">
            Full
        </TableHeaderColumn>
        <TableHeaderColumn dataSort={true}
                           dataField="mt">
            MT
        </TableHeaderColumn>
        <TableHeaderColumn dataSort={true}
                           dataField="forty">
            40'
        </TableHeaderColumn>
        <TableHeaderColumn dataSort={true}
                           dataField="fortyWeight">
            40' weight
        </TableHeaderColumn>
        <TableHeaderColumn dataSort={true}
                           dataField="twenty">
            20'
        </TableHeaderColumn>
        <TableHeaderColumn dataSort={true}
                           dataField="twentyWeight">
            20' weight
        </TableHeaderColumn>
        <TableHeaderColumn dataSort={true}
                           dataField="bbUnits">
            BB Units
        </TableHeaderColumn>
        <TableHeaderColumn dataSort={true}
                           dataField="bbWeight">
            BB weight
        </TableHeaderColumn>
    </BootstrapTable>
);

export default Summary;