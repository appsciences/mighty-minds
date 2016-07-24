import _ from 'lodash';

function objToArr(obj){

    return _.transform(
        obj,
        (result, value, key) =>
            result.push(Object.assign({port:key}, value)), []);

}

const summarize = (data) =>

    //group by dischPort, compute totals on each port, transform back into an array
    _.transform(
        _.mapValues(
            _.groupBy(data, 'dischPort'),
            portContainers => {

                const qualifierTotals = _.countBy(portContainers, 'equipmentQualifier');
                const sizeTotals = _.countBy(portContainers, 'containerSize');
                const categoryTotals = _.countBy(portContainers, 'equipmentTypeCategory');

                return ({
                    units: portContainers.length,
                    teu: _.sumBy(
                        portContainers,
                        c => ({'40': 2, '20': 1}[c.containerSize])
                    ),
                    weight:_.sumBy(portContainers,c => parseInt(c.weight)),
                    rf:categoryTotals.RF || 0,
                    dry:categoryTotals.DRY || 0,
                    'class':0,
                    full:_.countBy(portContainers, 'containerFull').Full || 0,
                    mt:0,
                    forty:sizeTotals['40'],
                    fortyWeight:_.sumBy(portContainers, c => c.containerSize == '40' && parseInt(c.weight)),
                    twenty:sizeTotals['20'],
                    twentyWeight:_.sumBy(portContainers, c => c.containerSize == '20' && parseInt(c.weight)),
                    bbUnits:qualifierTotals.BB || 0,
                    bbWeight: _.sumBy(portContainers, c => c.equipmentQualifier == 'BB' && parseInt(c.weight)),
                    vgmUnits: _.countBy(portContainers, 'measurementAppQualifier').VGM || 0

                })
            }
        ),
        (result, value, key) =>
            result.push(Object.assign({port:key}, value)), []
    )





export {summarize,  objToArr};