const data1 = [
  {
    name:'张三',
    wxId:'321654asdasd',
    friendsNum:'121',
    IMEI:'1a2b3c4d',
    status:'ONLINE',

  },
  {
    name:'里斯',
    wxId:'321654asdasd',
    friendsNum:'124',
    IMEI:'1a2b3c4d',
    status:'OFFLINE',

  },
  {
    name:'王武',
    wxId:'321654asdasd',
    friendsNum:'122',
    IMEI:'1a2b3c4d',
    status:'ONLINE',

  },
  {
    name:'二狗',
    wxId:'321654asdasd',
    friendsNum:'52',
    IMEI:'1a2b3c4d',
    status:'OFFLINE',

  },
  {
    name:'全蛋',
    wxId:'321654asdasd',
    friendsNum:'12',
    IMEI:'1a2b3c4d',
    status:'ONLINE',

  },
  {
    name:'老幺',
    wxId:'321654asdasd',
    friendsNum:'22',
    IMEI:'1a2b3c4d',
    status:'OFFLINE',

  },
]


const data2 = data1.map((v, i) => ({
    name:'张三6' + '2' + i,
    wxId:'321654asdasd',
    friendsNum: (Math.random() * 100).toFixed(0),
    IMEI:'1a2b3c4d',
    status: Math.random > 0.5 ? 'ONLINE' : 'OFFLINE',
}))
const data3 = data1.map((v, i) => ({
    name:'张三6' + '3' + i,
    wxId:'321654asdasd',
    friendsNum: (Math.random() * 100).toFixed(0),
    IMEI:'1a2b3c4d',
    status: Math.random > 0.5 ? 'ONLINE' : 'OFFLINE',
}))
const data4 = data1.map((v, i) => ({
    name: v.name + '4' + i,
    wxId:'321654asdasd',
    friendsNum: (Math.random() * 100).toFixed(0),
    IMEI:'1a2b3c4d',
    status: Math.random > 0.5 ? 'ONLINE' : 'OFFLINE',
}))
const data5 = data1.map((v, i) => ({
    name:'张三6' + '5' + i,
    wxId:'321654asdasd',
    friendsNum: (Math.random() * 100).toFixed(0),
    IMEI:'1a2b3c4d',
    status: Math.random > 0.5 ? 'ONLINE' : 'OFFLINE',
}))

const apiRes = {
  success: true,
  errCode: null,
  data: data1,
  pageIndex: 2,
  pageSize: 20,
  total: 120
}

export default data1

export {
  data1,
  data2,
  data3,
  data4,
  data5,
  apiRes
}