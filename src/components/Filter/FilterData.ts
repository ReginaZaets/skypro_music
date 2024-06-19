export type FilterType = {
  title: string;
  value: "author" | "order" | "genre";
};

export const FilterData: FilterType[] = [
  {
    title: "исполнителю",
    // list: [],
    value: "author",
  },
  {
    title: "жанру",
    // list: [],
    value: "genre",
  },
  {
    title: "году выпуска",
    // list: "Order",
    value: "order",
  },
];

export const order = ["По умолчанию", "Сначала новые", "Сначала старые"];
