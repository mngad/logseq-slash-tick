function main () {
  logseq.Editor.registerSlashCommand("✔️ tick", async () => {
    await logseq.Editor.insertAtEditingCursor("✔️");
  });
}

// bootstrap
logseq.ready(main).catch(console.error)
