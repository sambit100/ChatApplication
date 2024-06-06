import React from 'react'

const ChatItem = (
  w="100%",
  chats =[],
  ChatId,
  onlineUsers =[],
  newMessageAlert =[
            {
                chatId:"",
                count:0
            },
  ],
  handleDeleteChat,

) => {
  return (
    <Stack width={w} direction ={"column"}>
       {
         chats ?.map((data)=>{
            return <div>Sd</div>
         })
       }
    </Stack>
  )
}

export default ChatItem