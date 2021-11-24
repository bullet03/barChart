import { BarChart } from "../../src/barChart";
import powerbiVisualsApi from "powerbi-visuals-api";
import IVisualPlugin = powerbiVisualsApi.visuals.plugins.IVisualPlugin;
import VisualConstructorOptions = powerbiVisualsApi.extensibility.visual.VisualConstructorOptions;
import DialogConstructorOptions = powerbiVisualsApi.extensibility.visual.DialogConstructorOptions;
var powerbiKey: any = "powerbi";
var powerbi: any = window[powerbiKey];
var barChart4BD1459AB66343C18D27AB1D0D4317DF: IVisualPlugin = {
    name: 'barChart4BD1459AB66343C18D27AB1D0D4317DF',
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
    powerbi.visuals.plugins["barChart4BD1459AB66343C18D27AB1D0D4317DF"] = barChart4BD1459AB66343C18D27AB1D0D4317DF;
}
export default barChart4BD1459AB66343C18D27AB1D0D4317DF;