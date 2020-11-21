import React from 'react';
import { useUserView } from '../UserHooks';
export const { selectedUser } = useUserView();
export const UserSingleView = () => {
 const { selectedUser } = useUserView();
  return <h1>Single User View</h1>;
},
