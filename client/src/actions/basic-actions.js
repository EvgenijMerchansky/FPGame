export const sendToChat = (eventName, textContent) => {

    return {
        meta: { remote: true },
        type: 'CUSTOM_MIDDLEWARE',
        payload: {
            eventName,
            text: textContent.data,
            id: Date.now()
        },
    }
};