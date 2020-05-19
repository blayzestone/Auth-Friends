import React, { useEffect, useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { Spinner, Card, CardTitle, CardText } from "reactstrap";
import CreateFriendForm from "./CreateFriendForm";

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

  const updateFriends = (friends) => setFriends(friends);

  return (
    <>
      <CreateFriendForm updateFriends={updateFriends} />
      <div className="w-100 d-flex justify-content-center align-content-center flex-wrap p-5">
        {isLoading ? (
          <Spinner />
        ) : (
          friends.map((friend) => (
            <Card key={friend.id} className="w-25 p-3 m-1">
              <CardTitle>{friend.name}</CardTitle>
              <CardText>{friend.email}</CardText>
              <CardText>{friend.age}</CardText>
            </Card>
          ))
        )}
      </div>
    </>
  );
};

export default FriendsList;
