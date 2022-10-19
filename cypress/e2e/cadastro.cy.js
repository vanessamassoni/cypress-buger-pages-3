import SignupPage from '../pages/SignupPage'
import signupFactory from '../factories/SignupFactory'

describe('Cadastro', () => {
  //instanciando a classe SignupPage
  var signup = new SignupPage()
  
  //beforeEach(function(){
  //  cy.fixture('entregador').then((d)=>{
  //      this.entregador=d
  //  })
 // })
    it('Usuário deve se tornar um entregador', function(){
      
      var deliver = signupFactory.deliver()

      signup.go()
      signup.fillForm(deliver)
      signup.submit()
       
      const expectedMessage= 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
      
      signup.modalContentShouldBe(expectedMessage)
  
    })

    
    it('CPF inválido', function(){
  
      var deliver = signupFactory.deliver()

      deliver.cpf = '00000000141aa'
      signup.go()
      signup.fillForm(deliver)
      signup.submit()
       
      signup.alertMessageShouldBe('Oops! CPF inválido')

    })
  })