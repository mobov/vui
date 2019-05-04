import { VueConstructor } from 'vue'
import { MobovPlugin as Mobov } from '@mobov/vui'
import { langType } from '@mobov/es-helper/types/langUtils'

export interface PropsPropertries {
  name: string,
  type: string,
  default: any,
  value: any
}

declare global {
  interface Window {
    Vue: VueConstructor
    Mobov: Mobov,
    ProjectConfig: {
      NODE_ENV: 'production' | 'development',
      SUPPORT_LANGUAGES: Array<langType>
    }
  }
}
