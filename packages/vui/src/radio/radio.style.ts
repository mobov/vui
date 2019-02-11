import styled, { injectGlobal } from 'vue-styled-components'
import { genColor, genFontColor, genSize } from '../core/util'

injectGlobal`
	.m-radio {
    // selection
    --m-radio-size-xs: 1rem;
    --m-radio-size-sm: 1.5rem;
    --m-radio-size-md: 2rem;
    --m-radio-size-lg: 2.5rem;
    --m-radio-size-xl: 3rem;
    --m-radio-wrapper-size-xs: 2rem;
    --m-radio-wrapper-size-sm: 3rem;
    --m-radio-wrapper-size-md: 4rem;
    --m-radio-wrapper-size-lg: 5rem;
    --m-radio-wrapper-size-xl: 6rem;

    // default
    --m-radio-color: var(--m-color-primary);
    --m-radio-font-color: var(--m-font-color);

    --m-radio-size: var(--m-radio-size-md);
    --m-radio-wrapper-size: var(--m-radio-wrapper-size-md);
    
    color: var(--m-radio-font-color);
    height: var(--m-radio-color);
    line-height: 1;
    font-size: calc(var(--m-radio-size) / 1.4);
    cursor: pointer;
    position: relative;
    display: inline-flex;
    justify-content: flex-start;
    align-items: center;
    -webkit-font-smoothing: antialiased;
    
    &[disabled] {
        opacity: .5;
    }
    &[checked] {
        color: var(--m-radio-color);
    }

    &__checked-icon,
    &__uncheck-icon,
    &__radio {
        height: var(--m-radio-size);
        width: var(--m-radio-size);
    }

    &__radio {
        position: relative;
    }

    &__checked-icon {
        position: absolute;
        left: 0;
        top:0;
    }

    &__radio-wrapper {
        position: absolute;
        left: calc(var(--m-radio-size) / 2 - var(--m-radio-wrapper-size) / 2);
        top: calc(var(--m-radio-size) / 2 - var(--m-radio-wrapper-size) / 2);
        height: var(--m-radio-wrapper-size);
        width: var(--m-radio-wrapper-size);
        border-radius: 50%;
    }

    &__label {
        color: transparent;
    }
	}
`
export default styled.div`
  ${props => genColor('m-radio', props.color)}
  ${props => genFontColor('m-radio', props.fontColor)}
  ${props => genSize('m-radio', props.size)}
`
