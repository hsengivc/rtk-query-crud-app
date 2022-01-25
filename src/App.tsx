import React from "react";
import { Contact } from "./Contact";
import { ContactDetails } from "./ContactDetails";
import { useContactsQuery } from "./services/contactsApi";
function App() {
  const { data, error, isLoading, isSuccess } = useContactsQuery();
  return (
    <div className="App" style={{ textAlign: "center" }}>
      <h1>Simple RTK Query CRUD App</h1>
      {isLoading && <span>..Loading..</span>}
      {error && <span>..Failed..</span>}
      {isSuccess && (
        <div>
          {data?.map((contact) => (
            <div key={contact.id}>
              <span>{contact.name}</span>
              <span>
                <ContactDetails id={contact.id} />
              </span>
            </div>
          ))}
          <div>
            <Contact />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
