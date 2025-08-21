import React, { ForwardedRef, forwardRef, RefObject, useCallback, useRef } from 'react';
import { ChatZone, Section, StickyHeader } from './styles';
import { IChat, IDM } from '@typings/db';
import Chat from '@components/Chat';
import { Scrollbars } from 'react-custom-scrollbars-2';

interface Props {
  chatSections: { [key: string]: IDM[] };
  ref: RefObject<Scrollbars>;
  setSize: (f: (size: number) => number) => Promise<(IDM | IChat)[][] | undefined>;
  isEmpty: boolean;
  isReachingEnd: boolean;
}

const ChatList: React.FC<Props> = ({ chatSections, ref, setSize, isEmpty, isReachingEnd }) => {
  const onScroll = useCallback((values: any) => {
    if (values.scrollTop === 0 && !isReachingEnd) {
      console.log('가장');
      setSize((prevSize) => prevSize + 1).then(() => {
        // 스크롤 위치 유지
        if (ref?.current) {
          ref.current.scrollTop(ref.current.getScrollHeight() - values.scrollHeight);
        }
      });
    }
  }, []);

  return (
    <ChatZone>
      <Scrollbars autoHide ref={ref} onScrollFrame={onScroll}>
        {Object.entries(chatSections).map(([date, chats]) => {
          return (
            <Section>
              <StickyHeader>
                <button>{date}</button>
              </StickyHeader>
              {chats.map((chat: IDM) => (
                <Chat key={chat.id} data={chat} />
              ))}
            </Section>
          );
        })}
      </Scrollbars>
    </ChatZone>
  );
};

export default ChatList;
