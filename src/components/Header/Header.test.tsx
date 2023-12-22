import {render} from "@testing-library/react";
import Header from "./Header";

describe('Header', () => {
  test('render', () => {
    const { container} = render(<Header />)
    expect(container).toMatchSnapshot()
  })
})
