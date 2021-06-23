import { memo } from 'react';
import useUser from '../../hooks/use-user';
import Suggestion from './suggestion';
import User from './user';

const Sidebar = () => {
  const { user: { docId, fullName, username, userId, following } = {} } = useUser();

  return (
    <div className="p-4">
      <User username={username} fullName={fullName} />
      <Suggestion userId={userId} following={following} loggedInUserDocId={docId} />
    </div>
  );
};

export default memo(Sidebar);

Sidebar.whyDidYouRender = true;
