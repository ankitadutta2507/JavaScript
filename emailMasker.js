function maskEmail(email) {
  const [username, domain] = email.split("@");
  const maskedUsername =
    username[0] +
    "*".repeat(username.length - 2) +
    username[username.length - 1];
    return `${maskedUsername}@${domain}`;
}

console.log(maskEmail("myEmail@email.com"));
// Output: m*****l@email.com

const email = "anki@gmail.com";
console.log(maskEmail(email));
