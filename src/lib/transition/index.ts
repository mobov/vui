import MTransitionExpansion from './expansion'

/* istanbul ignore next */
MTransitionExpansion.install = (Vue) => {
    Vue.component(MTransitionExpansion.name, MTransitionExpansion)
}

export {
    MTransitionExpansion,
}
