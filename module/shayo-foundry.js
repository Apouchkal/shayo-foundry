import ShayoItemSheet from "./sheets/shayo-item";

Hooks.once("init", () => {
    Items.unregisterSheet("core", ItemSheet);
    Items.registerSheet("shayo-foundry", ShayoItemSheet, { makeDefault: true });
})