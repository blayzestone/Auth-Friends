import React, { useEffect, useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { Spinner } from "reactstrap";

const FriendsList = () => {
  const [friends, setFriends] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axiosWithAuth()
      .get("/api/friends")
      .then((res) => {
        setIsLoading(false);
        setFriends(res.data);
      });
  }, []);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        friends.map((friend) => (
          <div key={friend.id}>
            <h2>{friend.name}</h2>
            <p>{friend.email}</p>
            <p>{friend.age}</p>
          </div>
        ))
      )}
    </>
  );
};

export default FriendsList;
