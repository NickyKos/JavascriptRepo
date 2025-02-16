let contacts = [];

function displayMenu() {
  console.log("\nMenu Options:");
  console.log("1. Add a new contact");
  console.log("2. View all contacts");
  console.log("3. Remove a contact");
  console.log("4. Search for a contact");
  console.log("5. Exit");
}

function addContact(name, phone) {
  contacts.push({ name, phone });
}

function viewContacts() {
  if (contacts.length === 0) {
    console.log("No contacts available.");
  } else {
    console.log("Contacts List:");
    contacts.forEach(contact => {
      console.log(`Name: ${contact.name}, Phone: ${contact.phone}`);
    });
  }
}

function removeContact(name) {
  const index = contacts.findIndex(contact => contact.name === name);
  if (index !== -1) {
    contacts.splice(index, 1);
    console.log(`${name} has been removed.`);
  } else {
    console.log("Contact not found.");
  }
}

function searchContact(name) {
  const contact = contacts.find(contact => contact.name === name);
  if (contact) {
    console.log(`Found Contact - Name: ${contact.name}, Phone: ${contact.phone}`);
  } else {
    console.log("Contact not found.");
  }
}

function handleMenuChoice(choice) {
  switch(choice) {
    case 1:
      const nameToAdd = prompt("Enter the name of the contact:");
      const phoneToAdd = prompt("Enter the phone number:");
      addContact(nameToAdd, phoneToAdd);
      break;
    case 2:
      viewContacts();
      break;
    case 3:
      const nameToRemove = prompt("Enter the name of the contact to remove:");
      removeContact(nameToRemove);
      break;
    case 4:
      const nameToSearch = prompt("Enter the name of the contact to search:");
      searchContact(nameToSearch);
      break;
    case 5:
      console.log("Good Bye");
      break;
    default:
      console.log("Invalid choice. Please select a valid option.");
  }
}

function contactListManager() {
  let userChoice;
  
  do {
    displayMenu();
    userChoice = parseInt(prompt("Enter your choice:"));
    handleMenuChoice(userChoice);
  } while (userChoice !== 5);
}

contactListManager();
