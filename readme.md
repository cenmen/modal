## 概述

使用 Web Components 组件化语法开发的 modal & dialog 对话框组件

## API

### modal

| Field    | Type     | Default    | Description |
| -------- | -------- | ---------- | ----------- |
| `enter?` | `string` | `FADE_IN`  | 进入动画    |
| `leave?` | `string` | `FADE_OUT` | 离开动画    |

```javascript
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
```

### dialog

| Field             | Type       | Default | Description            |
| ----------------- | ---------- | ------- | ---------------------- |
| `title?`          | `string`   | `-`     | 标题                   |
| `body?`           | `string`   | `-`     | 内容                   |
| `cancelText?`     | `string`   | `-`     | 取消按钮文字           |
| `confirmText?`    | `string`   | `-`     | 确定按钮文字           |
| `onClickClose?`   | `function` | `-`     | 点击右上角关闭图标回调 |
| `onClickCancel?`  | `function` | `-`     | 点击取消按钮回调       |
| `onClickConfirm?` | `function` | `-`     | 点击确定按钮回调       |

## 使用实例

```html
// modal.html
<body>
  <button onclick="show()">show</button>
  <template id="modal-container">
    <style>
      .content {
        background: #ffffff;
        border: 1px solid red;
        padding: 10px;
      }
    </style>
    <div>
      <slot>
        <div class="content">modal</div>
      </slot>
    </div>
  </template>

  <modal-container enter="OVER_TOP" leave="BELOW_BOTTOM"></modal-container>

  <script src="./modal.js"></script>
  <script src="./dialog.js"></script>
  <script src="./index.js"></script>
  <script>
    /* template 的内容会被复制到 modal-container 内部定义的位置 */
    const modal = document.querySelector('modal-container')

    function show() {
      modal.show()
    }
  </script>
</body>
```

## 使用实例

```html
// dialog.html
<body>
  <button onclick="show()">show</button>

  <dialog-container title="标题" body="内容啦！"></dialog-container>

  <script src="./modal.js"></script>
  <script src="./dialog.js"></script>
  <script src="./index.js"></script>
  <script>
    const dialog = document.querySelector('dialog-container')

    dialog.onClickConfirm = function (e) {
      console.log('==> onClickConfirm')
      // dialog.close()
    }

    function show() {
      dialog.show()
    }
  </script>
</body>
```

## 写在最后

喜欢的可以点个 star✨，谢谢！
