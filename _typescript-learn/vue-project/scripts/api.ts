import GW2Client from 'gw2api-client';
import BrowserCache from 'gw2api-client/src/cache/browser.js';

import fs from 'fs';
import path from 'path';

/*
   This is fine for now.
   The storageKey is basically the api-key.
   So we end up with  ONE HUGE FILE for each api key.
   This is fine fow now.
   If we want to do anything with the cache files, we can parse the item key from the _storage variable.
   Its format is `$cachedApiEndpoint:id:lang` (or ``$cachedApiEndpoint:ids` for "all ids" call), 
   so we could totally split it up in the saving function,
   and parse back up into a huge map in loading function.
   But for now, this is fine.
 */

class CustomStorageEngine {

    constructor(cacheDir: string) {
        this.cacheDir = cacheDir;
        // fs.mkdirSync(config.dir, { recursive: true });
        
    }

    private keyToFile(key: string) {
        //console.log(key);
        return `${this.cacheDir}/${key}.json`;
    }

    async set(storageKey: string, _storage) {
        const file = this.keyToFile(storageKey);
        const data = JSON.stringify(_storage, null, 2);
        console.log(`Writing cache file: ${file}`);
        try {
            fs.mkdirSync(path.dirname(file), { recursive: true });
            fs.writeFileSync(file, data);
        } catch (exception) {
            console.error(exception);
        }
    }

    async get(storageKey: string) {
        const file = this.keyToFile(storageKey);
        if (!fs.existsSync(file)) { return null; }
        return JSON.parse(fs.readFileSync(file));
    }

    async delete(storageKey: string) {
        const file = this.keyToFile(storageKey);
        console.log(`TODO delete file ${file}`);
    }
}

export function createClient(cacheDir: string, apiKey?: string): GW2Client {
    const cache = BrowserCache({
        storageKey: `gw2api-cache_${apiKey}`,
        gcTick: 5 * 60 * 1000,
        persistDebounce: 3 * 1000,
        storageEngine: new CustomStorageEngine(cacheDir),
    });

    const api = new GW2Client();

    api.cacheStorage([ cache ]);

    return api;
}
