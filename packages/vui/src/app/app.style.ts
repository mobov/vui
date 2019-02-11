import styled, { injectGlobal } from 'vue-styled-components'

injectGlobal`
    .m-app {
    height: 100%;
    width: 100%;
    overflow: hidden;
    padding: 0;
    margin: 0;
    font-size: var(--m-font-base);
    color: var(--m-font-color);
    background-color: var(--m-bg-color);
    position: relative;
	}
`

export default styled.div``
