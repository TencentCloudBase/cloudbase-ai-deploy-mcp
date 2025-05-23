#!/usr/bin/env node

import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import { registerEnvTools } from "./tools/env.js";
import { registerFileTools } from "./tools/file.js";
import { registerFunctionTools  } from "./tools/functions.js";
import { registerDatabaseTools } from "./tools/database.js";
import { registerHostingTools } from "./tools/hosting.js";
import { registerDownloadTools } from "./tools/download.js";
import { registerStorageTools } from "./tools/storage.js";

// Create server instance
const server = new McpServer({
  name: "cloudbase-mcp",
  version: "1.0.0",
  capabilities: {
    resources: {},
    tools: {},
  },
});

// Register environment management tools
registerEnvTools(server);

// // Register file management tools
// registerFileTools(server);

// Register database management tools
registerDatabaseTools(server);

// Register hosting management tools
registerHostingTools(server);

// Register function management tools
registerFunctionTools(server);

// Register download tools
registerDownloadTools(server);

// Register storage tools
registerStorageTools(server);

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("TencentCloudBase MCP Server running on stdio");
}

main().catch((error) => {
  console.error("Fatal error in main():", error);
  process.exit(1);
}); 