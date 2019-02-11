import styled, { injectGlobal } from 'vue-styled-components';
import { genColor, genFontColor, genElevation, genSize } from '../core/util';
injectGlobal `
	.m-button {
   // selection
    --m-button-size-xs: 2rem;
    --m-button-size-sm: 2.5rem;
    --m-button-size-md: 3rem;
    --m-button-size-lg: 3.5rem;
    --m-button-size-xl: 4rem;
  
    // default
    --m-button-color: var(--m-color-primary);
    --m-button-hover-color: var(--m-color-primary);
    --m-button-font-color: var(--m-bg-color);
    --m-button-elevation: var(--m-elevation-2);
    --m-button-shape: var(--m-shape-corner);
    --m-button-size: var(--m-button-size-md);
    --m-button-border-size: .2rem;
    
    outline: none;
    background-color: var(--m-button-color);
    color: var(--m-button-font-color);
    min-height: var(--m-button-size);
    height: var(--m-button-size);
    min-width: var(--m-button-size);
    //margin: .5em;
    border-radius: var(--m-button-shape);
    box-shadow: var(--m-button-elevation);
    border: none;
    padding: var(--m-button-border-size);
    display: inline-flex;
    align-items: center;
    justify-content: space-around;
    cursor: pointer;
    user-select: none;
    box-sizing: border-box;
    position: relative;
    line-height: 1;
    transition: all ease .3s;
    > * {
      vertical-align: middle;
    }
    // hover
    &:hover {
      background-color: var(--m-button-hover-color);
      border-color: var(--m-button-hover-color);
    }
    // variety
    &[variety="outline"] {
      background-color: var(--m-bg-color-main);
      color: var(--m-button-color);
      border: var(--m-button-border-size) solid var(--m-button-color);
      padding: 0;
      &:hover {
        color: var(--m-button-color);
      }
    }
    // variety
    &[variety="flat"] {
      background-color: var(--m-bg-color);
      color: var(--m-button-color);
    }
    // shape
    &[variety="circle"] {
      border-radius: var(--m-button-size);
    }
    &[variety="round"] {
      border-radius: var(--m-shape-round);
    }
    &[variety="square"] {
      border-radius: var(--m-shape-square);
    }
    // block
    &[block] {
      width: 100%;
      display: flex;
    }
	}
`;
export default styled.div `
  ${props => genColor('m-button', props.color)}
  ${props => genFontColor('m-button', props.fontColor)}
  ${props => genElevation('m-button', props.elevation)}
  ${props => genSize('m-button', props.size)}
`;
//# sourceMappingURL=button.style.js.map