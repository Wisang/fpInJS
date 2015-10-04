#Functional Programming in JavaScript

##함수형 언어란?
- 함수형 프로그래밍 패러다임을 촉진하는 언어
- C, Java로 가능? 많은 수작업으로 거의 함수형으로 구현은 가능하지만 매우 힘들다.
- 반대는? 순수 함수형 언어로 객체지향으로 구현은 불가하다(Scheme, Haskell, Lisp)
- 둘 다 가능한 언어? Python, Ruby, Julia, JS
- 두가지 패러다임을 위한 Feature를 지원함. JS는? 숨겨져 있음.

##명령형과 함수형의 차이
- Style: Step by Step Task / 문제 정의와 데이터 변환을 통해 문제를 해결
- 상태변화: 중요 / 존재하지 않음
- 수행순서: 중요 / 덜 중요
- 흐름제어: 루프, 조건문, 함수호출 / 함수호출 및 재귀
- 조작단위: 구조 및 객체 / 함수(일등객체)와 데이터

##Advantage
함수형 스타일을 제대로 느끼는 순간 "심오한 깨달음"을 얻을 것이고 이 노력이 그만한 가치가 있다고 느낄 것이다. 또한 당신이 Full-time 함수형 개발자가 되건 아니건 더 좋은 프로그래머가 되게 해줄 것이다.

### Cleaner Code
디버깅, 테스팅, 유지보수를 쉽게 해준다. -> 예제: 2차원 배열을 일차원 배열로 변환하기

### Modularity
함수형 스타일은 큰 문제를 잘게 쪼개서 구현하도록 유도한다 -> 모듈화 유도. 

###재사용성
함수형 프로그램은 많은 공통 helper 함수를 사용하며, 결국 스스로 재사용 가능한 helper 함수를 많이 만들도록 유도한다.

###Coupling 줄이기
다른 함수와 완전히 독립적인 함수들을 작성케 하여 Coupling을 근본적으로 차단한다.

###수학적 증명
함수형 프로그램은 수학적으로 증명 가능: 복잡한 코드의 무결성 증명에 사용 가능

##Functional Programming in a nonfunctional world
- 완전히 함수형 구현은 현실에서 매우 드물다. 함수형 스타일로 기존 코드를 개선할 수 있다.
- 특히 임시 변수 및 루프가 있는 곳이 고차원 함수를 통해 개선할 수 있는 후보이다. 예) counting words

## 자바스크립트는 함수형 언어인가?
- 자바스크립트는 가장 많이 쓰이면서 가장 이해를 못 받고 있는 함수형 언어
- C 라는 옷을 입은 함수형 언어(Syntax wise like C's block)
- 객체지향이 대세이던 90년대에 나타나서 객체지향 언어로 인식됨(너무나 간절하게 원했으므로). 하지만 아님.
- 자바스크립트의 조상은 Scheme과 Lisp. 따라서 자바스크립트는 함수형 언어
### 근거
- 익명함수, 고차함수, closure등 함수형 언어의 feature 제공
- 순수 객체지향이 아님. 객체지향의 약한 모델인 Prototype을 사용하고 있음
- 인터프리터 언어임: Scheme 인터프리터와 유사
하지만 순수 함수형 언어도 아님(No Lazy evaluation, No built-in immutable data type) -> 추가적인 노력을 통해 보완 가능. 

## 결론
많은 논란이 있지만(자바스크립트가 함수형 언어인지, 객체지향 언어인지...) 자바스크립트는 함수형 구현에 좋은 재료이며 자바스크립트를 제대로 활용하기 위해서는 함수형 Feature를 활용할 수 있어야 함.

#함수랑 놀기
함수형 프로그래밍은 함수를 chaining, nesting, higer ordering 등등 함수가 중심인 구현임. 따라서 함수랑 친해져야 함.

##자바스크립트의 딜레마와 그 솔루션
- Safety vs. Manipulatability
- Solution: Self invoking func. 자기 자신을 호출하는 함수.
- Closure: 함수가 정의된 스코프 밖에서 호출해도 부모 함수에서 정의된 변수를 접근할 수 있음. 모든 함수형 언어는 Closure를 지원함.

##고차함수
- Closure는 고차함수를 이미 사용하고 있음. 고차함수의 정의: 함수를 인자로 받거나 리턴하는 함수
- 기존 방법과의 근본적 차이: 로직을 값처럼 다른 함수에 전달할 수 있음. 예) iterating an array

##순수함수
- 인풋만으로 아웃풋이 결정된다. 아무 값도 바꾸지 않는다. -> 리턴값을 얻는데만 사용된다. 예) Math.sqrt(4)
- 수학에서 말하는 '함수'를 충실히 따른 함수.
- 재사용성이 높음: 완전히 독립적이고 항상 똑같이 동작하므로 재사용이 매우 용이함.

##익명함수
- 이름이 없다는 것보다 더 중요한 것은, 필요할 때 ad-hoc으로 추가할 수 있다는 것. 편의성: 한번 쓰일 함수의 이름을 정할 필요가 없음.
- 예제: PowerOfTwo, obj accumulator revisited
- 단지 syntactic sugar? no! Lamda calculus의 핵심(변수 참조, 함수 호출, 익명함수 만으로 Turing-complete 만족: can simulate single-taped Turing machine).
- 주의할 점: 디버깅이 힘들다. 왜?

##Method Chaining
- 한개의 object에 연산이 연속될 때 코드를 간결하게 해줌. 예제코드.

##Recursion
- 모든 재귀는 loop으로 바꿀수 있고, 모든 loop은 재귀로 바꿀 수 있음
- 하지만 재귀가 적절한 경우는 loop가 적절한 경우와 완전히 다름(예: Tree traversing)

##Devide and Conqure
- 재귀는 루프를 대체하는 것 뿐만 아니라 Divide and Conqure를 촉진한다: 큰 문제를 풀 수 있는 작은 크기로 scale down 한다.
- 예제: 최대공약수 구하기(나머지도 두 숫자의 최대 공약수로 나누어 떨어진다 -> 나머지가 0 이면?)
- 현실적인 예제: Merge Sort

##Lazy Evaluation
- 함수의 리턴값을 결정하는데 필요한 순간까지 계산을 하지 않고 기다린다.
- 성능 향상에 유리함. 극단적인 경우: 무한 수열
- // wishful JavaScript pseudocode:
- var infinateNums = range(1 to infinity);
- var tenPrimes = infinateNums.getPrimeNumbers().first(10);
- 비동기 처리 등에 획기적으로 유리함.
- 자바스크립트 자체는 Lazy를 지원하지 않지만 외부 라이브러리를 이용하여 구현 가능.

#함수형 프로그래밍 도구
map, filter, reduce: 기본도구 이면서 순수함수, 고차함수의 표본


##callback
다른 함수에서 사용되도록 인자로 주어지는 함수. 익명함수로 많이 사용됨.
- 함수 이름만 인자로 넘김. 만약 호출까지 하면?

##Array.prototype.map()
- callback(): This function produces an element for the new array, receiving these arguments:
- currentValue: This argument gives the current element being processed in the array
- index: This argument gives the index of the current element in the array
- array: This argument gives the array being processed
- thisArg(): This function is optional. The value is used as this when executing callback. 
- 배열에서만 사용 가능하지만 Custom 객체에 쉽게 확장 가능하다.
- MyObject.prototype.map = function(f) {
  return new MyObject(f(this.value));
};

##Array.prototype.filter()
- 예제코드

##Array.prototype.redude()
배열의 모든 값을 연산하여 하나의 값으로 만든다.
- callback 함수 인자: 최소 2개 필요. previous value, current value
- 예제코드

##Array.prototype.foreach()
- map과 다른 점은?
- for loop의 간결한 버젼

## 그 외 helper 함수들
concat, reverse, sort, every, some. ...
- non-pure한 경우 조심.
