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
