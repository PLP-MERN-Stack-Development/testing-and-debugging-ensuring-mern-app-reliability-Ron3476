describe('Auth flow (example)', () => {
  it('visits home and checks ping endpoint', () => {
    cy.request('/api/ping').then((resp) => {
      expect(resp.body.ok).to.eq(true);
    });
  });
});
