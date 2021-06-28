'use strict';

//using this to generate the games/genres joins table
const list = [[`PC/Xbox One/PS4`,`Warzone `],[`PC/Xbox One/PS4`,`HyperScape`],[`PC/Xbox One/PS4`,`Apex Legends`],[`PC/Xbox One/PS4/Mobile`,`PlayerUnknown's Battlegrounds`],[`PC/Xbox One/PS4/Mobile/Switch`,`Fornite`],[`PC/Xbox One/PS4/Switch`,`Realm Royale`],[`PC/Xbox One/PS4`,`Z1 Battle Royale`],[`PC/Mobile`,`Hearthstone`],[`PC/Mobile`,`Legends of Runeterra`],[`PC/Xbox One/PS4/Mobile/Switch`,`Slay the Spire `],[`PC`,`Magic: The Gathering Arena `],[`PC`,`Poker`],[`PC`,`Solitaire`],[`PS2`,`Yu gi oh forbidden memories`],[`PC/Xbox One/PS4/Mobile/Switch`,`BLOONS `],[`PC/Xbox 360/PS3/Mobile`,`Plants Vs. Zombies`],[`PC/Mobile`,`GemCraft`],[`PC/Xbox 360/Mobile`,`Defense grid`],[`PC/Mobile`,`Kingdom rush`],[`PC`,`DeathTrap`],[`PC/Mobile`,`RUNESCAPE`],[`PC`,`World of Warcraft`],[`PC/Xbox One/PS4/Switch`,`Trove`],[`PC/Xbox One/PS4`,`NeverWinter`],[`PC`,`Final Fantasy XIV`],[`PC`,`Guild Wars 2 `],[`PC/Xbox One`,`Sea of Thieves`],[`PC/Xbox One/PS4/Mobile/Switch`,`Among us`],[`PC/Xbox One/PS4/Switch`,`OverCooked 2 `],[`PC`,`Pummel Party `],[`PC/Mobile`,`JackBox`],[`Switch`,`Super Mario party `],[`PC/Xbox One/PS4`,`Gang Beast `],[`Xbox`,`Fuzion Frenzy`],[`PC/Xbox One/PS4`,`Call of Duty: Modern Warfare(2019)`],[`PC/Xbox 360/PS3`,`Call of Duty: Modern Warfare 2(2009)`],[`PC/Xbox 360/PS3`,`Call of Duty: Black Ops 2(2012)`],[`PC/Xbox One/PS4`,`Call of Duty: Black Ops Cold War(2020)`],[`PC`,`BattleField 2 (2005)`],[`Xbox 360/PS3`,`BattleField: Bad Company(2008)`],[`PC/Xbox 360/PS3`,`BattleField 4 (2013)`],[`PC/Xbox Series/PS5`,`BattleField 2042(2021 soon)`],[`PC/Xbox 360/PS3`,`Payday2`],[`PC/Xbox 360/PS3`,`Team Fortress 2`],[`PC`,`Valorant `],[`PC/Xbox 360`,`Left 4 Dead 2`],[`PC/Xbox 360/PS3`,`CS:GO (Counter-Strike: Global Offensive)`],[`PC`,`Escape from Tarkov`],[`PC/Xbox One/PS4`,`Overwatch`],[`PC/Xbox One/PS4`,`Rainbow Six Siege`],[`PC/Xbox`,`Halo`],[`PC/Xbox One/PS4`,`Destiny 2`],[`PC/SNES`,`Doom`],[`PC`,`Civilization 5`],[`PC`,`Chess`],[`PC`,`Checkers`],[`PC/Mobile`,`Team Fight Tactics`],[`PC/Xbox One/PS4/Mobile/Switch`,`XCOM 2`],[`Mobile`,`Clash Royale`],[`Mobile`,`Clash of Clans `],[`PC/Xbox 360/PS3/Mobile/Switch`,`Terraria`],[`PC`,`Valheim`],[`PC/Xbox One/PS4/Mobile/Switch`,`Dont Starve`],[`PC/Xbox One/PS4/Mobile/Switch`,`This War of Mine`],[`PC/Xbox One/PS4/Mobile/Switch`,`Ark: Survival Evolved`],[`PC`,`Scum`],[`PC/Xbox One/PS4`,`Rust`],[`PC/Xbox One/PS4`,`Subnautica`],[`PC/Xbox One/PS4/Switch`,`The Long Dark `],[`PC/Xbox One/PS4`,`Astroneer`],[`PS2`,`Fatal Frame`],[`Xbox One/PS4/Switch/PC`,`Outlast`],[`PS4/Xbox One/Switch/PC`,`Amnesia: the Dark Descent`],[`Xbox One/PS4/Switch/PC`,`Layers of Fear`],[`PC/Xbox One/PS4/Switch`,`Scratches`],[`PC/PS3/Xbox360`,`F.E.A.R`],[`PC`,`Penumbra`],[`Xbox360/PC`,`Condemned: Criminal Origins`],[`PC`,`System Shock 2`],[`PS3/Xbox360/PC`,`Dead Space`],[`PS4/Xbox One/Switch/PC`,`Little Nightmares`],[`PC`,`Deponia`],[`PC`,`Sam & Max`],[`PC`,`The Secret of Monkey Island`],[`PC`,`Edna & Harvey: Harvey's New Eyes`],[`PC`,`Machinarium`],[`PC`,`Puzzle Agent`],[`PC`,`Day of the Tentacle`],[`PS3/PC`,`Guilty Gear Xrd -REVELATOR-`],[`PS3/Switch/PC`,`BlazBlue: Centralfiction`],[`PS3/Xbox 360/PC`,`Street Fighter 4`],[`PS4/Xbox One/PC`,`Lethal League Blaze`],[`PS4/Xbox One/PC`,`Nidhogg 2`],[`PS3/Xbox 360/PC`,`Skullgirls`],[`PS3/Xbox 360`,`Tekken Tag 2`],[`PS2`,`Bloody Roar 4`],[`PC`,`Dwarf Fortress`],[`PC/Xbox One/PS4/Switch`,`Cities: Skylines`],[`PC`,`Rimworld`],[`PC/Xbox360`,`Tropico 4`],[`Switch/PC`,`My Lovely Daughter`],[`PC/PS4/Xbox One/Switch`,`Punch Club`],[`PC`,`Recettear: An Item Shop's Tale`],[`PC`,`Kenshi`],[`PC`,`Factorio`],[`PSP/PC/Switch`,`Danganronpa`],[`PC/PS4/Xbox One/Switch`,`Phoenix Wright`],[`PC/PS4/Switch`,`VA-11 Hall-A`],[`PC`,`Long Live the Queen`],[`PC/Switch`,`Subsurface Circular`],[`PC`,`The Warlock of Firetop Mountain`],[`PS4/PC`,`Zero Escape: The Nonary Games`],[`PC/PS3/Xbox360/Switch`,`Minecraft`],[`PS4/Xbox One/PC`,`Kerbal Space Program`],[`PC/Xbox One`,`Besiege`],[`PC`,`The Sims`],[`PC/Xbox One/PS4/Switch`,`LEGO: Worlds`],[`PC/Xbox One/PS4/Switch`,`Roblox`],[`PC`,`Garry's Mod`],[`PC`,`The Binding of Isaac`],[`PC/PS4/Xbox One/Switch`,`Enter the Gungeon`],[`PC`,`Caves of Qud`],[`PC/Mobile/Switch/PS4/Xbox One`,`Death Road To Canada`],[`PC`,`Heat Signature`],[`PS3/PC`,`Rogue Legacy`],[`Mobile/PC`,`Sproggiwood`],[`PC`,`Rogue`],[`PS1`,`R-Type`],[`SNES/PC/Genesis`,`Raiden`],[`NES`,`Twin Bee`],[`PC`,`Embodiment of Scarlet Devil`],[`PC/PS4/Switch`,`Jamestown`],[`PC`,`Super Galaxy Squadron EX Turbo`],[`NES`,`1942`],[`PC`,`League of Legends`],[`PC`,`Heroes of The Storm`],[`PC`,`Dota 2`],[`PC`,`Smite`],[`PC`,`Heroes of Newerth`],[`Mobile`,`League of Legends: Wild Rift`],[`PC/ Xbox One`,`Battlerite`],[`Switch`,`The Legend of Zelda: Breath of the Wild`],[`PC /PS3 /Xbox 360/ Switch`,`The Elder Scrolls V: Skyrim`],[`PC/ PS3/ Xbox 360`,`Assassin's Creed: Brotherhood`],[`PC/ PS4/ Xbox One`,`Red Dead Redemption 2`],[`PC/ PS4/ Xbox One`,`The Witcher 3: Wild Hunt`],[`PC/ PS4`,`Horizon Zero Dawn`],[`PC/ PS4/ Xbox One`,`No Man's Sky`],[`PC/ PS3/ Xbox 360`,`Portal 2`],[`PC/ PS3/ Xbox 360/ Switch/ Mobile`,`Fez`],[`PC/ PS4/ Xbox One/ Switch/ Mobile`,`Braid`],[`PC/ PS3/ Xbox 360/ Wii U`,`Trine 2`],[`PS3/ Wii U`,`Puyo Puyo Tetris`],[`PC/ Switch/ PS4/ Xbox One`,`Untitled Goose Game`],[`PC/ Switch/ PS4/ Xbox One`,`Death Squared`],[`PC/ Switch/ Mobile`,`The Room`],[`PC/ Xbox One/ Switch`,`Ori and the Blind Forest`],[`PC/ Switch/ PS4/ Xbox One`,`Celeste`],[`Xbox 360`,`Super Meat Boy`],[`SNES`,`Donkey Kong Country`],[`Nintendo 64`,`Super Mario 64`],[`Nintendo 64`,`Banjo-Kazooie`],[`PS3/ Xbox 360`,`Sonic the Hedgehog(2006)`],[`PC/ PS4/ Xbox One/ Switch`,`Crash Bandicoot N. Sane Trilogy`],[`PC/ PS4/ Xbox One/ Switch`,`Spyro Reignited Trilogy`],[`PC`,`Goat Simulator`],[`PC`,`Euro Truck Simulator 2`],[`PC/ Xbox One/ PS4`,`Cities: Skylines`],[`PC`,`Farming Simulator 19`],[`PC`,`PowerWash Simulator`],[`PC/ Xbox One/ PS4`,`The Sims 4`],[`PC/ Xbox One/ PS4/ Switch`,`Two Point Hospital`],[`PC/ PS4/ Xbox One`,`Metal Gear Solid V: The Phantom Pain`],[`PC/ PS3/ Xbox 360`,`Dishonored`],[`PC/ PS3/ Xbox 360`,`Hitman: Absolution`],[`PC/ PS2/ Xbox/ GameCube`,`Tom Clancy's Splinter Cell `],[`PC`,`Thief: The Dark Project`],[`PC/ Xbox`,`The Chronicles of Riddick: Escape from Butcher Bay`],[`PC`,`Mark of the Ninja`],[`PS3`,`Uncharted: Drake's Fortune`],[`PS1`,`Tomb Raider`],[`PC/ PS3/ Xbox 360`,`Far Cry 2`],[`Xbox 360`,`Gears of War 2`],[`PC/ PS3`,`Yakuza 0`],[`PC/ PS3/ Xbox 360`,`Saints Row: The Third`],[`Xbox 360/ PS3`,`Bayonetta`],[`PS2`,`Dynasty Warriors 2`],[`PC/ Xbox 360/ PS3`,`Peggle`],[`PC/ PS4`,`Grow Home`],[`Switch`,`Animal Crossing: New Horizons`],[`PC/ PS4/ Xbox One`,`Abzû`],[`PC/ PS4/ Xbox One/ Switch`,`Stardew Valley`],[`PC`,`Bejeweled 3`],[`PS3`,`Little Big Planet`],[`PSone`,`Parasite Eve`],[`Xbox One/PS4`,`Persona 5`],[`PSone`,`Legend of Dragoon`],[`PS2`,`Kingdom Hearts 2`],[`PS2`,`Final Fantasy XII`],[`Xbox`,`Fable`],[`SNES`,`Legend of Mana`],[`Gamecube`,`Tales of Symphonia`],[`PS2`,`Star Ocean Till the End of Time`],[`Xbox`,`Star Wars Knights of the Old Republic`],[`PS2`,`Rogue Galaxy`],[`PC`,`Myst`],[`PS2`,`Ratchet and Clank`],[`N64`,`Legend of Zelda Ocarina of Time`],[`PSone`,`Spyro the Dragon`],[`PS3/Xbox 360`,`Assassins Creed Rogue`],[`PS3/Xbox 360`,`Bioshock Infinite`],[`PS3/Xbox 360`,`Red Dead Redemption`],[`PS2/PS3/Xbox 360`,`Tomb Raider Anniversary`],[`PS3`,`Uncharted 2 Among Thieves`],[`PS3/Xbox 360`,`Catherine`],[`PSone`,`Gex 3 Deep Cover Gecko`],[`PS2/ Xbox`,`Need for Speed Underground 2`],[`SNES`,`F-Zero`],[`N64`,`Mario Kart 64`],[`PS2/ Gamecube/ Xbox`,`Burnout 2: Point of Impact`],[`PSone`,`Crash Team Racing`],[`Xbox 360`,`Forza Horizon`],[`PSone`,`Jet Moto`],[`N64`,`Diddy Kong Racing`],[`PSone`,`Wipeout`],[`PSone`,`Gran Turismo 2`],[`PS3/ Xbox 360`,`Rock Band`],[`PS2`,`Guitar Hero`],[`PS2`,`Dance Dance Revolution Extreme`],[`PSone`,`PaRappa the Rapper`],[`Dreamcast`,`Space Channel 5`],[`PS3/ Xbox 360`,`Rocksmith`],[`Switch/ PS4`,`Crypt of the NecroDancer`],[`PS4 / PC`,`Beat Saber`],[`PS2/ PS3/ Wii`,`DJ Hero`],[`PSone`,`Um Jammer Lammy`],[`PSP`,`Patapon`],[`PC`,`osu!`],[`DS`,`Elite Beat Agents`],[`PC/ N64`,`StarCraft II`],[`PC`,`Age of Empires II Definitive Edition`],[`PC`,`Age of Mythology`],[`PC`,`Warcraft III`],[`PC`,`Command and Conquer: Red Alert 3`],[`PC`,`Lord of the Rings Battle for Middle-Earth II`],[`PC`,`Total War Medieval II Definitive Edition`],[`PC`,`Halo Wars Definitive Edition`],[`PC`,`WarHammer 40,000 Gladius Complete Edition`],[`PC/ PS4/ Xbox one`,`They are Billions`],[`Sega Genesis`,`Streets of Rage`],[`SNES/ Sega Genesis`,`Final Fight`],[`NES/ Sega Genesis`,`Double Dragon`],[`SNES`,`Teenage Mutant Ninja Turtles: Turtles in Time`],[`PS3 / Xbox 360`,`Scott Pilgrim vs. the World: the Game`],[`Sega Genesis`,`Golden Axe`],[`PS2`,`God of War`],[`PS2`,`Devil May Cry 3`],[`SNES`,`Legend of the Mystical Ninja`],[`Gamecube / PS2`,`Viewtiful Joe`],[`PS4/ Xbox one`,`Batman Arkham Knight`],[`PS4 / Xbox One`,`Rocket League`],[`Gamecube`,`Super Mario Strikers`],[`Wii`,`Wii Sports`],[`SNES/ Sega Genesis`,`NBA Jam`],[`N64 / PSone / PC`,`NFL Blitz`],[`PS4 / Xbox One / PC`,`Madden NFL 21`],[`PS2 / Gamecube / Xbox`,`NBA Street`],[`PSone`,`Tony Hawk's Pro Skater 2`],[`Switch`,`Mario Tennis Aces`],[`PS4 / Xbox One`,`NHL 21`],[`PS2`,`Katamari Damacy`],[`Dreamcast`,`Jet Set Radio`],[`Sega Saturn`,`Nights into Dreams`],[`Sega Genesis`,`Toejam and Earl`],[`Dreamcast`,`Seaman`],[`PS3`,`Flow`],[`PSP`,`Me and My Katamari`]];

let newList = [];

const nesregex = new RegExp('[^sS]NES');
const xboxregex = new RegExp('Xbox');

for(let i=0;i<list.length;i++){
    if(list[i][0].includes("PC"))
        newList.push({gameId: (i+1), systemId: `1`});
    if(list[i][0].includes("PS5"))
        newList.push({gameId: (i+1), systemId: `2`});
    if(list[i][0].includes("PS4"))
        newList.push({gameId: (i+1), systemId: `3`});
    if(list[i][0].includes("PS3"))
        newList.push({gameId: (i+1), systemId: `4`});
    if(list[i][0].includes("PS2"))
        newList.push({gameId: (i+1), systemId: `5`});
    if(list[i][0].includes("PS1"))
        newList.push({gameId: (i+1), systemId: `6`});
    if(list[i][0].includes("Series"))
        newList.push({gameId: (i+1), systemId: `7`});
    else if(list[i][0].includes("One"))
        newList.push({gameId: (i+1), systemId: `8`});
    else if(list[i][0].includes("360"))
        newList.push({gameId: (i+1), systemId: `9`});
    else if(list[i][0].includes("Xbox")) //jank
        newList.push({gameId: (i+1), systemId: `10`});
    if(list[i][0].includes("Switch"))
        newList.push({gameId: (i+1), systemId: `11`});
    if(list[i][0].includes("Wii U")) //wiiU vs Wii U?
        newList.push({gameId: (i+1), systemId: `12`});
    if(list[i][0].includes("Gamecube"))
        newList.push({gameId: (i+1), systemId: `13`});
    if(list[i][0].includes("SNES"))
        newList.push({gameId: (i+1), systemId: `14`});
    else if(list[i][0].includes("NES")) //jank
        newList.push({gameId: (i+1), systemId: `15`});
    if(list[i][0].includes("Genesis"))
        newList.push({gameId: (i+1), systemId: `16`});
    if(list[i][0].includes("Saturn"))
        newList.push({gameId: (i+1), systemId: `17`});
    if(list[i][0].includes("Dreamcast"))
        newList.push({gameId: (i+1), systemId: `18`});
    if(list[i][0].includes("DS"))
        newList.push({gameId: (i+1), systemId: `19`});
    if(list[i][0].includes("PSP"))
        newList.push({gameId: (i+1), systemId: `20`});
}


module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Games-by-systems', newList, {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
