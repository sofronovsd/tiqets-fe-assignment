import {render, screen, waitFor} from "@testing-library/react";
import Dropdown from "./Dropdown";
import React from "react";

describe('Dropdown', () => {
  test('render component with options', async () => {
    const { container} = render(
      <Dropdown
        label="City"
        options={['Amsterdam', 'Rotterdam']}
        onChange={jest.fn()}
        disabled={false}
      />
    )
    const options = screen.getAllByRole('option');
    expect(options.length).toBe(2)
    expect(screen.getByText('Amsterdam')).toBeVisible();
    expect(screen.getByText('Rotterdam')).toBeVisible();
  })
})
