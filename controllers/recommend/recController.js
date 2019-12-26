/*
정민
DB에서 키워드 가져와서 max 3개 값에 부합하는 상품 이미지들 클라에게 전달
GET | recommend/prefer
{
  img url: "",
  style : {
    keyword1,
    keyword2,
    keyword3
  }
} * N개
*/

const User = require('../../models/User');
const { au, sc, rm } = require('../../modules/utils');

exports.prefer = async (req, res) => {
  // keyword readAll
  const userEmail = req.decoded.email;
  const getKeyCnt = User.findOne().select('keyword'); //빼려면 -id 이런식 {}으로 아마 keyword값이 불러들여질것.
  //const get = getKeyCnt[0].dataValues;
  console.log(getKeyCnt);

  var keyList =[];
  for (key in get){
    keyList.push({
      "keyword":key,
      "cnt": get[key]
    });
  };
  
  // const sliceList = keyList.slice(1,10);

  //  // 오름차순으로 정렬해서 max 상위 3개 값의 키워드를 추출하기
  // var sortFields = "cnt";
  // sliceList.sort(function (a, b) {
  //   return (b[sortFields] - a[sortFields]);
  // });
  
  // const r = sliceList.slice(0,3);
  // const style = [];
  // for (var i =0;  i<r.length;i++){
  //   style.push(JSON.stringify(r[i].keyword).replace(/['"]+/g, ''));
  // };

  // 아이템 테이블에서 이 키워드 갖고 있는 img url+keyword 값 filter -> client에게 넘겨주기
  try{
    // const result = await Item.findAll({
    //   where:{
    //     style : style
    //   },
    //   attributes: ['image', 'style']
    // });
    // res.json(result);

  } catch(err) {
    console.log(err);
    res.status(sc.INTERNAL_SERVER_ERROR).send(au.successFalse(rm.INTERNAL_SERVER_ERROR));
  }
};