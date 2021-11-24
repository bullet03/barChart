import powerbi from "powerbi-visuals-api";
import DataView = powerbi.DataView;
import { testDataViewBuilder } from "powerbi-visuals-utils-testutils";
import TestDataViewBuilder = testDataViewBuilder.TestDataViewBuilder;
export declare class SampleBarChartDataBuilder extends TestDataViewBuilder {
    static ColumnCategory: string;
    static MeasureColumn: string;
    valuesCategory: string[];
    valuesMeasure: number[];
    getDataView(columnNames?: string[]): DataView;
}
