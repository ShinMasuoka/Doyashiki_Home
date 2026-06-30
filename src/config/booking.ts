/**
 * 予約サイトURL管理
 * URLを変更するときはここだけ編集する
 */
export const BOOKING_URLS = {
  official: '', // 自社予約（じゃらんエンジン）← 本番URLに差し替え（空文字 = 整備中表示）
  airbnb: 'https://airbnb.jp/h/doyashiki',
  jalan: 'https://www.jalan.net/yad342414/?screenId=UWW3001&yadNo=342414&stayMonth=&dateUndecided=1&stayYear=&stayDay=&minPrice=0&maxPrice=999999&rootCd=7701&yadoDetailMode=1&callbackHistFlg=1&smlCd=330808&distCd=01',
  tabilmo: 'https://tabilmo.com/villas/chugoku/okayama/area-234/old-house/2343',
} as const;

/** 日本語版の予約導線ラベル */
export const BOOKING_LABELS_JA = {
  officialBtn: '公式予約ページで空室を見る',
  othersLabel: '各サイトからもご予約いただけます',
  airbnb: 'Airbnb',
  jalan: 'じゃらん',
  tabilmo: 'Tabilmo',
  menuCta: '空室を見る・予約する',
} as const;

/** 英語版の予約導線ラベル */
export const BOOKING_LABELS_EN = {
  officialBtn: 'Check Availability',
  othersLabel: 'Also available on',
  airbnb: 'Airbnb',
  jalan: 'Jalan',
  tabilmo: 'Tabilmo',
  menuCta: 'Book Now',
} as const;
