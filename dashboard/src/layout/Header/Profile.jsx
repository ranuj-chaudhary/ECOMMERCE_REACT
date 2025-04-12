const Profile = ({ userInfo }) => {
  const { name, email } = userInfo;
  return (
    <div className="flex hidden gap-2 sm:flex">
      <div>
        <p>{name}</p> <p className="text-sm">{email}</p>{' '}
      </div>
      <div className="overflow-hidden w-10 h-10 rounded-full">
        <img src="/images/admin.jpg" alt="" />
      </div>
    </div>
  );
};

export default Profile;
