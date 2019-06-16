/* eslint-disable max-len */

import {
  VueConstructor,
  ComponentOptions,
  FunctionalComponentOptions,
  VNodeData, PluginFunction, DirectiveFunction, DirectiveOptions
} from 'vue'
import { CombinedVueInstance, Vue } from 'vue/types/vue'
import {
  RecordPropsDefinition,
  ThisTypedComponentOptionsWithArrayProps,
  ThisTypedComponentOptionsWithRecordProps
} from 'vue/types/options'
// import { TouchStoredHandlers } from './directives/touch'

import { MobovPlugin as Mobov }  from '.'
import { VueClass } from 'vue-class-component/lib/declarations'

declare function mixins<A, B, C, D, E, F>(CtorA: VueClass<A>, CtorB: VueClass<B>, CtorC: VueClass<C>, CtorD: VueClass<D>, CtorE: VueClass<E>, CtorF: VueClass<F>): VueClass<A & B & C & D & E & F>;

declare global {
  interface Window {
    Vue: VueConstructor
    Mobov: Mobov,
    attachEvent(event: string, listener: EventListener): boolean
    detachEvent(event: string, listener: EventListener): void
  }

  interface HTMLCollection {
    [Symbol.iterator] (): IterableIterator<Element>
  }

  interface Element {
    getElementsByClassName(classNames: string): NodeListOf<HTMLElement>
  }

  interface HTMLElement {
    _clickOutside?: EventListenerOrEventListenerObject
    _onResize?: {
      callback: () => void
      options?: boolean | AddEventListenerOptions
    }
    _onScroll?: {
      callback: EventListenerOrEventListenerObject
      options: boolean | AddEventListenerOptions
      target: EventTarget
    }
    attachEvent(event: string, listener: EventListener): boolean
    detachEvent(event: string, listener: EventListener): void
    // _touchHandlers?: {
    //   [_uid: number]: TouchStoredHandlers
    // }
  }

  interface Date {
    isLeapYear(): boolean

    maxDayOfMonth(): number

    firstWeekDay(): number

    getZeroize(type: string): string
  }

  interface Number {
    dateZeroize(): string
  }

  function parseInt(s: string | number, radix?: number): number
  function parseFloat(string: string | number): number

}
