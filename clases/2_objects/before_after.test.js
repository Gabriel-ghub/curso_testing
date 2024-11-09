import { afterEach, describe, expect, test } from "vitest";

let box = {};
const store = {
  get: (key) => {
    return box[key];
  },
  set: (key, value) => {
    box[key] = value;
  },
  items: () => {
    return Object.keys(box);
  },
  clear: () => {
    box = {};
  },
};

describe("store", () => {
  //Los after y before, solo se ejecutan dentro del describe.
  afterEach(() => {
    store.clear();
  });
  test("set and get", () => {
    store.set("name", "Gabriel Romero");
    const name = store.get("name");

    expect(name).toBe("Gabriel Romero");
    //Podemos reemplazar esto por el afterEach o beforeEach
    // store.clear();
  });

  test("getItems", () => {
    store.set("name", "Gabriel Romero");
    store.set("name2", "Gabriel Romero");
    const items = store.items();

    expect(items).toHaveLength(2);
    //Podemos reemplazar esto por el afterEach o beforeEach
    // store.clear();
  });
});
