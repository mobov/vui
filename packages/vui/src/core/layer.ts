const $mask = document.createElement('div')
$mask.innerHTML = `
`
class ZIndex {
  zIndex: number = 2000

  get next (): number {
    this.zIndex += 2
    return this.zIndex
  }
}

export default new ZIndex()
