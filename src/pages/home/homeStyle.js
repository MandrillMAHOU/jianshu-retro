import styled from 'styled-components';

// Layout
export const HomeWrapper = styled.div`
  display: flex;
  width: 960px;
  margin: 0 auto;
  margin-top: 56px;
`
export const HomeLeft = styled.div`
  // float: left;
  width: 625px;
  padding-left: 15px;
  padding-top: 30px;
  .banner-img {
    width: 625px;
    height: 270px;
    border-radius: 7px;
  }
`
export const HomeRight = styled.div`
  // float: right;
  width: 280px;
  margin-left:40px;
  padding-top: 25px;
`
// Topic Component
export const TopicWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  padding: 30px 0 10px 0;
  border-bottom: 1px solid #dcdcdc;
  .more-topics {
    margin-top: 7px;
    text-decoration: none;
    display: block;
    color: #787878;
    cursor: pointer;
  }
`
export const TopicItem = styled.div`
  margin-right: 18px;
  margin-bottom: 18px;
  display: flex;
  padding-right:10px;
  background-color: #f7f7f7;
  height: 32px;
  line-height: 32px;
  font-size: 14px;
  color: #000;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  cursor: pointer;
  .topic-img {
    width:32px;
    height:32px;
    margin-right: 10px;
  }
`
// List component
export const ListItem = styled.div`
  display: flex;
  padding: 20px 0;
  border-bottom: 1px solid #dcdcdc;
  .list-img {
    display: block;
    width: 120px;
    height:100px;
    border-radius: 5px;
  }
`

export const ListInfo = styled.div`
  .list-title {
    line-height: 27px;
    font-size: 18px;
    font-weight: bold;
    color: #333;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
  .list-desc {
    color:#999;
    font-size: 13px;
    line-height: 24px;
  }
`

export const LoadMore = styled.div`
  width: 100%;
  height: 40px;
  line-height: 40px;
  text-align: center;
  margin: 10px 0 30px;
  border-radius: 20px;
  color: #fff;
  background: #a5a5a5;
  cursor: pointer;
`

// recommand component
export const RecommandWrapper = styled.div`
  width: 280px;
`
export const RecommandItem = styled.img`
  display: block;
  width: 280px;
  height: 50px;
  margin-bottom: 6px;
  cursor: pointer;
`
// AppDownload component
export const QRWrapper = styled.div`
  margin-bottom: 30px;
  padding: 10px 22px;
  border: 1px solid #f0f0f0;
  border-radius: 6px;
  background-color: #fff;
  display: flex;
  justify-content: space-around;
  align-items: center;
  div {
    margin-left: 7px;
  }
`

export const QRCode = styled.img.attrs({
  src: "https://cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png"
})`
  width: 60px;
  height: 60px;
`
export const QRTitle = styled.div`
  font-size: 15px;
  color: #333;
`
export const QRDesc = styled.div`
  margin-top: 4px;
  font-size: 13px;
  color: #999;
`
// back to top btn
export const BackToTop = styled.div`
  position: fixed;
  right: 50px;
  bottom: 50px; 
  width: 60px;
  height: 60px;
  line-height: 60px;
  padding: 5px;
  text-align: center;
  font-size: 14px;
  border: 1px solid #ccc;
  cursor: pointer;
`
// author component
export const AuthorWrapper = styled.div`
  padding: 5px 10px 20px;
`
export const AuthorTitle = styled.h3`
  font-size: 14px;
  color: #969696;
`
export const AuthorList = styled.ul`
  margin: 0 0 20px;
  text-align: left;
  list-style: none;
`
export const AuthorItem = styled.li`
  display: block;
  overflow: hidden;
  margin: 20px 0;
`
export const AuthorImg = styled.img`
  float: left;
  width: 48px;
  height: 48px;
  margin-right: 10px;
  border: 1px solid #ddd;
  border-radius: 50%;
`
export const AuthorInfo = styled.span`
  line-height: 50px;
  color: #333;
`
export const Follow = styled.span`
  line-height: 50px;
  float: right;
  font-size: 13px;
  color: #42c02e;
  cursor: pointer;
  span {
    font-weight: 900;
  }
`
export const MoreAuthor = styled.div`
  font-size: 13px;
  color: #787878;
  background-color: #f7f7f7;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  padding: 7px 7px 7px 12px;
  text-align: center;
  cursor: pointer;
`