// utility type (Partial, Pick, Omit...)
// 이미 정의된 type 을 변환
interface Menu {
  pizza: string;
  chicken: string;
  soda: string;
  beer: string;
}

// Partial<T>: 모든 property 를 선택적으로 만든 type(OR)
// optional property 를 사용한 interface 를 별도로 정의하지 않고,
// 데이터의 특정 속성만을 선택적으로 update 할 수 있다.
function modifyMyMenu(menu: Partial<Menu>) {
  return { ...menu };
}
modifyMyMenu({ pizza: "pepperoni", soda: "coke" });

// Pick<T>: 모든 property 중 지정된 property 로만 구성된 type(AND)
// 구분자 | 로 property 분리
type ComboMeal = Pick<Menu, "chicken" | "beer">;
function getComboMeal(menu: ComboMeal): ComboMeal {
  return { ...menu };
}
const myMenu1: ComboMeal = {
  chicken: "garlic",
  beer: "lager",
};
myMenu1.chicken;
myMenu1.beer;

type PromiseState<T> = Pick<Promise<T>, "then" | "catch">;
const newPromise: PromiseState<number> = Promise.resolve(123);
newPromise.then;
newPromise.catch;

// Omit<T>: 모든 property 중 지정된 property 만 제거한 type(AND)
// 구분자 | 로 property 분리
type FamilyMeal = Omit<Menu, "beer">;
function getFamilyMeal(menu: FamilyMeal): FamilyMeal {
  return { ...menu };
}
const myMenu2: FamilyMeal = {
  pizza: "gorgonzola",
  chicken: "soy sauce",
  soda: "sprite",
};
