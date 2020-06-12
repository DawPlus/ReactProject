import client from './client';

// 로그인
export const getSummerner = (name) =>
  client.get(`https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/`,{
    
    headers : {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.97 Safari/537.36",
    "Accept-Language": "ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7",
    "Accept-Charset": "application/x-www-form-urlencoded; charset=UTF-8",
    "Origin": "https://developer.riotgames.com",
    "X-Riot-Token": "RGAPI-5f031901-b176-4c05-bd49-61afa84271de",
    "Access-Control-Allow-Origin" : "*",
    "origin" : "*"
}
});
