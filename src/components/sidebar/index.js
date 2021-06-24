import { useContext } from 'react';
import LoggedInUserContext from '../../context/logged-in-user';
import Suggestion from './suggestion';
import User from './user';

const Sidebar = () => {
  const { user: { docId = '', fullName, username, userId, following } = {} } =
    useContext(LoggedInUserContext);

  return (
    <div className="p-4">
      <User username={username} fullName={fullName} />
      <Suggestion userId={userId} following={following} loggedInUserDocId={docId} />
    </div>
  );
};

export default Sidebar;

// Sidebar.whyDidYouRender = true;
