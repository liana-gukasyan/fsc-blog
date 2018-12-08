import styled from 'styled-components'

export const PostContent = styled.div`
  width: 100%;
  max-width: 700px;
  display: block;
  margin: 0 auto;

  &:not(:first-child) {
    margin-top: 128px;
  }
`

export const PostPageTitle = styled.h1`
  margin: 12px 0 36px 0;
  color: rgba(26,26,26,.9);
  font-family: adobe-garamond-pro;
  font-weight: 400;
  font-style: normal;
  font-size: 32px;
  letter-spacing: 0px;
  text-transform: none;
  line-height: 1.2em;
`

export const PostTitle = styled.h3`
  margin: 12px 0 36px 0;
  color: rgba(26,26,26,.9);
  font-family: adobe-garamond-pro;
  font-weight: 400;
  font-style: normal;
  font-size: 32px;
  letter-spacing: 0px;
  text-transform: none;
  line-height: 1.2em;
`

export const ShortInfo = styled.p`
  font-style: italic;
  word-wrap: break-word;
  margin-top: 0;
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-family: adobe-garamond-pro;
  font-weight: 400;
  font-size: 18px;
  letter-spacing: 0px;
  line-height: 1.6em;
  color: rgba(26,26,26,.7);
`

export const TimeToRead = styled.p`
  margin-top: 10px;
  text-align: right;
  font-size: 16px;
  font-family: adobe-garamond-pro;
`

export const PostDate = styled.span`
  color: rgba(26,26,26,.4);
  font-family: adobe-garamond-pro;
  font-weight: 400;
  font-style: normal;
  font-size: 18px;
  letter-spacing: 0px;
  line-height: 1.6em;
`

export const PostText = styled.div`
  font-family: adobe-garamond-pro;
  font-weight: 400;
  font-style: normal;
  font-size: 18px;
  letter-spacing: 0px;
  line-height: 1.6em;
  color: rgba(26,26,26,.7);
`

export const GoHomeLinkWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 48px;
  margin-right: 16px;
`
