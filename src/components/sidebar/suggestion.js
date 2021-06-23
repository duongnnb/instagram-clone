import { useState, useEffect, Profiler } from 'react';
import PropTypes from 'prop-types';
import Skeleton from 'react-loading-skeleton';
import { getSuggestedProfiles } from '../../services/firebase';
import SuggestedProfile from './suggested-profile';

export default function Suggestion({ userId, following, loggedInUserDocId }) {
  const [profiles, setProfiles] = useState(null);

  useEffect(() => {
    async function suggestedProfiles() {
      const response = await getSuggestedProfiles(userId, following);
      console.log(response);
      setProfiles(response);
    }
    if (userId && following) {
      suggestedProfiles();
    }
  }, [userId]);

  if (!profiles) return <Skeleton count={5} height={150} />;

  return profiles.length > 0 ? (
    <div className="rounded flex flex-col">
      <div className="text-sm flex items-center  mb-2">
        <p className="font-bold text-gray-base">Suggestion for you</p>
      </div>
      <div className="mt-4 grid gap-5">
        {profiles.map((profile) => (
          <SuggestedProfile
            key={profile.docId}
            profileDocId={profile.docId}
            username={profile.username}
            profileId={profile.userId}
            userId={userId}
            loggedInUserDocId={loggedInUserDocId}
          />
        ))}
      </div>
    </div>
  ) : null;
}

Suggestion.propTypes = {
  userId: PropTypes.string,
  following: PropTypes.array,
  loggedInUserDocId: PropTypes.string,
};
