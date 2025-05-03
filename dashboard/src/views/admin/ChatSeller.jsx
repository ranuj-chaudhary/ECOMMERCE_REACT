import React, { useState } from 'react';
import InputField from '../../components/InputField';
import Button from '../../components/Button';
import { useSelector } from 'react-redux';
const ChatSeller = () => {
  const [currentId, setCurrentId] = useState(1);
  const [message, setMessage] = useState('');
  const { userInfo } = useSelector((state) => state.auth);
  const { id: loginUserId, name, email } = userInfo;
  const userData = [
    {
      id: 1,
      name: 'ranuj choudhary',
      status: 'online',
      imageUrl: '/images/admin.jpg',
    },
    {
      id: 2,
      name: 'raneesh choudhary',
      status: 'offline',
      imageUrl: '/images/admin.jpg',
    },
    {
      id: 3,
      name: 'tanya tomar',
      status: 'offline',
      imageUrl: '/images/admin.jpg',
    },
    {
      id: 4,
      name: 'amisha tomar',
      status: 'offline',
      imageUrl: '/images/admin.jpg',
    },
  ];

  const currentUser = userData.find((user) => user.id === currentId);

  function handleCurrentId(e, id) {
    setCurrentId(id);
  }

  function handleSendMessage(id, messageSent) {
    // websocket to send message
    console.log(`message sent to ${id}: `, messageSent);
  }
  return (
    <div className="h-full bg-[var(--primary-color)] text-[var(--text-primary)] p-4 rounded-md flex gap-4">
      <div className="w-1/3 border-[1px] border-gray-200 h-full p-2 rounded-md overflow-y-auto">
        <h1 className="mb-4">Sellers</h1>
        <div className="friends flex flex-col gap-2">
          {userData.map((user, i) => (
            <User
              user={user}
              key={i}
              onSetCurrentId={handleCurrentId}
              currentId={currentId}
            />
          ))}
        </div>
      </div>
      <div className="current-user w-2/3 border-[1px] border-gray-200 h-full p-2 rounded-md flex flex-col">
        <UserAvatarStatus status={currentUser.status} />
        <div className="chat-box  border-[1px] border-gray-200 p-2 rounded-md relative flex gap-4 h-full items-center flex-col">
          <div className="messages  flex-1 bg-gray-500 w-full rounded-md p-4">
            {/* Peding integration with web socket */}
          </div>
          <div className="send-message flex gap-4 items-center w-full text-black">
            <InputField
              className={'p-2 rounded-md'}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              autocomplete="off"
            />
            <Button
              className="bg-blue-400 text-black px-4 py-2 rounded-md"
              onClick={() => handleSendMessage(currentId, message)}
            >
              Send
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

function User({ user, onSetCurrentId, currentId }) {
  const { name, status, id: currentUserId } = user;

  return (
    <div
      className={`w-full user flex items-center gap-4 p-2 ${
        currentId === currentUserId ? 'bg-gray-400/60' : ''
      } hover:bg-gray-400/60 rounded-md cursor-pointer`}
      onClick={(e) => onSetCurrentId(e, currentUserId)}
    >
      <UserAvatarStatus status={status} />
      <p className="uppercase">{name}</p>
    </div>
  );
}

function UserAvatarStatus({ status }) {
  const isOnline = status === 'online';

  return (
    <div
      className={`my-2 rounded-full w-[40px] h-[40px] ${
        isOnline ? 'ring-2 ring-green-600' : 'ring-2 ring-red-600'
      } p-[2px] relative z-2`}
    >
      <img src="/images/admin.jpg" className="rounded-full" alt="" />
      <div
        className={`absolute right-0 bottom-[2px] w-[10px] h-[10px] ${
          isOnline ? 'bg-green-400' : 'bg-red-600'
        }  rounded-full z-10`}
      ></div>
    </div>
  );
}

export default ChatSeller;
