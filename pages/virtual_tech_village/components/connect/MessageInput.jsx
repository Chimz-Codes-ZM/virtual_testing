import React, { useState, useEffect, useRef } from "react";
import { AiOutlineSend, AiOutlinePaperClip } from "react-icons/ai";
import useWebSocket, { ReadyState } from "react-use-websocket";

import { API_URL } from "@/config";
import { useEditor, EditorContent, BubbleMenu } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Mention from '@tiptap/extension-mention'
import suggestion from '../../../../tiptap/suggestion.js'
import Placeholder from "@tiptap/extension-placeholder";
import { useSelector, useDispatch } from "react-redux";
import { setRoomId, setUsersId } from '../../../../app/store.js';


const MessageInput = ({ room }) => {
  const dispatch = useDispatch();

  const [messageText, setMessageText] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const inputRef = useRef(null);

  const id = useSelector((state) => {
    if (state.user?.userData && state.user.userData.length > 0) {
      return state.user.userData[0].user_id;
    } else {
      return null;
    }
  });

  const [socketUrl, setSocketUrl] = useState(
   `wss://${API_URL}/ws/channels/${id}/${room}/`
  );
  const { readyState, sendJsonMessage } = useWebSocket(socketUrl, {
    onOpen: () => {
      // dispatch(setRoomId(room));
      // dispatch(setUsersId(id));
    },
  });

  const handleOpenMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClickOutsideProfile = (event) => {
    if (inputRef.current && !inputRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutsideProfile);

    return () => {
      document.removeEventListener("mousedown", handleClickOutsideProfile);
    };
  }, []);

  useEffect(() => {
    setSocketUrl(`wss://${API_URL}/ws/channels/${id}/${room}/`);
  }, [room]);

  const [isEditable, setIsEditable] = useState(true);

  const editor = useEditor({
    extensions: [
      StarterKit,
      Placeholder.configure({
        placeholder: "Type your message here...",
      }),
      Mention.configure({
        HTMLAttributes: {
          class: 'mention',
        },
        suggestion,
      }),
    ],
    content: messageText,

    onUpdate: ({ editor }) => {
      const html = editor.getHTML();
      setMessageText(html);
    },

    editorProps: {
      attributes: {
        class:
          "prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto focus:outline-none border mt-2 rounded p-1 h-36 overflow-y-auto custom-scroll",
      },
    },
  });

  useEffect(() => {
    if (editor) {
      editor.setEditable(isEditable);
    }
  }, [isEditable, editor]);

  if (!editor) {
    return null;
  }

  const handleSendInput = () => {
    sendJsonMessage({
      type: "chat_message",
      message: messageText,
    });
    editor.commands.clearContent();
  };

  return (
    <div className="flex custom-scroll">
      {editor && (
        <BubbleMenu
          editor={editor}
          tippyOptions={{ duration: 100 }}
          className="flex gap-1"
        >
          <button
            onClick={() => editor.chain().focus().toggleBold().run()}
            className={
              editor.isActive("bold")
                ? "is-active "
                : "border-2 rounded p-1 py-0 bg-white"
            }
          >
            bold
          </button>
          <button
            onClick={() => editor.chain().focus().toggleItalic().run()}
            className={
              editor.isActive("italic")
                ? "is-active"
                : "border-2 rounded p-1 py-0 bg-white"
            }
          >
            italic
          </button>
          <button
            onClick={() => editor.chain().focus().toggleStrike().run()}
            className={
              editor.isActive("strike")
                ? "is-active"
                : "border-2 rounded p-1 py-0 bg-white"
            }
          >
            strike
          </button>
        </BubbleMenu>
      )}
      <EditorContent
        editor={editor}
        onChange={(e) => setMessageText(e.getHTML())}
        className="grow w-full custom-scroll"
      />
      <button
        onClick={() => {
          handleSendInput();
        }}
        className="bg-gray-900 text-white rounded p-1 px-2 h-8  self-center"
      >
        <AiOutlineSend />
      </button>
    </div>
  );
};

export default MessageInput;
