const Profile = ({ name }) => {
	return (
		<div class='alert alert-primary' role='alert'>
			Welcome {name.toUpperCase()}!!! enjoy our events
		</div>
	);
};

export default Profile;
