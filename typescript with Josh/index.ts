//typescript typelarni qattiy tekshiradi.
//htmldan domni import qilganda as HtmlcreateElememt deb qoshib ketish kerak.
//ozgaruvchilarni typeni yozib ketish kerak
//faqat typescriptga oid keylar: any-lyuboy type degani; :[] type array bosin lekin bosh array bosin degani
//:string[]  arrayni ichida faqat string bosin degani
//terminalda tsc index deb yozsa ozi jsga compile qiladi.
// tsc --watch qilsa auto compile qiladi.
//1-ozgaruvchini qiymatini string deb yozmasdan shunchaki soz yozi
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

//strict type
// import axios from "axios"
// const url = "https://jsonplaceholder.typicode.com/todos/1"
// axios.get(url).then((res) => console.log(res))

////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// let value = "jam"
// value = 'jam'
// value=12

////////////////////////////////////////////////////////////////////////////////
//Tuple- fixed length array:

// let array:[0,1,2]=[0,1,2]

//1chisi type 2chisi qiymati. ya'ni bunda qiymatlarini cheklab qoyadi.
////////////////////////////////////////////////////////////////////////////////
//enum-bu feature (enumerated number) biz yuqorida arrayda raqam qiymatlar berdik shu raqamlarni sozlarga almashtirib
//advancedroq korinishda yozishimiz enum deyiladi:

// enum ROLES {
//   USER,
//   MODERATOR,
//   ADMIN,
//   OWNER,
// } //shartni enum sozi, nomi, object, katta harfda yozilishi.
// if (ROLES.USER === 0) {
//   console.log("this is user")
// }

////////////////////////////////////////////////////////////////////////////////
//typescript typelari:
//union type

// let input: (string |number)[]|boolean|number
// input=['jamshid',28]
// input=false
// input=28

//union type degani qiymatga 1netcha type bersa bolishi.
////////////////////////////////////////////////////////////////////////////////
//literal type:

// let value:'hi'| 'hello'| "how're you"
// value='hi'
// value="hello"

//typelarini shunaqa qilib cheklab qoyish
////////////////////////////////////////////////////////////////////////////////
//type alies- yani ozimiz type yasashimiz:

// type withName={name:string}
// type withAge={age:number}
// type withAll=withAge &  withname
// let value: withName | withAge | withAll
// value={name:'jamshid'}
// value={age:28, name:'jamshid'}
////////////////////////////////////////////////////////////////////////////////
//yana 1ta misol

// type Book = {
//   readonly author: string //readonly bu qoshilgandan jeyin ozgartirib bolaydigan qilib qoyadi.
//   title: string
//   page?: number // soroq belgisi optional degani yani ixtiyoriy bosayam bomasayam error bermaydi.
//   price: number
// }

// let data: Book[] // yuqoridagi book object type ni pasda data tengladik tengaganda ham bookni arrayga ozgartirdik.
// data = [{ author: "Jamshid", title: "developer", page: 100, price: 10000 }]

// data[3].price = 200000

////////////////////////////////////////////////////////////////////////////////
//functionda typelar:

// function sum(num1:number,num2:number):number{    //bu yerda argumentlarga type berdik va chiqadigan nayija ham number bosin dedik
//   return num1+num2
// }
// console.log(sum(5,10));

////////////////////////////////////////////////////////////////////////////////
//functionlarda void: functionlarda return qilmaydigan xollarda ishlatilinadi. bu yerda agar return qilinsa error beradi.

// function sum(num1:number,num2:number):void{    //bu yerda argumentlarga type berdik va chiqadigan nayija ham number bosin dedik

//   console.log(num1+num2);
// }
// sum(5,10)

////////////////////////////////////////////////////////////////////////////////
//functionlarda ham type ni alieses yani ozimiz belgilab yozsak boladi:

// type sum=(n1:number,n2:number,tax?:number)=>void|number //optional doim oxirida beriladi boshida berilsa error beradi.

// let sum: sum=(n1,n2)=>{ // function ni alieses qilganimizda functionimizni sal boshqacharoq qilib yurgizdiramiz.
//   return n1+n2
// }
// sum(5,10)
////////////////////////////////////////////////////////////////////////////////
//functionlarda never type:   bu yetib borib bolmaydigan function boladi va bu return bomidi va tugamidi xec qachon:

// function throwError():never{
//   throw Error('error !')
// }

////////////////////////////////////////////////////////////////////////////////
//functionlarda any va unknown type unknown type boshqa joyda ham keladi any ga oxshab farqi
// any da biz typelarni hammasini qabul qilamiz, unkown bersak type nomalum bolgani uchun typelarni tekshirmidi lekin
//lekin 1ta ozgaruvchini 2chi ozgaruvchiga tenglashtirganimzda error beradi:

// let x: unknown
// let str='Jamshid'
//  x="Shoxrux"     //shu yerda str ni x ga tenglashtirib qoysak error beradi.

////////////////////////////////////////////////////////////////////////////////
//array type: typescriptda array type bor qachon foyda beradi?:

// let x: unknown
// let array=[1,2,3]
//  x=[1,2,3]
//  if(Array.isArray(x)){      // Array type ni ichida isArray methodi bor
//   array=x
//  }

////////////////////////////////////////////////////////////////////////////////
//objectni ichida qandaydir type bor yoqligini qanday tekshirsa boladi?:

// let obj: { name: string } = { name: "Jamshid" }
// if ("name" in obj) {
//   //code
// }

////////////////////////////////////////////////////////////////////////////////
//narrowing:  ?????????????
////////////////////////////////////////////////////////////////////////////////
// const input =document.querySelector('#text') !  // undov bersak bunda biz bu malumotlar null ham emas undefined ham emas degani.

////////////////////////////////////////////////////////////////////////////////
// javascriptda class bu objectlarni quruvchi constructor deb atasak boladi., ya'ni bizga object qurib beradi. typescriptda ham shunday:

// interface CarType {
//   brand: string
//   model: string | number
//   drive: () => void
// }
// interface Lambo extends CarType {
//   //interfacelarni boshqa bir interfacega extends qilsa bo'ladi o'zini ozi repeat qilasligi uchun
//   lamboDrive: () => void
// }

// class Car implements CarType {
//   //classlarda abstract key bor bolib class ichida berilsa childa uni ozgartirish mumkin.
//   get brand() {
//     return `this is ${this._brand}` //bu yerda get berdik endi tashqaridan kirayotdan get orqali kirishga majbur va kirayotib returndagi qiymatlarni olib o'tib ketadi
//   }
//   set brand(value: string) {
//     //set berdik endi brand private bolsa ham, getdan olingan set uni bizga xoxlagan joyda ozgartirsh imkonini beradi
//     //faqat shartlab qoydik, ya'ni bosh string berib o'zgartirib bo'lmaydi.
//     if (value && value.trim()) {
//       this._brand = value
//     }
//   }
//   private _brand: string
//   model: string | number
//   constructor(brand: string, model: string | number) {
//     this._brand = brand
//     this.model = model
//   }
//   drive() {
//     // typescriptni classlar ichida methodi bor masalan drive dan oldin  private qoysam uni childa ham tashqarida ham ko'rsatmidi.
//     //protect qoysam faqar tashqarida ishlamidi, parent va childa ishlayveradi.
//     console.log(`${this.brand} is being driven`)
//   }
// }
// class Toyyota extends Car {
//   //extends class dan meros ya'ni inherit oladi, ya'ni yangi object child yasash ucuhun ishlatilinadi. undan tashqari puplic, va reaonly methodi ham bor

//   constructor(brand: string, model: string | number) {
//     super(brand, model) //super inherit qilinayotgan class ni constructorini chairib berdi
//     //super calls the base class
//   }
// }
// const car = new Toyyota("Toyyota", "Supra")
// const MyCar = new Car("KIA", "Moring")
// const NewCar = new Car("Hyundai", "Sonata")
// car.drive()
// MyCar.drive()
// NewCar.drive()
// console.log(MyCar)
// console.log(car)

// MyCar.brand = "tico"
// console.log(MyCar.brand)

////////////////////////////////////////////////////////////////////////////////
//function overload: biz ishlayotganimizda functionlarni typeni hammasini birin ketib yozvolib keyin pasda bemalol ishlayveramiz:

// function sum(prop1: string, prop2: string): string
// function sum(prop1: number, prop2: number): number
// function sum(prop1: string, prop2: number): string
// function sum(prop1: string, prop2: string): string
// function sum(prop1: string, prop2: string): number
// function sum(prop1: number, prop2: string): string
// function sum(prop1: any, prop2: any): any {
//   return prop1 + prop2
// }
// sum("s", 2)

///////////////////////////////////////////////////////////////////////////////
//Generic type:

// function sum<S, N>(prop1: S, prop2: N): S & N {
//   //agar dinamic typedan keyin extends object deb aniqlab ketilsa pasga faqat object kiritish kerak bo'ladi.
//   return { ...prop1, ...prop2 }
// }
// sum("Jamshid", 28) // function ichida yozilgan belgi uni dinamic typega ozgartiradi ya'ni
// //man function ni pasda chaqirib uni argumentini korsatsam function ichidagi T lar ozini osha argumentga typelab oladi.
// //lekin agar men pasda functionni chaqriganda birorta mavjuda typeni berib ketsam keyin argumentni osha type boyivha yozishga majbur bo'lib qolaman.
// //va yana sharti function ga ozim type berganimga quydagi korinishda beraman.
// //va yana typelarni shu yol bn juda koplab bersa bo'ladi.
// sum<string, number>("Jamshid", 28)

///////////////////////////////////////////////////////////////////////////////
//generic typelarni objectlarda ham bersa boladi:

// interface myObject<T, U> {
//   data: T
//   data2: U
// }
// let obj: myObject<string, number>

///////////////////////////////////////////////////////////////////////////////
//utility types: Readonly,Pick, Partial, Required, Omit     // bu typelar generic typeni ichiga kiradi:

// type myObj={name:string, age?: number}
// let obj: Readonly<myObj>={name:'Jamshid'}           //Readonly qilibgandan keyin let obj const yani ozgarmas qilib qoyadi.

// let obj2: Required<myObj>={name:'Jamshid', age:28}           //Required type optional bolgan ? ni required qilib qoyadi.

///////////////////////////////////////////////////////////////////////////////
//interfacelarni ham export import qilsa boladi.
//decorators

///////////////////////////////////////////////////////////////////////////////
