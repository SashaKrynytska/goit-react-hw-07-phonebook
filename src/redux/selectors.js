export const selectContacts = state => state.contacts.items;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;
export const selectFilter = state => state.filter;

export const selectFilteredContacts = state => {
  const normalizedFilter = selectFilter(state).toLowerCase();

  return selectContacts(state).filter(contact => {
    return contact.name.toLowerCase().includes(normalizedFilter);
  });
};
