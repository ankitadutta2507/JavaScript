let contacts = [
  {
    name: "Maxwell Wright",
    phone: "(0191) 719 6495",
    email: "Curabitur.egestas.nunc@nonummyac.co.uk"
  },
  {
    name: "Raja Villarreal",
    phone: "0866 398 2895",
    email: "posuere.vulputate@sed.com"
  },
  {
    name: "Helen Richards",
    phone: "0800 1111",
    email: "libero@convallis.edu"
  }
];

let choice = prompt("What do you want to do? (first, last, new)");

if (choice === "first") {
  console.log("First contact:", contacts[0]);

} else if (choice === "last") {
  console.log("Last contact:", contacts[contacts.length - 1]);

} else if (choice === "new") {
  let name = prompt("Enter name:");
  let phone = prompt("Enter phone:");
  let email = prompt("Enter email:");

  if (name && phone && email) {
    contacts.push({ name, phone, email });
    console.log("New contact added successfully.");
  } else {
    console.log("❌ Contact not added. All fields are required.");
  }

} else {
  console.log("❌ Invalid choice.");
}
