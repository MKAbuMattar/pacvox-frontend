import styled from 'styled-components'

export const ChatInputWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: var(--box-shadow);
  margin-top: auto;
  border-radius: 6px;
  padding: 12px;
  background-color: var(--chat-input);
`

export const InputWrapper = styled.div`
  border: 1px solid var(--border-light);
  border-radius: 4px;
  font-size: 12px;
  display: flex;
  flex: 1;
  /* overflow: hidden; */
  padding: 0 6px 0 12px;
  justify-content: space-between;
  margin: 0 8px;
  background-color: var(--chat-input);
`

export const ChatSendBtn = styled.button`
  height: 32px;
  color: #fff;
  background-color: var(--button-bg);
  border: none;
  border-radius: 4px;
  padding: 0 32px 0 10px;
  font-size: 12px;
  background-position: center right 8px;
  background-repeat: no-repeat;
  background-size: 14px;
  line-height: 16px;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cdefs/%3E%3Cpath fill='%23fff' d='M481.508 210.336L68.414 38.926c-17.403-7.222-37.064-4.045-51.309 8.287C2.86 59.547-3.098 78.551 1.558 96.808L38.327 241h180.026c8.284 0 15.001 6.716 15.001 15.001 0 8.284-6.716 15.001-15.001 15.001H38.327L1.558 415.193c-4.656 18.258 1.301 37.262 15.547 49.595 14.274 12.357 33.937 15.495 51.31 8.287l413.094-171.409C500.317 293.862 512 276.364 512 256.001s-11.683-37.862-30.492-45.665z'/%3E%3C/svg%3E");
`

export const Input = styled.input`
  border: none;
  outline: none;
  height: 32px;
  flex: 1;
  margin-right: 4px;
  background-color: var(--chat-input);
  color: var(--text-dark);

  :placeholder {
    color: var(--text-light);
    font-size: 12px;
  }
`

export const EmojiBtnContainer = styled.div`
  display: flex;
  align-items: center;
  color: white;
  gap: 1rem;
  .emoji {
    position: relative;
    svg {
      font-size: 1.5rem;
      cursor: pointer;
    }
    .emoji-picker-react {
      position: absolute;
      top: -350px;
      right: -100px;
      background-color: #080420;
      box-shadow: none;
      border-color: #9a86f3;
      .emoji-scroll-wrapper {
        &::-webkit-scrollbar {
          background-color: #080420;
          width: 5px;
        }
        &::-webkit-scrollbar-thumb {
          background-color: #9a86f3;
        }
      }
      .emoji-categories {
        button {
          filter: contrast(0);
        }
      }
      .emoji-search {
        background-color: transparent;
        border-color: #9a86f3;
        color: #fff;
      }
      .emoji-group {
        &:before {
          background-color: #080420;
        }
      }
    }
  }
`

export const EmojiBtn = styled.span`
  border: none;
  background-color: transparent;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 4px;
  color: #ffca3e;
  position: relative;
`
