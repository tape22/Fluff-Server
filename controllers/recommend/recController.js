/*
정민
GET | recommend/prefer
{
  img url: "",
  keyword : {
    "ddd","ddd","ddd"
  }
} * N개
*/

const { Keyword, Item } = require('../../models');
const { au, sc, rm } = require('../../modules/utils');

exports.ss = async (req, res) => {
  // keyword 테이블에서 값을 가져옴. 
  const getKeyCnt = await Keyword.findAll();
  const get = JSON.stringify(getKeyCnt[0]);



  // const toObj = getKeyCnt.map(([keyword,cnt ]) => ({ keyword,cnt }));
  // console.log(toObj);
  
  // 오름차순으로 정렬해서 max 상위 3개 값의 키워드를 추출하기
  // var sortFields ="cnt";
  // getKeyCnt.sort(function (a, b) {
  //   return (b[sortFields] - a[sortFields]);
  // });
  
  // const r = getKeyCnt.slice(0,3);
  // const k = [];
  // for (var i =0;  i<r.length;i++){
  //   k.push(JSON.stringify(r[i].keyword).replace(/['"]+/g, ''));
  // };
  // console.log({k});  
  //v{ k: [ 'lovely', 'simple', 'sporty' ] }

  // 아이템 테이블에서 이 키워드 갖고 있는 img url+keyword 값 filter -> client에게 넘겨주기
  try{
    // const result = await Item.findAll(
    //   {where:{
    //     keyword : k
    //   }
    //   });
    // res.json(result);
    //console.log(result);
    } catch(err) {
      console.log(err);
      res.status(sc.INTERNAL_SERVER_ERROR).send(au.successFalse(rm.INTERNAL_SERVER_ERROR));  
  }
};