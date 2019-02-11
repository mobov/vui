import styled, { injectGlobal } from 'vue-styled-components'
import { genColor, genFontColor, genSize } from '../core/util'

injectGlobal`
	.m-checkbox {
    // selection
    --m-checkbox-size-xs: 1rem;
    --m-checkbox-size-sm: 1.5rem;
    --m-checkbox-size-md: 2rem;
    --m-checkbox-size-lg: 2.5rem;
    --m-checkbox-size-xl: 3rem;
    --m-checkbox-wrapper-size-xs: 2rem;
    --m-checkbox-wrapper-size-sm: 3rem;
    --m-checkbox-wrapper-size-md: 4rem;
    --m-checkbox-wrapper-size-lg: 5rem;
    --m-checkbox-wrapper-size-xl: 6rem;

    // default
    --m-checkbox-color: var(--m-color-primary);
    --m-checkbox-font-color: var(--m-font-color);

    --m-checkbox-size: var(--m-checkbox-size-md);
    --m-checkbox-wrapper-size: var(--m-checkbox-wrapper-size-md);
    
    color: var(--m-checkbox-font-color);
    font-size: calc(var(--m-checkbox-size) / 1.4);
    line-height: 1;
    height: var(--m-checkbox-color);
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
        color: var(--m-checkbox-color);
    }

    &__checked-icon,
    &__uncheck-icon,
    &__checkbox {
        height: var(--m-checkbox-size);
        width: var(--m-checkbox-size);
    }

    &__checked-icon {
        position: absolute;
        left: 0;
        top:0;
    }

    &__checkbox {
        position: relative;
    }

    &__checkbox-wrapper {
        position: absolute;
        left: calc(var(--m-checkbox-size) / 2 - var(--m-checkbox-wrapper-size) / 2);
        top: calc(var(--m-checkbox-size) / 2 - var(--m-checkbox-wrapper-size) / 2);
        height: var(--m-checkbox-wrapper-size);
        width: var(--m-checkbox-wrapper-size);
        border-radius: 50%;
    }

    &__label {
        color: transparent;
    }
	}
`
export default styled.div`
  ${props => genColor('m-checkbox', props.color)}
  ${props => genFontColor('m-checkbox', props.fontColor)}
  ${props => genSize('m-checkbox', props.size)}
`
