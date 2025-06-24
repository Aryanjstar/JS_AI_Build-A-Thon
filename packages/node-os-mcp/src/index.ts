// File: packages/node-os-mcp/src/index.ts

import "./server"; // This line initializes your server and tools

console.log("MCP server initialized. Keeping process alive...");

// This interval keeps the Node.js program running
// so the MCP server has time to listen for connections.
setInterval(() => {
    // This function does nothing, but it prevents the script from exiting.
}, 1000 * 60 * 60); // An empty timer that runs once per hour