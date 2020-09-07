type VerifyUserFn = (user: User, sentValues: User) => boolean;
type User = {
  username: string;
  password: number;
};

const VerifiedUser: VerifyUserFn = (user, sentValues) => {
  return (
    user.password === sentValues.password &&
    user.username === sentValues.username
  );
};
console.log(
  VerifiedUser(
    { password: 9348346248149, username: 'Juliano' },
    { password: 139193818391, username: 'Jennifer' },
  ),
);

// Aula 2

type User_ = {
  username: string;
  password: string;
};
type VerifyUser = (user: User_, receivedValues: User_) => boolean;

const VerifiedUsers: VerifyUser = (user, receivedValues) => {
  return (
    user.username === receivedValues.username,
    user.password === receivedValues.password
  );
};

const sgbdUser = {
  username: 'João',
  password: '12871ahdashaisj1',
};
const sentUser = {
  ...sgbdUser,
};

const loggedIn = VerifiedUsers(sgbdUser, sentUser);
console.log(loggedIn);
