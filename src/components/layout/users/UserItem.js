import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ImageIcon from "@material-ui/icons/Image";
import Divider from "@material-ui/core/Divider";
import { useNavigate } from "react-router-dom";

const UserItem = ({ user: { login, avatar_url, url } }) => {
  const navigate = useNavigate();

  return (
    <div className="user__item-wrapper">
      <List>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <ImageIcon />
              <img src={avatar_url} />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={login}
            secondary="View Profile"
            onClick={() => navigate(`user/${login}`)}
            className="cursor"
          />
        </ListItem>
        <Divider variant="inset" component="li" />
      </List>
    </div>
  );
};

export default UserItem;
