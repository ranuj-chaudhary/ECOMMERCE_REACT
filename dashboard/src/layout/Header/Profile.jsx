const Profile = ({ userInfo }) => {
  const { name, email } = userInfo;
  return (
    <div className="flex gap-2">
      <div>
        <p>{name}</p> <p className="text-sm">{email}</p>{' '}
      </div>
      <div className="w-10 h-10 overflow-hidden rounded-full">
        <img src="/images/admin.jpg" alt="" />
      </div>
    </div>
  );
};

export default Profile;
