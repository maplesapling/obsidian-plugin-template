# Obsidian Sample Plugin

This is a sample plugin for [Obsidian](https://obsidian.md), simplified from the
[original template](https://github.com/obsidianmd/obsidian-sample-plugin).

Setup steps:

- On github.com, click the "use this template" button for this repo, then "create a new repository."
  Provide an owner and name for your new repo.

- Create a new Obsidian vault folder using your new repo as a plugin:

  ```
  mkdir dev_vault/.obsidian/plugins
  cd dev_vault/.obsidian/plugins
  git clone https://github.com/<owner_name>/<repo_name>
  ```

- Setup NPM packages and compile `main.ts` to JavaScript:

  ```
  cd <your_repo>
  npm install
  npm run dev
  ```

- Update info for your new plugin in `manifest.json` and `LICENSE`.

- Rename the class in `main.ts`.

- Open the `dev_vault` folder in Obsidian and activate your new plugin.

- (Recommended) Install the https://github.com/pjeby/hot-reload plugin:
  ```
  # Press Ctrl+C to end the last npm command
  cd ..
  git clone https://github.com/pjeby/hot-reload
  ```
  Then in Obsidian, refresh the plugin list and activate "Hot Reload".

- Press Ctrl + Shift + I to bring up the Chromium debug console. On the console tab, "Hello world"
  should be visible.

- Replace this readme with info about your plugin.
