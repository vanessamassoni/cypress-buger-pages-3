var faker = require('faker')

//criando um módulo
export default {

    //criando a função deliver
    deliver: function(){

        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()

        var data={
            name: `${firstName} ${lastName}`,
            cpf: '00000014141',
            email: 'papito@hotmail.com',
            whatsapp: '11999999999',
            address: {
                postalcode: '04534011',
                street: 'Rua Joaquim Floriano',
                number: '1000',
                details: 'Ap 142',
                district: 'Itaim Bibi',
                city_state: 'São Paulo/SP'
            },
            delivery_method: 'Moto',
            cnh: 'cnh-digital.jpg'

        }
        return data
    }
}