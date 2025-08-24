// https://datatables.net/manual/installation

import {Tabulator, HtmlTableImportModule, FilterModule, EditModule, FormatModule, ColumnCalcsModule, MutatorModule, GroupRowsModule} from 'tabulator-tables';
import apiHolder from './api-holder.js';

Tabulator.registerModule([HtmlTableImportModule, FilterModule, EditModule, FormatModule, ColumnCalcsModule, MutatorModule, GroupRowsModule]);

/**
 * 
 * @param tableElement 
 * @param columns See https://tabulator.info/docs/6.3/columns, TL;DR: array of objects, each should have "title" + "field"
 * @param tableData array of objects
 * @returns 
 */
function createTableFromData(
    tableElement,
    columns,
    tableData,
) {
    let table = new Tabulator(tableElement, {
        layout: "fitDataFill",
        columns: columns,
        data: tableData
    });

    return table;
}

/**
 * 
 * Creates a table from an HTML table element, and adds a column for each player.
 * The element MUST have an id column.
 * 
 * @param {*} tableElement 
 * @returns 
 */
function createTableWithPlayerColumns(
    tableElement,

) {
    let table = new Tabulator(tableElement, {
        layout: "fitDataFill",
    });

    table.on("tableBuilt", function(){
        // todo hide id column
        for(let player of apiHolder.getApiHolder().players) {
            table.addColumn({
                title: player.emoji,
                field: player.name,
                headerHozAlign: "center",
                hozAlign: "center",
                headerFilter:"input",
            });
            player.api.account().achievements().get().then((accountAchievements) => {
                let aa = accountAchievements.reduce((map,obj)=>{ map[obj.id] = obj; return map; });

                for(let r of table.getData()) {
                    let a = aa[r.id];
                    let d = {};

                    let txt = "-";
                    if(a?.done) txt = "✅"
                    else {
                        if(a?.max) txt = `${a?.current??0}/${a?.max}`;
                    }

                    d[player.name] = txt;
                    table.updateRow(r.id, d)
                }

            });
        }
    });

    return table;
}

function createDataTable(tableElement) {
    let table = new Tabulator(tableElement, {
        layout: "fitDataFill",
    });

    table.on("tableBuilt", function(){
        for(let player of apiHolder.getApiHolder().players) {
            table.addColumn({
                title: player.emoji,
                field: player.name,
                headerHozAlign: "center",
                hozAlign: "center",
                headerFilter:"input",
            });
            player.api.account().achievements().get().then((accountAchievements) => {
                let aa = accountAchievements.reduce((map,obj)=>{ map[obj.id] = obj; return map; });

                for(let r of table.getData()) {
                    let a = aa[r.id];
                    let d = {};

                    let txt = "-";
                    if(a?.done) txt = "✅"
                    else {
                        if(a?.max) txt = `${a?.current??0}/${a?.max}`;
                    }

                    d[player.name] = txt;
                    table.updateRow(r.id, d)
                }

            });
        }
    });

    return table;
}

export default {
    tabulator: Tabulator,
    createDataTable: createDataTable,
    createTableFromData: createTableFromData,
}
