import styled from 'styled-components';

// Layout
export const DetailWrapper = styled.div`
  overflow: hidden;
  width: 620px;
  margin: 0 auto;
  padding-bottom: 100px;
  margin-top: 56px;
`

export const ArticleTitle = styled.h1`
  margin: 20px 0 20px 0;
  line-height: 44px;
  font-size: 34px;
  color: #333;
  font-weight: bold;
`
export const ArticleContent = styled.div`
  color: #2f2f2f;
  img {
    width: 100%;
  }
  p {
    margin: 25px 0;
    font-size: 16px;
    line-height: 30px;
  }
`