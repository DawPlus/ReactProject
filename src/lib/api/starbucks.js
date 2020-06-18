import client from './client';

var url = "https://www.starbucks.co.kr/store/getStoreStockList.do?stock_data[[0][sku_no]=9400000000975&stock_data[[0][sku_nm]=bag_green&stock_data[[0][sku_kor_nm]=%EA%B7%B8%EB%A6%B0&stock_data[[1][sku_no]=9400000000976&stock_data[[1][sku_nm]=bag_pink&stock_data[[1][sku_kor_nm]=%ED%95%91%ED%81%AC&gugun_cd=1010"
var cookie = "_xm_webid_1_=-1634992047; JSESSIONID=k767VIbrBBruHGP5da7Sv5BaExAPLJpfTKXQpmQafVWSd4ey4Fm61zDYHiRqdPjh.aHBfZG9tYWluL2tpd2kwMg==; _ga=GA1.3.2105492790.1592456442; _gid=GA1.3.1627885048.1592456442; PCID=15924564430187508245656; RC_RESOLUTION=1366*768; RC_COLOR=24; UID=LIFERT";
export const getBag = (gugun_cd) => {return client.get(url,{ withCredentials: true
});
}

