export class User{
    name: String
    lastName: String
    userName: String
    typeId: String
    identificationNumber: String
    telephone: String
    address: String
    email: String
    password: String
    birthDate: Date
    state: boolean

    constructor(name: String, lastName: String, userName: String, typeId: String, identificationNumber: String,
      telephone: String, address: String, email: String, password: String, birthDate: Date, state: boolean){

        this.name = name
        this.lastName = lastName
        this.userName = userName
        this.typeId = typeId
        this.identificationNumber = identificationNumber
        this.telephone = telephone
        this.address = address
        this.email = email
        this.password = password
        this.birthDate = birthDate
        this.state = state
    }

}
