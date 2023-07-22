figma.showUI(__html__);

figma.notify("This is running in Dev Mode.");

figma.ui.onmessage = (msg) => {
  if (msg.type === "cancel") {
    figma.closePlugin();
  }
};
