const sorting = require("../../app");

describe("Books names test suit", () => {
  it("Books names should be sorted in ascending order", () => {
    expect(
      sorting.sortByName([
        "Гарри Поттер",
        "Властелин Колец",
        "Волшебник изумрудного города",
      ])
    ).toEqual([
      "Властелин Колец",
      "Волшебник изумрудного города",
      "Гарри Поттер",
    ]);
  });

  it("Empty array returns empty array", () => {
    expect(sorting.sortByName([])).toEqual([]);
  });

  it("Undefined input returns empty array", () => {
    expect(sorting.sortByName()).toEqual([]);
  });

  it("Sort works when first element is greater than second", () => {
    expect(
      sorting.sortByName([
        "Б",
        "А"
      ])
    ).toEqual([
      "А",
      "Б"
    ]);
  });

  it("Sort works when elements are equal", () => {
    expect(
      sorting.sortByName([
        "А",
        "А"
      ])
    ).toEqual([
      "А",
      "А"
    ]);
  });
});
