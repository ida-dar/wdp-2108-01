import React from 'react';
import { useState, useEffect } from 'react';
import styles from './ChatBox.module.scss';
import Button from '../../common/Button/Button';
//import { AiOutlineSend } from 'react-icons/ai';
//import { BsChatSquareDots } from 'react-icons/bs';
//import { BiRefresh } from 'react-icons/bi';
//import { RiCloseFill } from 'react-icons/ri';

const ChatBox = () => {
  const botMsgData = {
    startMsg: 'How can I help You?',
    helloMsg: 'Hello. How are You?',
  };

  const [chatActive, setChatActive] = useState(false);
  const [botMsg, setBotMsg] = useState(botMsgData.startMsg);

  const changeChatState = () => {
    setChatActive(!chatActive);
  };

  //userMsg as sended input value
  const handleBotMsg = userMsg => {
    setBotMsg(botMsgData.helloMsg);
    console.log(userMsg);
  };

  useEffect(() => {
    console.log(chatActive);
  });

  return (
    <section className={styles.root}>
      <div className={styles.chatBoxContainer}>
        <div
          className={!chatActive ? styles.chatBoxButtonOpen : styles.chatBoxButtonClose}
        >
          <Button
            onClick={() => changeChatState()}
            variant={!chatActive ? 'openChatBox' : 'closeChatBox'}
          >
            {!chatActive ? 'Need help? Write to us!' : 'x'}
          </Button>
        </div>
        <div
          className={
            chatActive ? styles.chatBoxWrapperOpen : styles.chatBoxWrapperClose
          }
        >
          <div className={styles.chatBoxContentHeader}>
            <div className={styles.chatBoxIcon}>
              <Button onClick={() => console.log('refresh')} variant='chatTop'>
                {/*<BiRefresh />*/}
              </Button>
            </div>
            <div className={styles.chatBoxIcon}>
              <Button onClick={() => console.log('close')} variant='chatTop'>
                {/*<RiCloseFill />*/}
              </Button>
            </div>
          </div>
          <div className={styles.chatBoxContentOpen}>
            <div className={styles.chatBoxChat}>
              <div className={styles.chatBoxBotMsg}>{botMsg}</div>
            </div>
            <div className={styles.chatBoxInput}>
              <input placeholder='Input Your question' />
              <div className={styles.chatBoxSend}>
                <Button onClick={() => handleBotMsg('userMsg')} variant='chatSend'>
                  {/*<AiOutlineSend />*/}
                </Button>
              </div>
            </div>
          </div>
          <div className={styles.chatBoxContentFooter}>
            <div className={styles.chatBoxIcon}>
              {/*<BsChatSquareDots />*/}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatBox;
