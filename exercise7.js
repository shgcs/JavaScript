class Password {
  constructor() {
    let output = (e) => {

      e.preventDefault();

      this.password = p1.value;

      this.u_c = [];
      this.l_c = [];
      this.s_c = [];


      for (let i = 0; i < (this.password.length); i++) {


        //word = ssp= 1w1o1r1d
        //       sp= 11word11 
        //       wp= word1111
        //       fp= wordHiii
        //Random lowercase character
        let min1 = Math.ceil(97);
        let max1 = Math.floor(122);
        this.lc = String.fromCharCode((Math.floor(Math.random() * (max1 - min1 + 1)) + min1));
        this.l_c.push(this.lc);

        //Random uppercase character
        let min2 = Math.ceil(65);
        let max2 = Math.floor(90);
        this.uc = String.fromCharCode((Math.floor(Math.random() * (max2 - min2 + 1)) + min2));
        this.u_c.push(this.uc);


        //Random speacial character
        let min3 = Math.ceil(33);
        let max3 = Math.floor(47);
        this.sc = String.fromCharCode((Math.floor(Math.random() * (max3 - min3 + 1)) + min3));
        this.s_c.push(this.sc);

      }

      console.log("UC :", this.u_c);
      console.log("LC :", this.l_c);
      console.log("SC :", this.s_c);

    }
    document.body.getElementsByClassName("i1")[0].addEventListener('click', output);

  }


  generateStrongPassword() {
    this.a = "";
    this.b = "";

    for (let i = 0; i < 2; i++) {

      if (i == 0) {
        this.a = this.u_c[i] + this.l_c[i] + this.s_c[i];
      }
      if (i == 1) {
        this.b = this.u_c[i] + this.l_c[i] + this.s_c[i];
      }

    }

    return document.body.getElementsByClassName("m1")[0].innerHTML = `${this.a}${this.password}${this.b}`;

  }


  generateWeakPassword() {
    this.a = "";

    this.a = this.u_c[0] + this.l_c[0] + this.s_c[0];

    return document.body.getElementsByClassName("m2")[0].innerHTML = `${this.password}${this.a}`;

  }


  generateSuperStrongPassword() {

    this.SSP = "";
    for (let i = 0; i < this.password.length; i++) {

      if ((i % 2 == 0 && !(i % 3 == 0 && i != 0)) && i != 0) {
        this.SSP = this.SSP + this.u_c[i] + this.password[i];
      }
      if (i % 2 != 0 && !(i % 3 == 0 && i != 0)) {
        this.SSP = this.SSP + this.l_c[i] + this.password[i];
      }
      if ((i % 3 == 0 && i != 0) || i == 0) {
        this.SSP = this.SSP + this.s_c[i] + this.password[i];
      }

    }

    return document.body.getElementsByClassName("m3")[0].innerHTML = `${this.SSP}`;

  }


  generateFunnyPassword() {

    document.body.getElementsByClassName("m4")[0].innerHTML = `${this.password}Hii`;

  }


}

let obj = new Password();
document.body.getElementsByClassName("i1")[0].addEventListener('click', () => {
  setTimeout(() => {
    obj.generateStrongPassword();
  }, 1000);

  setTimeout(() => {
    obj.generateWeakPassword();
  }, 2000);

  setTimeout(() => {
    obj.generateSuperStrongPassword();
  }, 3000);

  setTimeout(() => {
    obj.generateFunnyPassword();
  }, 4000);

});














