import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

import {
  selectAllUsers,
  getUsersError,
  getUsersStatus,
  fetchUsers,
} from "./usersSlice";

const ListUsers = () => {
  const dispatch = useDispatch();

  const users = useSelector(selectAllUsers);

  const usersStatus = useSelector(getUsersStatus);
  const error = useSelector(getUsersError);

  useEffect(() => {
    if (usersStatus === "idle") {
      dispatch(fetchUsers());
    }
  }, [usersStatus, dispatch]);

  let content;
  if (usersStatus === "loading") {
    content = <p>"Loading..."</p>;
  } else if (usersStatus === "succeeded") {
    content = (
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>
                <button>X</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  } else if (usersStatus === "failed") {
    content = <p>{error}</p>;
  }

  return <div>{content}</div>;
};

export default ListUsers;
