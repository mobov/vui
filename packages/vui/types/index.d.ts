import './core/style/color.scss';
import './core/style/elevation.scss';
import './core/style/space.scss';
import './core/style/shape.scss';
import './core/style/theme.scss';
import './core/style/mode.scss';
import './core/style/border.scss';
import './core/style/utils.scss';
import { Component, PluginFunction } from 'vue';
import * as constant from './core/constant';
import './icon/presets';
export declare type ComponentOrPack = Component & {
    $_mobov_subcomponents?: Record<string, ComponentOrPack>;
};
export interface MobovUseOptions {
    components?: Record<string, ComponentOrPack>;
    directives?: Record<string, ComponentOrPack>;
}
export interface MobovPlugin {
    install: PluginFunction<MobovUseOptions>;
    version: string;
    constant: typeof constant;
}
export interface MobovObject {
    install?: (V: any) => void;
    name: string;
    functional?: true;
    props?: any;
    data?: any;
    computed?: any;
    methods?: object;
    $slots?: any;
    classes?: any;
    styles?: any;
}
declare const Mobov: MobovPlugin;
export default Mobov;
export * from './components';
