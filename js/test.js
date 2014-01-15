(function () {  
    var mm={
        a:5,
        b:6,
        f1:function(){
            var a = this.a, b = this.b

            a=7, b=8
            console.log(a,b, this.a, this.b)
            // return(this.a, this.b)

            this.a = a, this.b = b
        },
        f2:function(){
            var a = this.a, b = this.b

            console.log(a,b, this.a, this.b)

        }

    }

    mm.f1()
    mm.f2()
    // console.log(mm.f1())

})();