/* eslint-disable */
class Buffer {
  private docStylesVal: any | boolean = false
  /**
   * 根文档样式表
   * @return {{}}
   */
  public get docStyles (): any {
    if (!this.docStylesVal) {
      const $dom: any = document.documentElement
      this.docStylesVal = getComputedStyle($dom)
    }
    return this.docStylesVal
  }
}

export default new Buffer()
