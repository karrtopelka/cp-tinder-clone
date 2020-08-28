import React from "react";
import "./Chats.css";
import Chat from "./Chat";

function Chats() {
  return (
    <div className="chats">
      <Chat
        name="Jenny"
        message="Hiii"
        time="3 seconds ago"
        profilePic="https://images-ssl.gotinder.com/5f402a152e7bc5010004596e/640x800_75_e4054500-5be1-44d5-9832-49d318bb67a5.webp"
      />
      <Chat
        name="Helen"
        message="WASSAP"
        time="40 seconds ago"
        profilePic="https://images-ssl.gotinder.com/5e497bc68d8b18010017a64d/640x800_75_ccd6bc43-3f98-4473-bcb1-1521a511ecf5.webp"
      />
      <Chat
        name="Sarah"
        message="Coded deded "
        time="1 minute ago"
        profilePic="https://images-ssl.gotinder.com/5f3ee7e1f202b201004cd072/640x800_75_4a2d674e-a7d5-4dc9-8b2a-d658a834eddc.webp"
      />
      <Chat
        name="Christian"
        message="Iphone is the best"
        time="2 hours ago"
        profilePic="https://images-ssl.gotinder.com/5e31e104a8f06e0100478c13/640x800_75_750e1ef3-2473-4ad2-86d3-1cc61d0bf5be.webp"
      />
      <Chat
        name="Maia"
        message="Love you"
        time="36 hours ago"
        profilePic="https://images-ssl.gotinder.com/5ee74a2e2fd9350100c14d32/640x800_75_7c2d58da-8e93-4a63-a5e8-494dc68cf76c.webp"
      />
      <Chat
        name="Monika"
        message="Son are ya winning"
        time="20 days ago"
        profilePic="https://images-ssl.gotinder.com/5f441baf841c9c0100411156/640x800_75_41a611c2-eaa7-497c-8dac-3d3280719644.webp"
      />
      <Chat
        name="Ella"
        message="Now Im working on a project"
        time="1 month ago"
        profilePic="https://images-ssl.gotinder.com/5f3ad1b2a57e540100617e5d/640x800_75_94658125-83ca-41e5-887e-18aaed2fa747.webp"
      />
    </div>
  );
}

export default Chats;
