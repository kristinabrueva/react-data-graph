import { render } from "@testing-library/react";
import BarChart from "./BarChart";

test("renders chart", () => {
  const data = [
    [1, 2, 3],
    [4, 5, 6],
  ];

  const { container } = render(
    <BarChart width={600} height={400} data={data} />
  );
  expect(container).toBeDefined();
  expect(container.getElementsByClassName("chart")).toHaveLength(1);
});
