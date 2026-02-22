const groupMenu = `
╭─────『 *Group Management* 』
│ .add [number]
│ .kick / .remove @user
│ .promote @user
│ .demote @user
│ .ban @user
│ .unban @user
│ .warn @user [reason]
│ .unwarn / .resetwarn @user
│ .warnlist / .warnings
│ .approve [all/number]
│ .reject [all/number]
│ .delete (reply to msg)
│ .mute
│ .unmute
│ .open
│ .close
╰──────────────────

╭─────『 *Group Settings* 』
│ .setgname [name]
│ .setgdesc [description]
│ .setgpp (reply img)
│ .link
│ .resetlink
│ .revoke
│ .welcome (On/Off)
│ .goodbye (On/Off)
│ .greet (On/Off)
│ .left (On/Off)
│ .events (On/Off)
╰──────────────────

╭─────『 *Protection* 』
│ .antilink (On/Off)
│ .antibadword (On/Off)
│ .antitag (On/Off)
│ .antisticker (On/Off)
│ .antidemote (On/Off)
╰──────────────────

╭─────『 *Group Tools* 』
│ .tagall [message]
│ .tag [message]
│ .hidetag [message]
│ .tagnoadmin [message]
│ .mention [message]
│ .groupinfo
│ .admins
│ .vcf (export contacts)
│ .leave
│ .clear
╰──────────────────`

module.exports = groupMenu
