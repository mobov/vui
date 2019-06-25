
class LayerManager {
  zIndex: number = 2000

  getZIndex (): number {
    this.zIndex ++
    return this.zIndex
  }

}

export default new LayerManager()
