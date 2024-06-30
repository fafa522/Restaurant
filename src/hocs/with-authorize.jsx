import { useCurrentUser } from '../contexts/user';

export const WithAuthorize = ({ Authorized, Unauthorized }) => {
  const WithAuthorizeCheck = (props) => {
    const { user } = useCurrentUser();
    const isAuthorized = user;

    return isAuthorized ? (
      <Authorized {...props} />
    ) : (
      <Unauthorized {...props} />
    );
  };
  return WithAuthorizeCheck;
};
