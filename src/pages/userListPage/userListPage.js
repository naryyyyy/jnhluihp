import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsersAction } from '../../redux/actions';

function UsersListPage() {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.usersReducer);

  useEffect(() => {
   
    dispatch(fetchUsersAction());
  }, [dispatch]);

  return (
    <div>
      <h2>User List</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UsersListPage;
