import { Plugin } from 'obsidian';

export default class ObsidianPluginTemplate extends Plugin {
    async onload() {
        console.clear();
        console.log('Hello world');
    }
}
