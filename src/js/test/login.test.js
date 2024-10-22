import { login } from "../api/auth/login";
import { save } from "../storage";

const email = `hermanhyl@noroff.no`;
const password = `Password123`;
const user = `userTest`;
const accessToken = `testAccessToken`;

jest.mock(`../storage/save.js`, () => ({
  save: jest.fn(),
}));

global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () =>
      Promise.resolve({
        accessToken: accessToken,
        user: user,
      }),
  }),
);

describe(`login`, () => {
  test(`the login function stores a token when given valid credentials`, async () => {
    await login(email, password);

    expect(save).toHaveBeenCalledWith(`token`, accessToken);
    expect(save).toHaveBeenCalledWith(`profile`, { user: `userTest` });
  });
});
