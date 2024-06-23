import { HSD2ItemSheet } from "./sheets/HSD2ItemSheet.js"

Hooks.once('init', function ()
{
    console.log("hsd2 | Booting up");

    game.hsd2 =
    {
        HSD2Item,
    };

    CONFIG.Item.documentClass = HSD2Item;

    Items.unregisterSheet('core', ItemSheet);
    Items.registerSheet('hsd2', HSD2ItemSheet, { makeDefault: true, label: 'hsd2.SheetLabels.Weapon',});
});