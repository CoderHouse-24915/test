import { render } from "@testing-library/react";

import "@testing-library/jest-dom";
import Header from "./Header";

it("Should render with text", () => {
  const title = "Testing";
  const view = render(<Header title={title} />);

  // console.log(view);
  expect(view.container).toHaveTextContent(title);
});
