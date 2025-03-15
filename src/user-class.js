class User {
    constructor(id, firstName, lastName, maidenName, age, gender, email, phone, username, password, birthDate, image, bloodGroup, height, weight, eyeColor, hair = {}, ip, address, macAddress, university, bank = {}, company = {}, ein, ssn, userAgent, crypto = {}, role) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.maidenName = maidenName;
        this.age = age;
        this.gender = gender;
        this.email = email;
        this.phone = phone;
        this.username = username;
        this.password = password;
        this.birthDate = birthDate;
        this.image = image;
        this.bloodGroup = bloodGroup;
        this.height = height;
        this.weight = weight;
        this.eyeColor = eyeColor;
        this.hair = hair;
        this.ip = ip;
        this.address = address;
        this.macAddress = macAddress;
        this.university = university;
        this.bank = bank;
        this.company = company;
        this.ein = ein;
        this.ssn = ssn;
        this.userAgent = userAgent;
        this.crypto = crypto;
        this.role = role;
    }

    get displayInfo() {
        return `Full name: ${this.firstName} ${this.lastName}. Age: ${this.age}. Gender: ${this.gender}. Email: ${this.email}`;
    }
}