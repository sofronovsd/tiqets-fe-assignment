import {render} from "@testing-library/react";
import Footer from "./Footer";

describe('Footer', () => {
  test('render', () => {
    const { container} = render(<Footer />)
    expect(container).toMatchSnapshot()
  })
})
