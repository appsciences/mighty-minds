import React from 'react';
import List from './shared/list'

const TypeSummary = ({data}) => {

    const categoryTotals = _.countBy(data, 'equipmentTypeCategory');

    const qualifierTotals = _.countBy(data, 'equipmentQualifier');


    const qualifierResults = {
            'CN':qualifierTotals.CN || 0,
            'BB':qualifierTotals.BB || 0,
            'TE':qualifierTotals.TE  || 0,
            'ZZZ':qualifierTotals.ZZZ  || 0,
            'Error': data.length -
                (qualifierTotals.CN || 0) -
                (qualifierTotals.BB) || 0-
                (qualifierTotals.TE  || 0) -
              (qualifierTotals.ZZZ || 0)
    };

    const categoryResults = {
        'RF':categoryTotals.RF || 0,
        'DRY':categoryTotals.DRY || 0,
        'Error': data.length -
        (categoryTotals.RF || 0)-
        (categoryTotals.DRY || 0)
    };

    return (
        <div>
            <p>Total Rows Processed: {data.length}</p>

            <List values={qualifierResults} headerWidth={1} bodyWidth={1} showBlank={true} striped/>

            <p>Total by Type: {data.length}</p>

            <List values={categoryResults} headerWidth={1} bodyWidth={1} showBlank={true} striped/>

            <p>Total by Category: {data.length}</p>

        </div>
    );
};

export default TypeSummary;

