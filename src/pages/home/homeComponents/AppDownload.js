import React, {Component} from 'react';

import {QRWrapper, QRCode, QRTitle, QRDesc} from '../homeStyle';

export default class AppDownload extends Component {
  render() {
    return (
      <QRWrapper>
        <QRCode />
        <div>
          <QRTitle>下载简书手机App</QRTitle>
          <QRDesc>随时随地发现和创作内容</QRDesc>
        </div>
      </QRWrapper>
    )
  }
}