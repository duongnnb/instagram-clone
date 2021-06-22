import { memo } from 'react';
import useUser from '../../hooks/use-user';
import Suggestion from './suggestion';
import User from './user';

const Sidebar = () => {
  const { user: { fullName, username, userId } = {} } = useUser();

  return (
    <div className="p-4">
      <User username={username} fullName={fullName} />
      <Suggestion userId={userId} />
    </div>
  );
};

export default memo(Sidebar);

Sidebar.whyDidYouRender = true;
