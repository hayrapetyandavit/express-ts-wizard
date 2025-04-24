import execa from "execa";
import fs from "fs/promises";
import path from "path";

const APP_NAME = "test-app";
const DEST_DIR = path.join(process.cwd(), APP_NAME);

describe("create-app CLI", () => {
  beforeAll(async () => {
    // Clean up if the folder already exists
    try {
      await fs.rm(DEST_DIR, { recursive: true, force: true });
    } catch (err) {
      // Ignore errors if the folder does not exist
    }
  });

  it("should execute the create-app script successfully", async () => {

    const result = await execa("./bin/create-app.sh", [APP_NAME], {
      input: "n\n", // Simulate user input for "Do you want to install dependencies? (y/N):"
    });
    expect(result.exitCode).toBe(0);
    expect(result.stdout).toContain("🚀 express application created successfully");

    const dirExists = await fs.stat(DEST_DIR).then(() => true).catch(() => false);
    expect(dirExists).toBe(true);
  });

  afterAll(async () => {
    // Clean up after test
    await fs.rm(DEST_DIR, { recursive: true, force: true });
  });
});
