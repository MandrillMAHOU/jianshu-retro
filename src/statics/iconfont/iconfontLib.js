import {injectGlobal} from 'styled-components';

injectGlobal`
@font-face {font-family: "iconfont";
  src: url('iconfont.eot?t=1533813110721'); /* IE9*/
  src: url('iconfont.eot?t=1533813110721#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff;charset=utf-8;base64,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') format('woff'),
  url('iconfont.ttf?t=1533813110721') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
  url('iconfont.svg?t=1533813110721#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family:"iconfont" !important;
  font-size:16px;
  font-style:normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-spin:before { content: "\e851"; }

.icon-49:before { content: "\e631"; }

.icon-zhinanzhen:before { content: "\e601"; }

.icon--quill:before { content: "\e608"; }

.icon-xiazaiAPP:before { content: "\e6e1"; }

.icon-mima:before { content: "\e627"; }

.icon-huidingbu:before { content: "\e9a9"; }

.icon-denglu:before { content: "\e7ae"; }
`

