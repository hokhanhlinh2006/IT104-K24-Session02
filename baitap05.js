let phoneBooks = [];
function addContact(name, phone, email) {
  const contact = {
    name: name,
    phone: phone,
    email: email
  };
  phoneBooks.push(contact);
  console.log(`✔️ Đã thêm liên hệ: ${name}`);
}
function displayContact() {
  console.log("📒 Danh bạ hiện tại:");
  if (phoneBooks.length === 0) {
    console.log("Danh bạ trống.");
  } else {
    for (let contact of phoneBooks) {
      console.log(`Tên: ${contact.name}, SĐT: ${contact.phone}, Email: ${contact.email}`);
    }
  }
}
addContact("Nguyễn Văn A", "0901234567", "a@example.com");
addContact("Trần Thị B", "0987654321", "b@example.com");
displayContact();
