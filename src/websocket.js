import {SOCKET_URL} from "./settings";

class WebSocketService {
    static instance = null;
    callbacks = {};

    constructor() {
        this.socketRef = null;
    }

    static getInstance() {
        if (!WebSocketService.instance) {
            WebSocketService.instance = new WebSocketService();
        }
        return WebSocketService.instance;
    }

    connect(chatUrl) {
        const path = `${SOCKET_URL}/ws/` + chatUrl;
        if (chatUrl) {
            this.socketRef = new WebSocket(path);
            this.socketRef.onopen = () => {
            };
            this.socketRef.onmessage = e => {
                this.socketNewMessage(e.data);
            };
            this.socketRef.onerror = e => {
            };
            this.socketRef.onclose = () => {
                this.connect();
            };
        }
    }

    disconnect() {
        this.socketRef.close();
    }

    socketNewMessage(data) {
        const parsedData = JSON.parse(data);
        const command = parsedData.command;
        if (Object.keys(this.callbacks).length === 0) {
            return;
        }
        if (command === "messages") {
            this.callbacks[command](parsedData.messages);
        }
        if (command === "new_message") {
            this.callbacks[command](parsedData.message);
        }
    }

    fetchMessages(username, chatId, length) {
        this.sendMessage({
            command: "fetch_messages",
            username: username,
            chatId: parseInt(chatId),
            length: length
        });
    }

    newChatMessage(message) {
        this.sendMessage({
            command: "new_message",
            from: message.from,
            message: message.content,
            chatId: parseInt(message.chatId)
        });
    }

    addCallbacks(messagesCallback, newMessageCallback) {
        this.callbacks["messages"] = messagesCallback;
        this.callbacks["new_message"] = newMessageCallback;
    }

    sendMessage(data) {
        try {
            this.socketRef.send(JSON.stringify({...data}));
        } catch (err) {
            console.log(err.message);
        }
    }

    state() {
        return this.socketRef.readyState;
    }
}

const WebSocketInstance = WebSocketService.getInstance();

export default WebSocketInstance;
