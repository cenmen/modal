const ANIMATE_POSITION = {
  /* 屏幕上方 */
  OVER_TOP: 'OVER_TOP',
  /* 屏幕下方 */
  BELOW_BOTTOM: 'BELOW_BOTTOM',
  /* 屏幕正中放大 */
  ZOOM_IN: 'ZOOM_IN',
  /* 屏幕正中缩小 */
  ZOOM_OUT: 'ZOOM_OUT',
  /* 淡入 */
  FADE_IN: 'FADE_IN',
  /* 淡出 */
  FADE_OUT: 'FADE_OUT',
}

class Modal extends HTMLElement {
  constructor() {
    super()
    const shadow = this.attachShadow({ mode: 'open' })
    const container = document.createElement('div')
    container.classList.add('modal-container')
    shadow.appendChild(container)
    this.create()
    this.show = this.show.bind(this)
    this.close = this.close.bind(this)
  }

  create({ component } = {}) {
    const container = this._target('.modal-container')
    container.innerHTML = `
      <style>
        @import './modal.css'
      </style>
    `
    container.style = 'display: none;'
    const content = document.createElement('div')
    content.classList.add('modal-content')

    content.addEventListener('click', (e) => e.stopPropagation())
    /* 点击蒙层关闭 */
    container.addEventListener('click', (e) => this.close(e))

    container.appendChild(content)
    const template = document.querySelector('#modal-container')
    if (component) {
      content.appendChild(component)
    } else if (template) {
      const templateContent = template.content
      content.appendChild(templateContent.cloneNode(true))
    }
  }

  show() {
    this._target('.modal-container').style.display = 'flex'
    this._target('.modal-content').classList.remove(this.leave)
    this._target('.modal-content').classList.add(this.enter)
  }

  close() {
    this._target('.modal-content').classList.remove(this.enter)
    this._target('.modal-content').classList.add(this.leave)
    setTimeout(() => {
      this._target('.modal-container').style.display = 'none'
    }, 500)
  }

  _target(selector) {
    return this.shadowRoot.querySelector(selector)
  }

  /* 进入动画 */
  get enter() {
    return this.getAttribute('enter') || ANIMATE_POSITION.FADE_IN
  }

  /* 离开动画 */
  get leave() {
    return this.getAttribute('leave') || ANIMATE_POSITION.FADE_OUT
  }
}
