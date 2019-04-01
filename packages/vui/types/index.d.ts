import './core/style/color.scss';
import './core/style/elevation.scss';
import './core/style/space.scss';
import './core/style/shape.scss';
import './core/style/theme.scss';
import './core/style/mode.scss';
import './core/style/utils.scss';
import { Component, PluginFunction } from 'vue';
import * as constant from './core/constant';
import './icon/presets';
export declare type ComponentOrPack = Component & {
    $_megmore_subcomponents?: Record<string, ComponentOrPack>;
};
export interface MegmoreUseOptions {
    components?: Record<string, ComponentOrPack>;
}
export interface MegmorePlugin {
    install: PluginFunction<MegmoreUseOptions>;
    version: string;
    constant: typeof constant;
}
declare const Megmore: MegmorePlugin;
export default Megmore;
export * from './entries';
