import React from 'react';

export default function MessageHistory({ list = [] }) {
  // Если список пуст, ничего не рендерим
    if (list.length === 0) {
        return null;
    }

    return (
        <div className="chat-history">
        {list.map((message) => {
            // Определяем класс контейнера в зависимости от типа
            let itemClass = 'message-item ';
            if (message.type === 'message') itemClass += 'message-own';
            else if (message.type === 'response') itemClass += 'message-response';
            else if (message.type === 'typing') itemClass += 'message-typing';

            return (
            <div className={itemClass} key={message.id}>
                <div className="message-header">
                <span className="message-author">{message.from.name}</span>
                <span className="message-time">{message.time}</span>
                </div>
                
                {/* Если это typing, показываем индикатор, иначе текст */}
                {message.type === 'typing' ? (
                <div className="typing-indicator">
                    <span>печатает...</span>
                </div>
                ) : (
                <div className="message-bubble">
                    {message.text}
                </div>
                )}
            </div>
            );
        })}
        </div>
    );
}