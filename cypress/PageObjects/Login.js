class Login
  {
  tusername = "#user_login";
  tpassword = "#user_pass";
  tlogin = "#wp-submit";

   setUsername(username)
    {
     cy.get(this.tusername).type("Tom");
    }
    
   setPassword(password)
    {
     cy.get(this.tpassword).type("(@hluXIFN%6zh9HKbuwh5)ax");
    }

    setLogin()
    {
    cy.get(this.tlogin).click();
    }
   }

  export default Login; 