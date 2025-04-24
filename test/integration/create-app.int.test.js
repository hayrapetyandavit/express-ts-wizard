import execa from "execa";
import fs from "fs/promises";
import path from "path";

const APP_NAME = "test-app";
const DEST_DIR = path.join(process.cwd(), APP_NAME);
const scriptPath = path.join(__dirname, "create-app.sh");

describe("create-app CLI", () => {
  beforeAll(async () => {
    // Clean up if the folder already exists
    try {
      await fs.rm(DEST_DIR, { recursive: true, force: true });
    } catch (err) {
      // Ignore errors if the folder does not exist
    }
  });

  afterAll(async () => {
    // Clean up after test
    await fs.rm(DEST_DIR, { recursive: true, force: true });
  });

  it("should execute the create-app script successfully", async () => {
    
  });
});
