var posts = [
  {
    time: "1259781232",
    type: 12,
    message: "Cowabunga!!",
    tags: ["pizza", "turtle power"]
  },
  {
    time: null,
    type: 0,
    message: null,
    tags: []
  }
]

var user = {
  id: 1829371260,
  email: "donatelo@tmnt.org",
  groups: ["12DSDJKHQ3NMCV3478", "987HKHQ3NM3FCV3478"],
  posts: posts
}

//changes:

var currentEmail = user.email
var currentGroups = user.groups

currentEmail = "leonardy@tmnt.org"
currentGroups[0] = null
