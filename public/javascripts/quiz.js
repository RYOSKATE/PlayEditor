/**
 * Created by khlee on 11/8/16.
 */

var tasks = ["問1. 長方形の面積を計算する関数 area(Double, Double) -> Double を実装してください。その後、area関数を用いて幅4.5、長さ5.5の長方形の面積を計算してください。<br>",
    "問2. 文字列（String）をCharacterの配列に変える関数 toArray(String) -> [Character] を実装してください。<br>"+
    "そのあと、関数から返された配列にCharacterである”S”を追加してください。",
    "問3. 一つの文字列が回文かどうかを判断する関数を実装してください。<br>回文であればtrue, そうでなければfalseを返してください。<br>",
    "問4. ソートされた数字の配列から重複している要素を削除して、重複している要素のない配列の長さを返す関数を実装してください。<br>"
];
var questions = ["問1. 以下のSwiftコードを実行した際に得られる正しい結果を選んでください。<br>" +
`
 class Workplace {
    var workplaceAddress: String
    var city: String
    init(workplaceAddress: String, city: String) {
        self.workplaceAddress = workplaceAddress
        self.city = city
    }
 }

 class Person {
    var name: String
    var workplace: Workplace

    init(name: String, workplace: Workplace) {
        self.name = name
        self.workplace = workplace
    }
 }
 var address = Workplace(workplaceAddress: "112 Jasmin Street", city: "JasminTown")
 var bob = Person(name: "Bob", workplace: address)
 var amy = Person(name: "Amy", workplace: address)

もしAmyが転職して、就職先を変更したい場合、

amy.workplace.workplaceAddress = "123 New Street"

このコードに関して、以下のどれが正しいですか？
                     `,

    "問2. 以下の2つのif文を実行した際に得られる正しい結果を選んでください。<br>" +
    `
let i = 101

if case 100...101 = i {
    print("Hello, world!")
} else {
    print("Goodbye, world!")
}

if case 100..<101 = i {
    print("Hello, world!")
} else {
    print("Goodbye, world!")
}

                     `,
    "問3. 以下のSwiftコードを実行した際に得られる正しい結果を選んでください。<br>" +
    `
let names = ["River", "Kaylee", "Zoe"]
let result = names.sort { $0 > $1 }
print(result)

                     `,

    "問4. 以下のSwiftコードを実行した際に得られる正しい結果を選んでください。<br>" +
    `
func foo(function: (Int) -> Int) -> Int {
    return function(function(5))
}

func bar<Int: IntegerType>(number: Int) -> Int {
    return number * 3
}

print(foo(bar))

                  `,
    "問5. 以下のSwiftコードについて、正確かつ一番簡潔に書き直したコードを選んでください。<br>" +
    `
let animals = ["fish", "cat", "chicken", "dog"]
let sortedAnimals = animals.sort {(one: String, two: String) -> Bool in return one < two
}

                `,
    "問6. 以下のSwiftコードを実行した際に得られる正しい結果を選んでください。<br>" + `
let year: Int? = Int("2020")
let remain: Int = year! - 2016

let year2: Int? = nil
let remain2: Int = year! - 2016

let year3: Int? = nil
if let remain3 = year3 {
    print("remain \\(remain3-2016)years")
}
                `,
    "問7. 以下のSwiftコードを実行した際に得られる正しい結果を選んでください。<br>" +
    `
let i = 11
let j = 20

let name = 9...11 ~= i ? j % 2 == 1 ? "Larry" : "Laura" : "Libby"
                            `,
    "問8. 以下のSwiftコードを実行した際に得られる正しい結果を選んでください。<br>" +
    `
var crew = ["Captain": "Malcom", "Doctor": "Simon"]
var crew2 = crew
crew2 = [:]
print(crew.count)
print(crew2.count)                            `,
    "問9. 以下のSwiftコードを実行した際に得られる正しい結果を選んでください。<br>" +
    `
let d: Double = 0.5
let f: Float = d
                            `,
    "問10. 以下のSwiftコードを実行した際に得られる正しい結果を選んでください。<br>" +
    `
var score = 65
switch score {
case 45..<75:
    print("追試")
case 90...100:
    print("秀")
case 80..<90:
    print("優")
case 70..<80:
    print("良")
case 60..<70:
    print("可")
default:
    print("追試不可")
}
                            `
];
var ansNoTranslation =["A", "C", "C", "C", "D", "B", "C", "A", "D", "A"];
var ans1s = [
    "A. Bobの就職先の住所も一緒に変わる",
    "B. Amyの就職先の住所だけが変わる",
    "C. どちらも何も変わらない",
    "D. コンパイルエラー"
];
var ans2s = [
    "A. 両方\"Hello, world!\"を出力",
    "B. 両方\"Goodbye, world!\"を出力",
    "C. 一個目のif文は\"Hello, world!\", 二個目のif文は\"Goodbye, world!\"を出力",
    "D. 一個目のif文は\"Goodbye, world!\", 二個目のif文は\"Hello, world!\"を出力"

]
var ans3s = [
    "A. [\"Kaylee\", \"River\", \"Zoe\"]",
    "B. [\"Kaylee\"]",
    "C. [\"Zoe\", \"River\", \"Kaylee\"]",
    "D. [\"Zoe\"]"
];
var ans4s = [
    "A. 15",
    "B. 3",
    "C. 45",
    "D. 5"
];
var ans5s = [
    "A. let sortedAnimals = animals.sort { (one, two) -> Bool in return one < two }",
    "B. let sortedAnimals = animals.sort { (one, two) in return one < two }",
    "C. let sortedAnimals = animals.sort { return $0 < $1 }",
    "D. let sortedAnimals = animals.sort { $0 < $1 }"
]
var ans6s = [
    "A. remain = 4, remain2 = nil, remain3 = nil",
    "B. remain = 4, remain2はコンパイルエラーで実行できない, remain3はif文が実行不可能で宣言されない",
    "C. remain = nil, remain2 = nil, remain3はif文が実行不可能で宣言されない",
    "D. remain = nil, remain2 = 4, remain3 = nil"
];
var ans7s = [
    "A. \"\"",
    "B. Larry",
    "C. Laura",
    "D. Libby"
];
var ans8s = [
    "A. 1個目のprintが2で、2個目のprintが0",
    "B. 1個目のprintが0で、2個目のprintが2",
    "C. 1個目のprintが0で、2個目のprintが0",
    "D. 1個目のprintが2で、2個目のprintが2",
];
var ans9s = [
    "A. 0.5",
    "B. 0.0",
    "C. 0",
    "D. コンパイルエラー"
];
var ans10s = [
    "A. 追試",
    "B. 可",
    "C. 追試不可",
    "D. 何も出力されない"
];
