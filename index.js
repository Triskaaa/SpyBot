 const aoijs = require('aoi.js');

 const bot = new aoijs.Bot({
   token: "VOTRE TOKEN", // mettez le token de votre bot
   prefix: "VOTRE PREFIXE"
 });


bot.onMessage()

// CONFIGURATION
bot.variables({
  channel: "" // salon ou vous voulez que les logs apparaissent
})

bot.readyCommand({
    channel: "$getVar[channel]",
    code: `$log[Ready on client : $userTag[$clientID]
  
----
  
Lien d'invitation du bot : https://discord.com/api/oauth2/authorize?client_id=$clientID&permissions=8&scope=bot
   
----
]
Ready on client : $userTag[$clientID]
  
----
  
Lien d'invitation du bot : https://discord.com/api/oauth2/authorize?client_id=$clientID&permissions=8&scope=bot
   
----

`
})

bot.command({
  name: "$alwaysExecute",
  code: `$log[      
----
       
Message de : $username
Serveur : $serverName
ID : $authorID
Message : $message
Invite : 
$getServerInvite]

$channelSendMessage[$getVar[channel];      
----
       
Message de : $username
Serveur : $serverName
ID : $authorID
Message : 
\`\`\`$message\`\`\`
Invite : 
$getServerInvite]`
})

bot.banAddCommand({
channel: "$getVar[channel]",
code: `$log[   
----

Utilisateur Banni
Serveur : $serverName
User : $username
ID : $authorID]
   
----

Utilisateur Banni
Serveur : $serverName
User : $username
ID : $authorID` // your code
})

bot.readyCommand({
channel: "$getVar[channel]",
code: `$log[Fetching invites...
  ]
Fetching invites...
  
$forEachGuild[inv]
`
})

bot.awaitedCommand({
name: "inv",
code: `$log[- Invite : $getServerInvite ($serverName)]

$channelSendMessage[$getVar[channel];- Invite : $getServerInvite ($serverName)]`
})

