import userModel from '../models/userModel';

class UserService {
  static hasUser = async (username: string) => {
    const findOne = await userModel.findOne({
      where: {
        username,
      },
    });
    return Boolean(findOne);
  };

  static updateById = async (id: number, param: any) => {
    return userModel.update(param, { where: { id } });
  };

  static query = (param: any) => {
    return userModel.findOne({ where: param });
  };

  static add = (param: any) => {
    return userModel.create(param);
  };
}

export default UserService;
