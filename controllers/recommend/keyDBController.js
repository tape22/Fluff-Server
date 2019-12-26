/*
정민
클라에게서 받은 keyword,cnt값을 그 userId를 가진 DB에 저장하기
POST | recommend/keyDB
{
    keyword : cnt
} * 30개
*/
const User = require('../../models/User');
const { au,sc,rm } = require('../../modules/utils');

exports.keyDB = async (req, res) => {
  const userEmail = req.decoded.email; // userIdx,email,username
  const { getKeyList } = req.body; // 비구조 할당 

  //12.26 오후 7시 윤자이가 user 더미데이터 넣어주면 테스트해보기.
  try {
    let userModel = await User.findById(userEmail); //id에 해당하는 유저를 찾는다.
    if (!userModel) {
      return res.json({
        code: sc.BAD_REQUEST,
        json: au.successFalse(rm.DB_NOT_MATCHED_ERROR)
      });
    };

    userModel.keyword = getKeyList; // 여기의 키워드에 받아온 값을 넣는다.
    const result = await userModel.save();
    console.log(result);

    res.json({
      code: sc.OK,
      json: au.successTrue(rm.DB_KEYWORD_UPDATE_SUCCESS, result)
    });
  } catch (err) {
    console.log(err);
    res.json({
      code: sc.INTERNAL_SERVER_ERROR,
      json: au.successFalse(rm.INTERNAL_SERVER_ERROR)
    });
  }
};