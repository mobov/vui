import styled, { injectGlobal } from 'vue-styled-components';
import { genColor, genFontColor, genSize, genElevation, getScrollBarStyles } from '../core/util';
injectGlobal `
	.m-table {
	  // selection
    --m-table-row-size-xs: 2rem;
    --m-table-row-size-sm: 3rem;
    --m-table-row-size-md: 4rem;
    --m-table-row-size-lg: 5rem;
    --m-table-row-size-xl: 6rem;
    // default
    --m-table-color: var(--m-bg-color);
    --m-table-bg-color: var(--m-bg-color);
    --m-table-font-color: var(--m-font-color);
    --m-table-active-color: var(--m-day-bg-second-color);
    --m-table-row-size: var(--m-table-row-size-md);
    --m-table-elevation: var(--m-elevation-2);
    
    position: relative;
    background-color: var(--m-table-bg-color);
    table {
        min-width: 100%;
        border-collapse: collapse;
        position: relative;
        border-spacing: 0;
        background-color: inherit;
        > thead {
            background-color: inherit;
            width: inherit;
        }
        > tbody{
            background-color: inherit;
            width: inherit;
        }
        tr {
            background-color: white;
            border: none;
        }
        td {
            border: none;
            background-color: inherit;
            position: relative;
            &:last-child {
                &:before {
                    width: 0;
                }
            }
            &:after {
                content: ' ';
                position: absolute;
                height: 1px;
                width: 100%;
                background-color: var(--m-border-color);
                right: 0;
                bottom: 0;
            }
        }
    }
    // border
    &[border] {
        table {
            td {
                &:before {
                    content: ' ';
                    position: absolute;
                    height: 100%;
                    width: 1px;
                    background-color: var(--m-border-color);
                    top: 0;
                    right: 0;
                }
            }
        }
    }
    
    // header
    &[header="sticky"] {
        .m-table-head {
            position: sticky;
            top: 0;
            left: 0;
            z-index: 1;
        }
    }
    
    // hover
    &[hover="row"] {
        .m-table-body__row:hover {
            background-color: var(--m-table-active-color);
        }
    }
    &[hover="cell"] {
        .m-table-body__cell:hover {
            background-color: var(--m-table-active-color);
        }
    }
	}
	
  .m-table__wrapper {
      overflow: auto;
      background-color: inherit;
      width: 100%;
      ${getScrollBarStyles('xy')}
  }
  .m-table-head {
      min-width: 100%;
      background-color: inherit;
  }
  .m-table-body {
      width: 100%;
      background-color: inherit;
      tr {
          cursor: pointer;
      }
  }
  .m-table-head__row,
  .m-table-body__row {
      min-height: var(--m-table-row-size);
      height: var(--m-table-row-size);
  }
  .m-table-body__row {
      transition: background-color ease .3s;
  
      // row selected
      &.m--selected {
          background-color: var(--m-table-active-color);
      }
      // row disabled
      &.m--disabled {
          background-color: var(--m-table-active-color);
      }
  }
  .m-table-body__cell {
      transition: background-color ease .3s;
  }
  .m-table-body__expand {
      width: 100%;
      height: 0 !important;
      max-width: 100%;
      > td {
          padding: 0;
      }
  }
  .m-table-body__expand-content {
      box-shadow: var(--m-elevation-2) inset;
      background-color: var(--m-table-active-color);
  }
`;
export default styled.div `
  ${props => genColor('m-table', props.color)}
  ${props => genFontColor('m-table', props.fontColor)}
  ${props => genSize('m-table', props.size)}
  ${props => genElevation('m-table', props.elevation)}
`;
//# sourceMappingURL=table.style.js.map