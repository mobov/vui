import './core/common/color.scss';
import './core/common/elevation.scss';
import './core/common/space.scss';
import './core/common/shape.scss';
import './core/common/theme.scss';
import './core/common/mode.scss';
import './core/common/flex.scss';
import './core/common/utils.scss';
import './icon/presets';
import { Megmore as MegmorePlugin, MegmoreUseOptions } from './types';
import { Component, PluginFunction } from "vue";
export declare type ComponentOrPack = Component & {
    $_megmore_subcomponents?: Record<string, ComponentOrPack>;
};
export interface MegmoreUseOptions {
    components?: Record<string, ComponentOrPack>;
}
export interface MegmorePlugin {
    install: PluginFunction<MegmoreUseOptions>;
    version: string;
    constant: {
        COLORS: any;
        BREAKPOINTS: any;
    };
}
declare const Megmore: MegmorePlugin;
export default Megmore;
export * from './entries';
