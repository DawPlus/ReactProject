import jwt from 'jsonwebtoken';

  class UserModule {
    #p = "admins"
    constructor(userid, username) {
      this.userid = userid;
      this.username = username;
    }

    generateToken = ()=>{
        const token =   jwt.sign(
            // 첫번째 파라미터엔 토큰 안에 집어넣고 싶은 데이터를 넣습니다
            {
            userid: this.userid,
            username: this.username,
            },
            this.#p, // 두번째 파라미터에는 JWT 암호를 넣습니다
            {
            expiresIn: '7d', // 7일동안 유효함
            },
        );
        return token;
    }
    get = () => {
        return this.#p;
    }

    verfy = ()=>{



    }
  }

module.exports = UserModule;
