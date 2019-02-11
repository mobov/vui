import { injectGlobal } from 'vue-styled-components'

injectGlobal`
  :root {
    --m-font-base: 62.5%;
    
    // theme mode variables
    --m-color-primary: var(--m-color-deeppurple-700);
    --m-color-danger: var(--m-color-red-A400);
    --m-color-success: var(--m-color-green-500);
    --m-color-warning: var(--m-color-orange-A700);
    --m-color-default: var(--m-font-color);
	}
`

export const register = function () {

}


