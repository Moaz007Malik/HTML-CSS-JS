import Image from "next/image";
import Card from "./components/Card";
import contacts from "./components/contacts";

function myContacts(contact){
  return(
    <div key={contact.id}>
        <Card id={contact.id} name={contact.name} email={contact.email} phone={contact.phone} />
    </div>

  )
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
          {contacts.map(myContacts)}
      </div>
    </main>
  );
}
