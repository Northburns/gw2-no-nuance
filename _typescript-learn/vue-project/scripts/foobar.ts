// import client from "gw2api-client";
import { createClient } from "./api.ts";
import pressAnyKey from 'press-any-key';

const api = createClient("cache", null);

// OK! Eli ny asiat jotka mä haluan koodaa tähän:
// 1) kaikki keinot joilla voi tehdä ectoplasmaa
// 2) craftaaminen jolla tehdä voittoa
// 3) se mun TP long-term voitto juttu

// Ectoplasm crafting:
// Salvage where all are true: a) armor/weapon/trinket, b) level 68+, c) rare/exotic

const ectoplasmId = 19721;

const recipes = await api.recipes().many( await api.recipes().ids() );
console.log(`Recipe count: ${recipes.length}`);
const itemIds = [...new Set(recipes.flatMap(recipe=> {
    const ids = recipe.ingredients.map(ingredient=>ingredient.item_id).filter(it=>it!=null);
    ids.push(recipe.output_item_id);
    return ids;
}))];
console.log(`Item id count: ${itemIds.length}`);
const items = (await api.items().many(itemIds)).reduce((map, obj)=>{
    map.set(obj.id, obj);
    return map;
}, new Map());
console.log(`Items count: ${items.size}`);

const ectoplasmRecipes = (await Promise.all(
    recipes.map(async (recipe: any) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const outputItem = await api.items().get(recipe.output_item_id).catch(err=>undefined);
        if(!outputItem) return;
        if(!outputItem.level) return;
        if(outputItem.level < 68) return;
        if(!["Armor", "Weapon", "Trinket"].includes(outputItem.type)) return;
        if(!["Rare", "Exotic"].includes(outputItem.rarity)) return;

        console.log("WAU!");
        console.log(outputItem);

        return { recipe, outputItem };
    })
)).filter((data: any)=>data);

console.log(`Ecto recipes: ${ectoplasmRecipes.length}`)

await pressAnyKey();
process.exit(0);
// The client library's cache writing happens async'ly in a way that if we eagerly exit, we'll lose data.
