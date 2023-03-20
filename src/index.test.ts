import { formatDate } from '.';

test('should be ok.', () => {
  expect(1).toBe(1)
})

beforeEach(() => {
  jest.useFakeTimers();
  jest.setSystemTime(new Date("2023-03-20"));
});

afterEach(() => {
  jest.useRealTimers();
});

test("should be 2023/03/20.", () => {
  expect(formatDate(new Date())).toBe("2023/03/20");
});