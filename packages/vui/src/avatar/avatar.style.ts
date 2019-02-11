import styled, { injectGlobal } from 'vue-styled-components'
import { genColor, genFontColor, genElevation, genSize } from '../core/util'

injectGlobal`
	.m-avatar {
    // selection
    --m-avatar-size-xs: 1.5rem;
    --m-avatar-size-sm: 2.5rem;
    --m-avatar-size-md: 3.5rem;
    --m-avatar-size-lg: 4.5rem;
    --m-avatar-size-xl: 5.5rem;
    // default
    --m-avatar-color: var(--m-color-primary);
    --m-avatar-font-color: var(--m-bg-color);
    --m-avatar-elevation: var(--m-elevation-0);
    --m-avatar-size: var(--m-avatar-size-md);
    
    box-shadow: var(--m-avatar-elevation);
    background-color: var(--m-avatar-color);
    color: var(--m-avatar-font-color);
    width: var(--m-avatar-size);
    height: var(--m-avatar-size);
    font-size: var(--m-avatar-font-size);
    
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    cursor: pointer;
    position: relative;
    //transition: all ease .3s;
    // variety
    &[variety="outline"] {
      background-color: var(--m-bg-color);
      border-color: var(--m-avatar-color);
      color: var(--m-avatar-color);
      border-width: .2rem;
      border-style: solid;
    }
    // status
    &[status="success"] {
      opacity: 1;
    }
    &[status="pending"],
    &[status="failure"] {
      opacity: 0;
    }
	}
`

export default styled.div`
  ${props => genColor('m-avatar', props.color)}
  ${props => genFontColor('m-avatar', props.fontColor)}
  ${props => genElevation('m-avatar',props.elevation)}
  ${props => genSize('m-avatar', props.size)}
`
