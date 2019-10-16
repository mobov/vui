
class ZIndex {
  zIndex: number = 2000

  get next (): number {
    this.zIndex ++
    return this.zIndex
  }
}

export default new ZIndex()
