import { describe, test, expect } from "vitest";
import { replaceHoistNodePlugin } from "../index";
import { readFile } from "node:fs/promises";
import { resolve, join } from "node:path";
const root = resolve(__dirname, "..");

const p = replaceHoistNodePlugin();
describe("compile test", () => {
  test("test all dir", async () => {
    const file = await readFile(join(root, "/test/fixtures.vue"));
    //@ts-ignore
    const code = p.transform(file.toString(), "./fixtures.vue");
    expect(code).toMatchSnapshot();
  });
});
