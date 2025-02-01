# Discord Bot Project

## Overview
This is a Discord bot built using `discord.js`. It includes various commands for moderation, fun, and utility purposes. The bot is designed to interact with users, execute commands, and provide useful functionalities.

## Features
- **Moderation Commands**: Includes `ban`, `kick`, and `report` commands.
- **Fun Commands**: Includes `meme`, `rps` (rock-paper-scissors), and `achievement` commands.
- **Utility Commands**: Includes `ping`, `info`, `note`, and `time` commands.
- **Automatic Responses**: The bot responds to specific messages like "f", "2137", and greetings.
- **Command Handler**: Automatically loads commands from the `commands` directory.
- **Database Integration**: Connects to a MySQL database for storing moderation data.

## Usage
- Use commands with the prefix `.` (e.g., `.ping`, `.ban @user`).
- The bot will respond to specific phrases like `2137`, `Good morning`, etc.
- Moderators can use `.exec` for executing JavaScript code (restricted to certain users).
