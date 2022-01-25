import React from "react";
import {
  useAddContactMutation,
  useUpdateContactMutation,
  useDeleteContactMutation,
} from "./services/contactsApi";

export const Contact = () => {
  const [addContact] = useAddContactMutation();
  const [updateContact] = useUpdateContactMutation();
  const [deleteContact] = useDeleteContactMutation();

  const contact = {
    id: "11",
    name: "amit",
    email: "amit11@test.com",
  };

  const updatedContact = {
    id: "11",
    name: "amit updated",
    email: "amit11@test.com",
  };

  const addHandler = async () => {
    await addContact(contact);
  };
  const updateHandler = async () => {
    await updateContact(updatedContact);
  };
  const deleteHandler = async () => {
    await deleteContact(contact.id);
  };

  return (
    <>
      <button onClick={addHandler}>Add Contact</button>
      <button onClick={updateHandler}>Update Contact</button>
      <button onClick={deleteHandler}>Delete Contact</button>
    </>
  );
};
