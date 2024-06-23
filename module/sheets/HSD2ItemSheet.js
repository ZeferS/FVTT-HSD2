export default class HSD2ItemSheet extends ItemSheet
{
    static get defaultOptions()
    {
        return foundry.utils.mergeObject(super.defaultOptions, { classes: ['hsd2', 'sheet', 'weapon'], width: 520, height: 480, tabs: [{ navSelector: '.sheet-tabs', contentSelector: '.sheet-body', initial: 'description', },],});
    }

    get template()
    {
        const path = `systems/hsd2/templates/sheets`;

        return `${ path }/${this.item.type}-sheet.html`;
    }
}