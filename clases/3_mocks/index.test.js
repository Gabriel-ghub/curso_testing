import { getTitles } from "./index.js";

import { describe, test, expect, vi } from "vitest";

import { getPosts } from "/services/posts.js";

vi.spyOn();

describe("getTitles", () => {
  test("Debería devolver los titulos de los psts", async () => {
    getPosts.mockResolvedValue([{ title: "Post 1" }, { title: "Posts 2" }]);
    const titles = await getTitles();
    expect(titles).toEqual([{ title: "Post 1" }, { title: "Posts 2" }]);
  });
});
