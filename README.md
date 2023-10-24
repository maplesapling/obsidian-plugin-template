# Obsidian Sample Plugin

This is a sample plugin for [Obsidian](https://obsidian.md), simplified from the
[original template](https://github.com/obsidianmd/obsidian-sample-plugin).

Setup steps:

- On github.com, click the "use this template" button for this repo, then "create a new repository."
  Provide a name and location for your new repo.

- Create a new vault using your new repo as a plugin:

```
mkdir dev_vault/.obsidian/plugins
cd dev_vault/.obsidian/plugins
git clone https://github.com/<your_account>/<your_repo>
```

- Setup NPM packages and compile TypeScript to JavaScript:

```
npm install
npm run dev
```

- Open the `dev_vault` folder in Obsidian and activate the plugin.

- Update info for your new plugin in `manifest.json` and `LICENSE`.

- Rename the class in `main.ts` and start coding.

- Erase everything in this readme.
