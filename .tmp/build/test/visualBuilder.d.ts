/// <reference types="jquery" />
import { VisualBuilderBase } from "powerbi-visuals-utils-testutils";
import { BarChart as VisualClass } from "../src/barChart";
import powerbi from "powerbi-visuals-api";
import VisualConstructorOptions = powerbi.extensibility.visual.VisualConstructorOptions;
export declare class BarChartBuilder extends VisualBuilderBase<VisualClass> {
    constructor(width: number, height: number);
    protected build(options: VisualConstructorOptions): VisualClass;
    get mainElement(): JQuery<HTMLElement>;
}
