import jwt from 'jsonwebtoken';

const key = 'modukit';

class JWT {
  static setToken(data: any) {
    return jwt.sign(data, key, {
      expiresIn: '48h',
    });
  }
  static getData(token: string): any {
    return jwt.verify(token, key);
  }
}

export default JWT;
