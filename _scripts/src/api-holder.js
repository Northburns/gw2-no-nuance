import client from 'gw2api-client';
import cacheMemory from 'gw2api-client/src/cache/memory.js';
import cacheBrowserStorage from 'gw2api-client/src/cache/browser.js';

function createClient(key) {
    const c = client();
    c.schema("2024-07-20T01:00:00.000Z");
    c.language("en");
    if(key) c.authenticate(key);
    c.cacheStorage([
        cacheMemory({ gcTick: 5 * 60 * 1000 }),
        cacheBrowserStorage({
            storageKey: `gw2api-cache_${key}`,
            gcTick: 3 * 60 * 1000
        })
    ]);
    return c;
}

class Player {
    api;
    constructor(name, emoji, iconUrl, key) {
        this.name = name;
        this.emoji = emoji;
        this.iconUrl = iconUrl;
        this.key = key;
        
        if(!name) throw "Please name the players";
        if(!emoji) throw `${name} needs emoji`;
        if(!key) throw `${name} needs key`;

        this.api = createClient(key);
    }
}

function getApiHolder() {
    if(!window.apiHolder) {
        const players = readPlayers();
        window.apiHolder = {
            players: players,
            api: createClient(null)
        };
    }
    return window.apiHolder;
}

function readPlayers() {
    console.log("todo readplayers");
    var players = [];
    try {
        for(var p of JSON.parse(localStorage.getItem("gw2-no-nuance-players"))) {
            players.push(new Player(p.name, p.emoji, p.iconUrl, p.key));
        }
    } catch(e) {
        alert(e);
    }
    console.log(players);
    return players;
}

function writePlayers(players) {
    console.log("saveplayers todo");
    console.log(players);
    localStorage.setItem("gw2-no-nuance-players", JSON.stringify(players));
}

function apiHolderSetupHtml(elementId) {
    const element = document.getElementById(elementId);
    element.innerHTML = "";

    const table = document.createElement("table");
    element.appendChild(table);

    //const theader = document.createElement("theader");
    const theaderRow =  table.appendChild(document.createElement("tr"));
    theaderRow.appendChild(document.createElement("th")).innerText = "Player name";
    theaderRow.appendChild(document.createElement("th")).innerText = "Emoji";
    theaderRow.appendChild(document.createElement("th")).innerText = "Icon URL";
    theaderRow.appendChild(document.createElement("th")).innerText = "API Key";
    theaderRow.appendChild(document.createElement("th")).innerText = "";
    //table.appendChild(theader);

    const tbody = document.createElement("tbody");
    table.appendChild(tbody);

    const buttonAdd = document.createElement("button");
    buttonAdd.innerText = "Add row";
    const buttonSave= document.createElement("button");
    buttonSave.innerText = "Save";

    element.appendChild(buttonAdd);
    element.appendChild(buttonSave);

    const addRow = function(player) {
        const row = table.appendChild(document.createElement("tr"));
        console.log("Creating row for player:");
        console.log(player);
        row.appendChild(document.createElement("td")).appendChild(document.createElement("input")).value = player?.name    ?? "";
        row.appendChild(document.createElement("td")).appendChild(document.createElement("input")).value = player?.emoji   ?? "";
        row.appendChild(document.createElement("td")).appendChild(document.createElement("input")).value = player?.iconUrl ?? "";
        row.appendChild(document.createElement("td")).appendChild(document.createElement("input")).value = player?.key     ?? "";
        const del = row.appendChild(document.createElement("td")).appendChild(document.createElement("button"));
        del.innerText = "❌"
        del.onclick = () => { row.remove(); };
    }

    for(var player of readPlayers()) {
        addRow(player);
    }

    buttonAdd.onclick = () => { addRow(null); };
    buttonSave.onclick = () => {
        const players = [];
        for(var i in table.rows) {
            if(i==0) continue;
            const tr = table.rows[i];
            if(tr.localName!="tr") continue;
            const i0 = tr.cells[0].children[0].value
            const i1 = tr.cells[1].children[0].value
            const i2 = tr.cells[2].children[0].value
            const i3 = tr.cells[3].children[0].value
            players.push(new Player(i0,i1,i2,i3));
        }
        writePlayers(players);
    };
}

export default {
    getApiHolder: getApiHolder,
    apiHolderSetupHtml: apiHolderSetupHtml
}