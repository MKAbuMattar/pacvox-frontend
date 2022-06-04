import styled from 'styled-components'

export const ChatContainerChatWrapper = styled.section`
  overflow: auto;
`

export const ChatContainerMessageWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  padding-bottom: 20px;

  .message-box-wrapper {
    margin: 0 12px;
    span {
      font-size: 10px;
      line-height: 16px;
      color: var(--text-light);
      opacity: 0.6;
    }
  }

  .message-box {
    background-color: var(--message-box-1);
    box-shadow: var(--box-shadow);
    border-radius: 4px;
    padding: 10px;
    font-size: 12px;
    line-height: 16px;
    width: auto;
    max-width: 80%;
    color: var(--text-dark);
  }

  .message-pp {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    -o-object-fit: cover;
    object-fit: cover;
    flex-shrink: 0;
  }

  &.reverse {
    justify-content: flex-end;
  }
  &.reverse .message-box {
    background-color: var(--message-box-2);
    color: #fff;
  }
  &.reverse .message-box-wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
  &.reverse .message-pp {
    order: 2;
  }
`
