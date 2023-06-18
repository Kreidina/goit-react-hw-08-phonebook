export const selectContacts = state => state.contacts.items;
export const selectFilter = state => state.filter;
export const selectIsLoading = state => state.contacts.isLoading;

export const selectVisibleContacts = state => {
  const contacts = selectContacts(state);
  const filter = selectFilter(state);
  const normalizeFilter = filter.toLowerCase();
  const visibleContact = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizeFilter)
  );
  const visibleNumber = contacts.filter(contact =>
    contact.number.includes(filter)
  );

  if (isNaN(Number(normalizeFilter))) {
    return visibleContact;
  } else {
    return visibleNumber;
  }
};
