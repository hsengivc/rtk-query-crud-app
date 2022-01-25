import React from "react";
import { useContactQuery } from "./services/contactsApi";

export const ContactDetails = ({ id }: { id: string }) => {
  const { data } = useContactQuery(id);
  return <pre>{JSON.stringify(data, undefined, 2)}</pre>;
};
