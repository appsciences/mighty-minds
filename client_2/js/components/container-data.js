import React from 'react';

import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

const yesNoFormatter = (yesValue) => (cell, row) => cell === yesValue ? 'Yes' : 'No';

const ContainerData = ({data, onSelect}) => (

    <BootstrapTable
        tableStyle={{border:0, margin:0}}
        fill
        data={data}
        bordered={false}
        pagination={true}
        selectRow={{
            mode:'radio',
            clickToSelect: true,
            bgColor: '#f5f5f5',
            onSelect: onSelect}}
        condensed={true}>
        <TableHeaderColumn filter={{type: "TextFilter", placeholder: ""}} dataSort={true}
                           dataField="dischPort" >
            Disch Port
        </TableHeaderColumn>
        <TableHeaderColumn filter={{type: "TextFilter", placeholder: ""}} dataSort={true}
                           dataField="bay">
            Bay
        </TableHeaderColumn>
        <TableHeaderColumn filter={{type: "TextFilter", placeholder: ""}} dataSort={true}
                           dataField="slot" >
            Slot
        </TableHeaderColumn>
        <TableHeaderColumn
            filter={{type: "TextFilter", placeholder: ""}}
            dataSort={true}
            dataField="containerId"
            width={125}
            isKey={true}>Container ID
        </TableHeaderColumn>
        <TableHeaderColumn filter={{type: "TextFilter", placeholder: ""}} dataSort={true}
                           dataField="containerSize">
            Size
        </TableHeaderColumn>
        <TableHeaderColumn filter={{type: "TextFilter", placeholder: ""}} dataSort={true}
                           dataField="weight">
            Weight
        </TableHeaderColumn>
        <TableHeaderColumn filter={{type: "TextFilter", placeholder: ""}} dataSort={true}
                           dataField="containerType" >
            Type
        </TableHeaderColumn>
        <TableHeaderColumn filter={{type: "TextFilter", placeholder: ""}} dataSort={true}
                           dataField="class" >
            Class
        </TableHeaderColumn>
        <TableHeaderColumn filter={{type: "TextFilter", placeholder: ""}} dataSort={true}
                           dataField="class"
                           dataFormat={yesNoFormatter('VGM')}>
            VGM
        </TableHeaderColumn>
        <TableHeaderColumn filter={{type: "TextFilter", placeholder: ""}} dataSort={true}
                           dataField="temp" >
            Setting
        </TableHeaderColumn>
        <TableHeaderColumn filter={{type: "TextFilter", placeholder: ""}} dataSort={true}
                           dataField="containerHeight" >
            Height
        </TableHeaderColumn>
        <TableHeaderColumn filter={{type: "TextFilter", placeholder: ""}} dataSort={true}
                           dataField="containerFull" >
            Full
        </TableHeaderColumn>
        <TableHeaderColumn filter={{type: "TextFilter", placeholder: ""}} dataSort={true}
                           dataField="loadPort" >
            Load Port
        </TableHeaderColumn>
        <TableHeaderColumn filter={{type: "TextFilter", placeholder: ""}} dataSort={true}
                           dataField="optionalPort" >
            Optional Cargo
        </TableHeaderColumn>
        <TableHeaderColumn filter={{type: "TextFilter", placeholder: ""}} dataSort={true}
                           dataField="carrier" >
            Carrier
        </TableHeaderColumn>
        <TableHeaderColumn filter={{type: "TextFilter", placeholder: ""}} dataSort={true}
                           dataField="delPort" >
            Del Port
        </TableHeaderColumn>

    </BootstrapTable>
);

export default ContainerData;