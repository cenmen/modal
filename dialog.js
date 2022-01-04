class Dialog extends Modal {
  constructor() {
    super()
    const html = `
      <style>
        @import './dialog.css'
      </style>
      <div class="dialog-contianer">
      <div class="dialog-header">
        <div class="dialog-header__title">${this.title}</div>
        <img class="dialog-header__close" src="./assets/close.png">
      </div>
      <div class="dialog-content" name="dialog-content">${this.body}</div>
      <div class="dialog-footer">
        <button id="dialog-cancel">${this.cancelText}</button>
        <button id="dialog-confirm">${this.confirmText}</button>
      </div>
      </div>
    `
    const component = document.createElement('div')
    component.innerHTML = html
    /* 点击右上角关闭图标回调 */
    this.onClickClose = null
    /* 点击取消按钮回调 */
    this.onClickCancel = null
    /* 点击确定按钮回调 */
    this.onClickConfirm = null
    component.querySelector('.dialog-header__close').addEventListener('click', (e) => (this.onClickClose ? this.onClickClose(e) : this.close()))
    component.querySelector('#dialog-cancel').addEventListener('click', (e) => (this.onClickCancel ? this.onClickCancel(e) : this.close()))
    component.querySelector('#dialog-confirm').addEventListener('click', (e) => (this.onClickConfirm ? this.onClickConfirm(e) : this.close))
    super.create({ component })
  }

  show() {
    super.show()
  }

  close() {
    super.close()
  }

  get title() {
    return this.getAttribute('title')
  }

  get body() {
    return this.getAttribute('body')
  }

  get cancelText() {
    return this.getAttribute('cancelText') || '取消'
  }

  get confirmText() {
    return this.getAttribute('confirmText') || '确定'
  }
}
