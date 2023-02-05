import ShayoItemSheet from "./sheets/shayoitemsheet.js";

Hooks.once("init", () => {
    console.log(`Shayo || init système`);
    Items.unregisterSheet("core", ItemSheet);
    Items.registerSheet("shayo-foundry", ShayoItemSheet, { makeDefault: true });
})