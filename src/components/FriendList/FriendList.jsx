import { PropTypes } from 'prop-types';
import { Avatar, FriendsBoard, List, Status } from 'components/FriendList/FriendList.styled';

export const FriendList = ({ friends }) => {
    return (
        <FriendsBoard>
            {friends.map(({ avatar, name, isOnline, id }) => (
                <List
                    key={id}
                    avatar={avatar}
                    name={name}
                    isOnline={isOnline}
                    >
                    <Status isOnline={isOnline}>{isOnline}</Status>
                        <Avatar src={avatar} alt="User avatar" width="48" />
                            <p>{name}</p>
                </List>
            ))}
        </FriendsBoard>
    );
}


FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
}