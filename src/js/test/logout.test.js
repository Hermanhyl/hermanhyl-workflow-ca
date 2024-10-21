import { logout } from "../api/auth/logout.js";
import { remove } from "../storage";

jest.mock(`../storage/remove.js`, () => ({
  remove: jest.fn(),
}));

describe(`logout`, () => {
  test(`clears token from localstorage`, () => {
    logout();
    expect(remove).toHaveBeenCalledWith(`token`);
    expect(remove).toHaveBeenCalledWith(`profile`);
  });
});
