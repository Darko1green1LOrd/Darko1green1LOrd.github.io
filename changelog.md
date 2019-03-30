# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/) ~~and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).~~

## 4.6 (Upcoming)

### Added
- Added suffix to Weather that indicates **Thunder**, **Rain** or **Clear**
- Added options to Trajectories to end on an entity, and to draw a correct centered tracer
- Added Tracers option to Search (i.e. portal tracers)
- Added option to include dropped items in Nametags
- Added TTF option to Nametags
- Added Collate option under Nametags Item Option
  - Will join together item tags so that they become readable
- Added an option "Ignore Dungeons" to StorageESP to not render chests near Mob Spawners ([#995](https://github.com/ImpactDevelopment/ImpactClient/issues/995))
- Added a persistence option to Auto Walk ([#1001](https://github.com/ImpactDevelopment/ImpactClient/issues/1001))
- Added "toggle" and "random" modes for Skin Blinker
- Added option for every model part in Skin Blinker
- Added Tridents to Trajectories
- Added line width option to Trajectories
- Added option to Anti Overlay to hide boss health bars
- Added optional rendering of the target to Crystal Aura (highlighting both to place and to set off) ([#987](https://github.com/ImpactDevelopment/ImpactClient/issues/987))
- Added Lag Meter: notifies you when no packets have been received from the server since a certain amount of time
- Added Durability option to Inventory, to show correct durability in item mouseover tooltip even when damage is negative (e.g. unbreakables) ([#1011](https://github.com/ImpactDevelopment/ImpactClient/issues/1011))
- Added Tamed option to Nametags, to show which player owns tamable mobs ([#909](https://github.com/ImpactDevelopment/ImpactClient/issues/909))

### Changed
- Made complete entity removal in No Render an option
- Made NCP step ensure the player cannot move while it is waiting ticks to step
- Minor tweaks to the Light brightness fade
- Made "Yaw/Pitch Speed" options in Inventory sub-options of "Look Around"
- Made ClickGUI Scale a slider instead of a checkbox, and made it keep old scale while dragging
- Changed minimum AutoReconnect time delay from 2500ms to 200ms

### Fixed
- Fixed breadcrumbs applying across dimensions
- Fixed breadcrumbs not clearing upon dying
- Fixed sky and rain flickering caused by Weather ("Clear" Mode)
- Fixed Trajectories raytracing when an arrow went out of your line of sight ([#962](https://github.com/ImpactDevelopment/ImpactClient/issues/962))
- Fixed Fast Ladder still working in Terrain even when the module is off
- Fixed strange tick rounding in Trajectories
- Fixed Tracers randomly jumping to the other side of the screen when looking close to 90° away from an entity ([#55](https://github.com/ImpactDevelopment/ImpactClient/issues/55))
- Made font loading on initial startup about 3x faster ([#980](https://github.com/ImpactDevelopment/ImpactClient/issues/980))
- Fixed "NullPointerException" disconnects caused by Log Position
- Fixed Unpack not working with iron blocks and instead recognizing iron ore
- Fixed issue with font renderer where italic and bold characters were not accounted for when calculating string width/height
- Fixed Auto Eat right clicking chests and other containers instead of eating
- Fixed Auto Totem crashing when shift clicking your first totem out of a hopper ([#993](https://github.com/ImpactDevelopment/ImpactClient/issues/993))
- Fixed Skin Blinker not working effectively
- Fixed Flight sending No Kick packets that could cause damage
- Fixed the Allow Place suggestion message triggering at the wrong time ([#1006](https://github.com/ImpactDevelopment/ImpactClient/issues/1006))
- Fixed Crosshair+ drawing on top of the normal crosshair
- Fixed Anti Desync sending completely incorrect packets that get flagged immediately and lag you back
- Fixed Velocity's behavior regarding zeroing velocity vs change in velocity ([#1009](https://github.com/ImpactDevelopment/ImpactClient/issues/1009))
- Fixed some Baritone goals not rendering in Radar
- Fixed Anti Desync breaking in singleplayer ([#1043](https://github.com/ImpactDevelopment/ImpactClient/issues/1043))

## 4.5

### Added
- Added a GUI to manage and create [Macros](https://github.com/ImpactDevelopment/ImpactClient/issues/153). A macros system was added in 4.3, but they could only be managed by manually editing the json file.
- Added a color option to Trajectories
- Added error message to Auto Walk "Smart Mode" indicating path calculation failure
- Added a multiplier option to Strafe Speed
- Added Slime option to No Slow
- Added SoulSand option to No Slow
- Added Inventory Open option to Auto Armor
- Added Reverse and Multiplier to horizontal and vertical Velocity options
- Added Chance option to Velocity
- Added Auto Close option to Chest Stealer
- Added Packet Mode to Chest Stealer
  - **Shift**: Shift-clicks items into your inventory
  - **Pickup**: Performs 2 clicks, one to take the item out of the chest, another to put it in your inventory
- Added Placement option for Crystal Aura
- Added GUI that displays if Baritone was not successfully loaded to prevent unexpected behavior
- Added an option to ClickGUI to use Minecraft's GUI scaling
- Adjustable max distance for Tracers
- Separate color for Player entities (Will include others soon)
- Integration with Baritone's processes system for more seamless interaction
- Added Item Frame support to Storage ESP
- Added New Chunks exploit
- Added Suicide option to Crystal Aura
  - **Avoid**: Don't do anything that could kill you
  - **Place**: Place crystals that could kill you
  - **Commit**: Place and hit crystals that could kill you
- Expose all legit mine Baritone options to Auto Mine
- Add Logs to Auto Mine "Bot Mode" default targets
- Added freecam compatibility with everything
  - Thanks leijurv for the scuffed idea of how to do it
  - This means that there should be no conflicts with using Freecam with everything, your "real player" will behave as expected when you're not using Freecam in all circumstances
    - Aka, you can path using Baritone AND use Freecam simultaneously, it's really neat

### Changed
- Changed Ladder Speed in Terrain to have a speed multiplier instead of an obscure speed value
- Changed Category of CrosshairPlus from Misc to Render
- Changed how the Teammate and Friend settings work for ESP and Tracers
  - There are now 3 modes: **Include**, **Restrict**, and **Only**
  - **Include**: Players in this category are included
  - **Restrict**: Players in this category are not included
  - **Only**: Only players in this category are included

### Fixed
- Fixed Minestrike module team check
- Fixed ClickTP sending item interaction packets when teleporting
- Fixed potential `ConcurrentModificationException` in Anti Vanish
- Fixed crash caused by disabling sprint when not in game
- Fixed CrosshairPlus rendering when ``hideGUI`` is true (From pressing F1)
- Fixed Module Mode settings not loading
- Fixed Flight Anti Kick option causing actual teleports to the ground under some circumstances
- Fixed No Slow Item modifier not applying
- Fixed easy way for servers to detect No Rotate
- Sync Preserve Y in Smart Auto Walk with simplifyUnloadedYCoord
- Fixed random quote in Baritone first-time message
- Fixed decimal value instead of integer for the node count in Breadcrumbs
- Fixed the unhelpful usage provided by ``.help baritone``
- Fixed bug that caused some forms of block breaking to be detectable by servers
- Fixed capes still showing after Self Destruct has been activated
- Fixed colossal amount of ``CallbackInfo`` objects being instantiated which could have a considerable memory and performance impact
  - Thank you leijurv for pushing me to actually fix this
- Fixed inconsistent behavior of Anti Hazard's magma option depending on cardinal direction
- Fixed poor animation smoothing for the module list

### Hotfixes
- Fixed not showing Nametags or Tracers for the player while in Freecam ([#944](https://github.com/ImpactDevelopment/ImpactClient/issues/944))
- Fixed Freecam no longer sharing the player's inventory (4.5 regression) ([#946](https://github.com/ImpactDevelopment/ImpactClient/issues/946))
- Fixed Freecam being affected by F5 mode ([#947](https://github.com/ImpactDevelopment/ImpactClient/issues/947))
- Fixed New Chunks ignoring their dimension ([#950](https://github.com/ImpactDevelopment/ImpactClient/issues/950))
- Fixed `.goto` not working as expected ([#948](https://github.com/ImpactDevelopment/ImpactClient/issues/948))
- Freecam will now disable when the real player dies ([#940](https://github.com/ImpactDevelopment/ImpactClient/issues/940))
- Fixed bad team check applying to all combat modules ([#945](https://github.com/ImpactDevelopment/ImpactClient/issues/945))
- Fixed having to run some Baritone commands twice ([#943](https://github.com/ImpactDevelopment/ImpactClient/issues/943))
- Fixed Auto Walk having a higher priority than Baritone processes
- Added Hunt
- Fixed background of Main Menu ([#846](https://github.com/ImpactDevelopment/ImpactClient/issues/846))
- Fixed Font resolution ([#906](https://github.com/ImpactDevelopment/ImpactClient/issues/906))
- Fixed Damn Daniel ([#842](https://github.com/ImpactDevelopment/ImpactClient/issues/842))
- Added a way to secretly close an inventory without telling the server. Inventory -> Secret Close ([#913](https://github.com/ImpactDevelopment/ImpactClient/issues/913))
- Fixed Freecam not being responsive to real player health, hunger, potions, etc. ([#959](https://github.com/ImpactDevelopment/ImpactClient/issues/959))
- Fixed inverted immune check in Kill Aura
- Fixed flowing water check in Jesus
- Fixed a check in Crystal Aura that was off by 1 heart
- Fixed a crash in the Macros GUI when typing without a textbox focused
- Fixed Freecam being unable to break / place blocks ([#938](https://github.com/ImpactDevelopment/ImpactClient/issues/938))
- Fixed Anti Hazard not avoiding cactus, fire, and pressure plates ([#961](https://github.com/ImpactDevelopment/ImpactClient/issues/961))

## 4.4

### Added
- Tower option for Scaffold
- Lethal option for No Fall Bucket mode to only place water when the fall is lethal
- Debug option for Scaffold to allow for better visualization of block placement
- Delay option for Auto Clicker to use 1.9 attack cooldown
  - Also added TPS Sync sub-option to sync swing delay with TPS
- Discord RPC support
- No SRP module, prevents servers from forcing resource packs
- Added name case change exploit as a command (.rename)
- Added ESP color types (Custom, Team, Health)
- Allow Auto Totem to access crafting slots to retrieve Totems
  - Should be combined with Inventory's "Extra Slots" feature
- Added Fancy Chat module to type in alternative latin charsets
- Added command to check fall damage to a block (.falldamage)
  - Checks the fall damage to the block you are looking at
- Added Ping Spoof module
- Added Integration with Baritone
  - Add Auto Mine Bot Mode
  - Add Auto Walk Smart Mode
  - Add Baritone configuration in GUI
  - Made Radar show current calculating and executing path
  - and more!
- Added Bot option to Auto Mine (Automatically mine to ores)
- Added Lava and Portals to Xray by default
- Added Durability option to Item Saver. Ranges from 0-50% where 0% represents 0 durability.
- Added Immune option to Kill Aura. If on, will only attack entities that aren't immune to damage.
- Added Web mode to NoFall, functions the same as Bucket except is able to place webs.
- Added visible ticks option to Minestrike
- Added prioritization modes to Minestrike (Currently world distance and crosshair distance)
- Added aim type to Minestrike, allowing the user to choose when the aimbot should lock on
  - Options are Always and (when) Shooting
- Added "Dolphin" fallback to Jesus Solid mode when flowing is off
- Added a built in color picker to the Click Gui
- Added Block ESP/Search along with a .search command
- Added Extended Tooltips option to Click GUI
  - Will show the name of the component as well as it's description when hovered
- Added ToggleTab
  - Can be enabled/disabled with `.gui toggletab <enable/disable>`
- Added Time widget to HUD
- Added Item Use option to Auto Clicker
  - Toggle the ability to use items and have Auto Clicker work simultaneously
- Added Portal God Mode exploit
- Path option in Radar to make Baritone's current path optional
- Stipple option in Radar to enable/disable path line stippling

### Changed
- Separated horizontal and vertical speed in Freecam
- Changed Fast Interact's Fast Break option from breaking blocks faster to lowering block break delay
- Made latency compensation in the Minestrike module optional
- Xray and Nuker config files will now use namespace block ids instead of numerical
- Moved TPS Sync option to Kill Aura from Delay Mode (The Immune option uses it)
- Made Auto Shoot an option in Minestrike (Was previously on by default)
- Utilize the new Color Picker on all modules with customizable colors
- Keybinds are now saved as strings, improving future compatibility
- Made horizontal and vertical velocity options affect explosions in Velocity module
- Renamed Portal GUI to Portals
  - Added God Mode exploit

### Removed
- Removed Item Physics

### Fixed
- Fixed uncommon crash caused by GuiTextContainingLinks
- Fixed Scaffold not working on NCP due to bad angles
- Fixed Scaffold providing server with suspicious looking packets
- Fixed Scaffold crashing under specific conditions
- Fixed Riding causing boats to bob if the swim option is checked
- Step working when in water or lava
- Fixed enum type values not saving/loading properly
  - Only affected options for HUD module
- Fixed bug with Auto Tool that caused game to crash under specific circumstances
  - Crashed when there was not a valid tool on the hotbar and it has not previously succeeded
- Fixed boat rotation in the Riding module
  - Boats now rotate to the direction that you're looking
  - Fixed "strafing" while in boats
- Fixed Anti Vanish causing the game to crash
- Fixed Flowing option for Jesus Solid mode
- Fixed ColorType values loading with 0 opacity
- Fixed Criticals not working while sprinting
- Fixed issues caused by Fast Render by forcefully disabling it
- Fixed hopper and furnace minecarts not being shown by Storage ESP
- Fixed the ability to execute other commands during spam setup
- Fixed not being able to place end crystals at sky limit (Vanilla bug)
- Fixed Anti Hazard not working on fire
- Fixed rare occurance of server receiving angles that were out of bounds
- Fixed Ignite not breaking blocks that are preventing ignition of targets
- Fixed Auto Eat not working while in a GUI screen
- Fixed Freecam causing kicks on some servers, and in general, not functioning as expected
- Fixed Scaffold not being able to place slabs correctly
- Fixed Scaffold not being able to place blocks off of glass
- Fixed Scaffold not being able to place in positions that are replaceable
- Minor improvements to Crosshair+
- Fixed issue with Self Destruct that did not restore GUIs fully
- Fixed No Slow water option preventing moving up
- Fixed Perspective not having an expected angle change
- Fixed incomplete description of Fire option for Anti Hazard
- Fixed movement input being passed through while in chat and Anti AFK is on
- Fixed lighting bug caused by Shader ESP
- Fixed path rendering in radar not respecting Baritone color settings

## 4.3

### Added
- Button to open Click GUI from the Impact menu
- Ability to open chat while Click GUI is open
- "Main Menu" entry in Click GUI's Render section
  - Toggle using Impact's custom main menu
  - Toggle using Impact's replacement menu wallpaper
- Clickable links and line-wrapping in the MOTD header
- Colored sign text exploit
- Movement speed widget in the HUD
- Customization for suffixes in module list
- Pause option for Click GUI
- Opacity option for Click GUI
- Option to blur background of Click GUI frames
- Option to save logout positions in Log Position
- Rank option for Nametags to show team prefix and suffix
- Catch Delay option for AutoFish (might help with fussy servers)
- Jump option for the strafe speed mode
- Skylight option for light module to prevent skylight lag machines from working
- Totem counter option to Auto Totem
- Auto Break option for nuker
- Origin option for nuker to choose the break origin
- Target option for nuker to choose the blocks targetted
- Filter option for nuker to use the nuker ID list
- Crosshair prioritization mode for Kill Aura
- Swing option for Scaffold
- Shulker Tooltip option for Inventory to change the tooltip length
- Shulker Coallate option for Inventory to group item stacks together in the tooltip
- Option to only shoot when scoped for Minestrike module
- Option to ignore attacking friends for Minestrike module
- Support for offhand in Scaffold
  - Added option to prioritize offhand which is on by default
- Swing option for breaker to show breaking on the client side
- "Reconnect" command that quickly disconnects and reconnects the user from their current server

### Changed
- Use player's team color in Nametags
- AutoFish options should be clearer now
- AutoFish AutoCast is now off by default
- Automatically focus the username field when creating an Alt
- Alts are now stored in a json format to enable future fanciness
- Significantly improve scaffold in all movement directions
- Improve jitter on Auto Clicker
- Added mineplex support for team check
- Freecam is now always in first person view
- Moved Inventory to the Misc category, updated its description and made move an option
- Click GUI menus now stay on the screen at all times
- Click GUI menus are now easier to navigate
  - Clicking the arrows next to modules will open the submen
  - Double clicking the menus will open them (like right click)
  - Move menus around by dragging anywhere within them (hold `Ctrl` or use middle mouse)
- Click GUI's keybind widget now has a tooltip and is easier to use
  - Left click to modify the bind
  - Clicking again (or pressing `Esc` will cancel)
  - Right click to delete/reset the bind
- `.set` command can now use option id as an alternative to name
- Removed all server-side changes (should make singleplayer more stable)

### Removed
- Mode option for nuker

### Fixed
- Absorption not being shown by Nametags
- `.set` command not finding nested options
- Fixed incorrect angle calculations in combat modules
- Incorrect murderer detection on Hypixel's Murder Mystery
- Incorrect murderer detection on PlayMCM
- No Fall Bucket mode getting stuck on the collection stage
- Dolphin Jesus jumping while in GUIs, even when out of water
- Xray GUI arrows not displaying with a transparent background
- Not being able to toggle mods or open Click GUI after toggling fullscreen mode
- Click GUI not always being saved on shutdown
- Issues caused when disabling the Click GUI
- Click GUI not rendering closed menus correctly until they are re-closed
- drop command not targetting correct slots
- Chams affecting models in the alt manager
- Smooth aim targetting incorrect positions
- Friends GUI causing a crash
- Alt GUI having transparent background while in-game
- Some vertical spacing problems with the HUD
- Cycler boxes in Click GUI not properly encasing children
- Freecam causing weird behavior while riding entities
- ChestStealer not functioning as expected
- Forge and Optifine support ~~(probably)~~
- AntiAFK "jump" option not working when a GUI is open
- AutoTool not applying to Nuker
- Fixed Riding "Entity Speed" not applying to boats
- Fixed Scaffold not placing glass blocks
