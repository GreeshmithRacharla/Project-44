class Security {

    constructor(){

        // Add code to create the input and button elements
        this.button1 = createButton('check');
        this.button2 = createButton('check');
        this.button3 = createButton('check');
        this.input1 = createInput("Code1");
        this.input2 = createInput("Code1");
        this.input3 = createInput("Code1");
        this.accesscode1 = "VARIABLE";
        this.accesscode2 = "FUNCTION";
        this.accesscode3 = "DATABASE";
         }

         hide(){
             this.button1.hide();
             this.button2.hide();
             this.button3.hide();
             this.input1.hide();
             this.input2.hide();
             this.input3.hide();
         }

    display(){

        // Add code to make the buttons function as expected
        this.input1.position(100,90);
        this.button1.position(100,120);
        this.input2.position(700,190);
        this.button2.position(700,220);
        this.input3.position(100,290);
        this.button3.position(100,320);

       this.button1.mousePressed(() => {
           if(System.authenticate(this.accesscode1,this.input1.value())){
               this.button1.hide();
               this.input1.hide();
           }
       })

       this.button2.mousePressed(() => {
        if(System.authenticate(this.accesscode2,this.input2.value())){
            this.button2.hide();
            this.input2.hide();
        }
    })

    this.button1.mousePressed(() => {
        if(System.authenticate(this.accesscode3,this.input3.value())){
            this.button3.hide();
            this.input3.hide();
        }
    })

    }
}