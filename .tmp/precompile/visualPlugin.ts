import { BarChart } from "../../src/barChart";
import powerbiVisualsApi from "powerbi-visuals-api";
import IVisualPlugin = powerbiVisualsApi.visuals.plugins.IVisualPlugin;
import VisualConstructorOptions = powerbiVisualsApi.extensibility.visual.VisualConstructorOptions;
import DialogConstructorOptions = powerbiVisualsApi.extensibility.visual.DialogConstructorOptions;
var powerbiKey: any = "powerbi";
var powerbi: any = window[powerbiKey];
var barChart22714BE94EB04D27972B0D83F6CB6FC7_DEBUG: IVisualPlugin = {
    name: 'barChart22714BE94EB04D27972B0D83F6CB6FC7_DEBUG',
    displayName: 'BarChart',
    class: 'BarChart',
    apiVersion: '3.8.0',
    create: (options: VisualConstructorOptions) => {
        if (BarChart) {
            return new BarChart(options);
        }
        throw 'Visual instance not found';
    },
    createModalDialog: (dialogId: string, options: DialogConstructorOptions, initialState: object) => {
        const dialogRegistry = globalThis.dialogRegistry;
        if (dialogId in dialogRegistry) {
            new dialogRegistry[dialogId](options, initialState);
        }
    },
    custom: true
};
if (typeof powerbi !== "undefined") {
    powerbi.visuals = powerbi.visuals || {};
    powerbi.visuals.plugins = powerbi.visuals.plugins || {};
    powerbi.visuals.plugins["barChart22714BE94EB04D27972B0D83F6CB6FC7_DEBUG"] = barChart22714BE94EB04D27972B0D83F6CB6FC7_DEBUG;
}
export default barChart22714BE94EB04D27972B0D83F6CB6FC7_DEBUG;