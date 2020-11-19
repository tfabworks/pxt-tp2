
enum OutputNumberFormat {
    //% block="INTEGER"
    INTEGER = 0,
    //% block="FLOAT"
    FLOAT = 1
}

//% weight=70 icon="\uf2c9" color=#008000 block="TP2"
namespace TP2 {
    let TP2_init_done: boolean = false;

    /**
     * TFW-TP2の温度[℃]を返します。
     * @param format number format, eg: OutputNumberFormat.INTEGER
     */
    //% blockId = TP2_getTemperature
    //% block="Temperature[degC] (TP2) || %format"
    //% group="TP2"
    //% weight=100
    export function TP2_getTemperature(format: OutputNumberFormat = OutputNumberFormat.INTEGER): number {
        TP2_init_if_firsttime();
        if (format === OutputNumberFormat.INTEGER) {
            return Math.round(DS1820pxt.temp1dp());
        }
        return DS1820pxt.temp1dp();
    }

    function TP2_init_if_firsttime(): void {
        if (TP2_init_done == false) {
            DS1820pxt.init();
            TP2_init_done = true;
        }
    }
}