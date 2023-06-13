import { useSelector } from 'react-redux';
import {
  selectIsLoading,
  selectVisibleContacts,
} from 'redux/contacts/selectors';

export const useContacts = () => {
  return {
    isContactsLoading: useSelector(selectIsLoading),
    contacts: useSelector(selectVisibleContacts),
  };
};
