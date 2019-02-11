import styled, { injectGlobal } from 'vue-styled-components'
import { genColor, genFontColor, genElevation, genSize } from '../core/util'

injectGlobal`
	.m-app-bar {
	  // selection
    --m-app-bar-size-xs: 2.5rem;
    --m-app-bar-size-sm: 3.5rem;
    --m-app-bar-size-md: 4.5rem;
    --m-app-bar-size-lg: 5.5rem;
    --m-app-bar-size-xl: 6.5rem;

    // default
    --m-app-bar-color: var(--m-color-primary);
    --m-app-bar-font-color: var(--m-bg-color);
    --m-app-bar-elevation: var(--m-elevation-2);
    --m-app-bar-size: var(--m-app-bar-size-md);
    --m-app-bar-position: relative;
    
    box-shadow: var(--m-app-bar-elevation);
    padding: 0 var(--m-space-sm);
    color: var(--m-app-bar-font-color);
    background-color: var(--m-app-bar-color);
    height: var(--m-app-bar-size);
    
	  width: 100%;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    transition: all ease .3s;
    
    &[variety="flat"] {
      color: var(--m-app-bar-color);
      background-color: var(--m-bg-color);
    }
	}
`

export default styled.div`
  ${props => genColor('m-app-bar', props.color)}
  ${props => genFontColor('m-app-bar', props.fontColor)}
  ${props => genElevation('m-app-bar',props.elevation)}
  ${props => genSize('m-app-bar', props.size)}
`
