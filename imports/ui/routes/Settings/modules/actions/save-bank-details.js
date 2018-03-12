import { toastr } from 'react-redux-toastr';

import { SET_CURRENT_USER } from '../../../../wrappers/PrivateApp/modules';
import { requires2FA } from '../../../../components/Requires2FA/modules/actions';

// Saves bank details changes
const saveBankDetails = updates => {
  return (dispatch, getState) => {
    const { currentUser } = getState().app;

    currentUser.updateBankDetails(updates, (err, user) => {
      if (err) {
        toastr.error('Error', err.reason);
      } else {
        dispatch({ type: SET_CURRENT_USER, user });
        toastr.success('Success', 'Your bank details have been saved');
      }
    });
  };
};

export default requires2FA(saveBankDetails);
