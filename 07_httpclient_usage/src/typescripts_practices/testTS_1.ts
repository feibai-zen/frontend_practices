// ts是强类型语言
// 1) 变量赋值一次以后，以后无法修改类型


// 推荐使用let
// let uname = 'tom'

// var uname_ = 'Mumu'

class User {

    uname!: string
    age!: number
    isMarried: any
    userList!: string[]
    empList!: any[]

    f1() {
        this.uname = "null"
        this.age = 20
        this.isMarried = '是'
        this.isMarried = false
    }


    // 不支持重载
    // f1(n1: string, n2: string): number {
    //     return 20
    // }


    f2(n1: string, n2: number): number {
        return 20
    }


    f3(n1: string, n2: number): void {

    }

}

let user = new User()

user.f2('tom', 20)