// template literal type (템플릿 리터럴 타입)

type BOTTOM_SHEET_ID =
  | "ACTION_A"
  | "ACTION_B"
  | "ACTION_C"
  | "ACTION_D"
  | "BASE";

// "ACTION_A_BOTTOM_SHEET" | "ACTION_B_BOTTOM_SHEET" | "ACTION_C_BOTTOM_SHEET"
// | "ACTION_D_BOTTOM_SHEET" | "BASE_BOTTOM_SHEET"
type BOTTOM_SHEET_ID_AS = `${BOTTOM_SHEET_ID}_BOTTOM_SHEET`;

// mapped type 사용 및 as 키워드로 키 재지정하기

// 임의의 React 컴포넌트들
let ActionABottomSheet: unknown;
let ActionBBottomSheet: unknown;
let ActionCBottomSheet: unknown;
let ActionDBottomSheet: unknown;

const BottomSheetMap = {
  ACTION_A: ActionABottomSheet,
  ACTION_B: ActionBBottomSheet,
  ACTION_C: ActionCBottomSheet,
  ACTION_D: ActionDBottomSheet,
  BASE: null,
};

// BOTTOM_SHEET_ID 와 같음
type BOTTOM_SHEET_ID2 = keyof typeof BottomSheetMap;

// 값의 타입이 모두 같은 각각 다른 이름의 속성을 가짐
type BottomSheetStore = {
  [index in BOTTOM_SHEET_ID2 as `${index}_BOTTOM_SHEET`]: {
    resolver?: (payload: any) => void;
    args?: any;
    isOpened: boolean;
  };
};
