import Vue from 'vue'

/** ElementUI component common definition */
export declare class MobovUIComponent extends Vue {
  name: string
  /** Install component into Vue */
  static install (vue: typeof Vue): void
}

export type MobovUIComponentSize = 'sm' | 'md' | 'lg'

export type MobovUIComponentAlignment = 'left' | 'center' | 'right'
