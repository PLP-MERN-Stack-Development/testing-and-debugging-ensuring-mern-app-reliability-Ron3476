const { formatDate } = require('../../src/utils/formatDate');

describe('formatDate', () => {
  test('formats ISO date to YYYY-MM-DD', () => {
    const input = '2024-02-10T12:00:00Z';
    expect(formatDate(input)).toBe('2024-02-10');
  });

  test('returns null for falsy input or invalid date', () => {
    expect(formatDate(null)).toBeNull();
    expect(formatDate('not-a-date')).toBeNull();
  });
});
